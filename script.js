// ============================================================
// MATH MISSION — RATIO QUEST
// script.js — Game Engine
// "Misi Menemukan Perbandingan yang Tepat"
// ============================================================
// Fungsi utama:
// 1. Navigasi layar
// 2. Data pemain & progres
// 3. Membaca questions.js
// 4. Menampilkan berbagai tipe soal
// 5. Skor, feedback, hint, dan error analysis
// 6. Mission Map
// 7. Mistake Lab
// 8. Boss Challenge
// 9. Rekap nilai siswa
// 10. Penyimpanan progres dengan localStorage
// ============================================================

(() => {
  "use strict";

  const Q = window.RATIO_QUESTIONS || [];
const BANKS = window.RATIO_QUESTION_BANKS || {};
const MISSIONS = window.RATIO_MISSION_INFO || {};

console.log("=================================");
console.log("🔎 RATIO QUEST — CEK DATA");
console.log("=================================");
console.log("Jumlah soal:", Q.length);
console.log("Bank soal:", BANKS);
console.log("Mission info:", MISSIONS);

if (!Q.length) {
  console.error(
    "❌ QUESTIONS.JS BELUM TERBACA!"
  );
} else {
  console.log(
    "✅ QUESTIONS.JS TERBACA:",
    Q.length,
    "soal"
  );
}

  const STORAGE_KEY = "ratioQuestProgress_v1";

  const APP = {
    currentScreen: "start",
    currentMission: null,
    currentQuestionIndex: 0,
    currentQuestions: [],
    currentQuestion: null,
    selectedAnswer: null,
    lastResult: null,
    isRetry: false,
    timer: null,
    timerSeconds: 0,
    session: null,
    progress: null,
    answeredIds: new Set(),
    mistakeIds: [],
    bossMode: false
  };

  // ============================================================
  // UTILITIES
  // ============================================================

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function normalize(value) {
    return String(value ?? "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function getMissionQuestions(mission) {
    if (Array.isArray(BANKS[mission])) {
      return [...BANKS[mission]];
    }

    return Q.filter(q => q.mission === mission);
  }

  function getMissionName(mission) {
    return (
      MISSIONS[mission]?.name ||
      Q.find(q => q.mission === mission)?.missionName ||
      mission
    );
  }

  function scorePercent(score, total) {
    if (!total) return 0;

    return Math.round((score / total) * 100);
  }

  function masteryLabel(percent) {
    if (percent >= 80) return "TUNTAS";
    if (percent >= 60) return "PERLU PENGUATAN";

    return "PERLU BIMBINGAN";
  }

  function getErrorLabel(code) {
    const labels = {
      E1: "Salah menentukan besaran yang dibandingkan",
      E2: "Salah urutan rasio",
      E3: "Salah menyederhanakan rasio",
      E4: "Salah menentukan rasio senilai/faktor pengali",
      E5: "Salah memahami konteks"
    };

    return (
      labels[code] ||
      "Perlu mengecek kembali strategi penyelesaian"
    );
  }

  // ============================================================
  // STORAGE
  // ============================================================

  function createEmptyProgress() {
    return {
      studentName: "",
      studentClass: "VI A",
      avatar: "👦",

      startedAt: null,

      pretest: {
        score: 0,
        total: 0,
        completed: false
      },

      missions: {},

      boss: {
        score: 0,
        total: 0,
        completed: false
      },

      mistakes: [],

      attempts: 0,

      lastPlayed: null
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      APP.progress = raw
        ? {
            ...createEmptyProgress(),
            ...JSON.parse(raw)
          }
        : createEmptyProgress();

    } catch (error) {
      console.warn(
        "Progress tidak dapat dibaca:",
        error
      );

      APP.progress = createEmptyProgress();
    }
  }

  function saveProgress() {
    if (!APP.progress) return;

    APP.progress.lastPlayed =
      new Date().toISOString();

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(APP.progress)
      );

    } catch (error) {
      console.warn(
        "Progress tidak dapat disimpan:",
        error
      );
    }
  }

  function resetProgress() {
    APP.progress = createEmptyProgress();

    APP.answeredIds.clear();

    APP.mistakeIds = [];

    saveProgress();
  }

  // ============================================================
  // DYNAMIC UI FALLBACK
  // ============================================================

  function ensureAppShell() {
    let root = $("#app");

    if (!root) {
      root = document.createElement("main");

      root.id = "app";

      document.body.prepend(root);
    }

    if (!$("#rq-start", root)) {
      root.innerHTML = `

        <section id="rq-start"
          class="rq-screen active-screen">

          <div class="rq-card rq-start-card">

            <div class="rq-logo">🧭</div>

            <div class="rq-kicker">
              MATH MISSION
            </div>

            <h1>RATIO QUEST</h1>

            <p>
              Misi Menemukan Perbandingan yang Tepat
            </p>

            <div class="rq-form">

              <label for="rq-name">
                Nama Siswa
              </label>

              <input
                id="rq-name"
                type="text"
                maxlength="40"
                placeholder="Tulis nama kamu..."
                autocomplete="off"
              >

              <label for="rq-class">
                Kelas
              </label>

              <input
                id="rq-class"
                type="text"
                value="VI A"
                maxlength="10"
              >

              <button
                id="rq-start-btn"
                class="rq-btn rq-btn-primary"
              >
                🚀 Mulai Misi
              </button>

            </div>

          </div>

        </section>


        <section id="rq-map"
          class="rq-screen">

          <div class="rq-card">

            <div class="rq-topbar">

              <button
                class="rq-btn rq-btn-small"
                data-action="home"
              >
                ⌂ Beranda
              </button>

              <span id="rq-player-badge"></span>

            </div>

            <div class="rq-kicker">
              MISSION MAP
            </div>

            <h2>Pilih Misi</h2>

            <div
              id="rq-mission-list"
              class="rq-mission-grid"
            ></div>

            <div class="rq-special-grid">

              <button
                class="rq-special"
                data-action="mistake"
              >
                🧩 Mistake Lab
              </button>

              <button
                class="rq-special"
                data-action="boss"
              >
                👑 Boss Challenge
              </button>

              <button
                class="rq-special"
                data-action="scores"
              >
                📊 Nilai Siswa
              </button>

            </div>

          </div>

        </section>


        <section id="rq-game"
          class="rq-screen">

          <div class="rq-card rq-game-card">

            <div class="rq-topbar">

              <button
                class="rq-btn rq-btn-small"
                data-action="map"
              >
                ← Mission Map
              </button>

              <div id="rq-game-title"></div>

              <div id="rq-score">
                0
              </div>

            </div>

            <div class="rq-progress">
              <div id="rq-progress-bar"></div>
            </div>

            <div id="rq-question-area"></div>

            <div id="rq-feedback-area"></div>

          </div>

        </section>


        <section id="rq-result"
          class="rq-screen">

          <div class="rq-card rq-result-card">

            <div id="rq-result-content"></div>

            <button
              class="rq-btn rq-btn-primary"
              data-action="map"
            >
              🗺️ Kembali ke Mission Map
            </button>

          </div>

        </section>


        <section id="rq-mistake"
          class="rq-screen">

          <div class="rq-card">

            <div class="rq-topbar">

              <button
                class="rq-btn rq-btn-small"
                data-action="map"
              >
                ← Mission Map
              </button>

            </div>

            <div class="rq-kicker">
              MISTAKE LAB
            </div>

            <h2>
              Belajar dari Kesalahan
            </h2>

            <div
              id="rq-mistake-content"
            ></div>

          </div>

        </section>


        <section id="rq-scores"
          class="rq-screen">

          <div class="rq-card">

            <div class="rq-topbar">

              <button
                class="rq-btn rq-btn-small"
                data-action="map"
              >
                ← Mission Map
              </button>

            </div>

            <div class="rq-kicker">
              STUDENT REPORT
            </div>

            <h2>
              Nilai Siswa
            </h2>

            <div
              id="rq-score-content"
            ></div>

          </div>

        </section>

      `;
    }
  }

  // ============================================================
  // SCREEN NAVIGATION
  // ============================================================

  function screenSelector(name) {

    const aliases = {

      start: [
        "#rq-start",
        "#startScreen",
        "#start-screen"
      ],

      map: [
        "#rq-map",
        "#mapScreen",
        "#missionMap",
        "#mission-map"
      ],

      game: [
        "#rq-game",
        "#gameScreen",
        "#game-screen"
      ],

      result: [
        "#rq-result",
        "#resultScreen",
        "#result-screen"
      ],

      mistake: [
        "#rq-mistake",
        "#mistakeScreen",
        "#mistake-lab"
      ],

      scores: [
        "#rq-scores",
        "#scoreScreen",
        "#studentScores"
      ]

    };

    return aliases[name] || [];
  }

  function showScreen(name) {

    stopTimer();

    APP.currentScreen = name;

    const allScreens =
      $$(".rq-screen, .screen, [data-screen]");

    allScreens.forEach(el => {

      el.classList.remove(
        "active-screen",
        "active",
        "show"
      );

      el.hidden = true;

    });

    let target = null;

    for (const selector of screenSelector(name)) {

      target = $(selector);

      if (target) break;

    }

    if (!target) {

      console.warn(
        `Screen '${name}' tidak ditemukan.`
      );

      return;
    }

    target.hidden = false;

    target.classList.add(
      "active-screen",
      "active",
      "show"
    );

    if (name === "map") {
      renderMissionMap();
    }

    if (name === "mistake") {
      renderMistakeLab();
    }

    if (name === "scores") {
      renderStudentScores();
    }
  }

  // ============================================================
  // START GAME
  // ============================================================

  function startGame() {

    const nameInput =
      $("#rq-name") ||
      $("#studentName") ||
      $("[name='studentName']");

    const classInput =
      $("#rq-class") ||
      $("#studentClass") ||
      $("[name='studentClass']");

    const name =
      (nameInput?.value || "").trim();

    const studentClass =
      (classInput?.value || "VI A")
        .trim() || "VI A";

    if (!name) {

      alert(
        "Tulis nama terlebih dahulu sebelum memulai misi."
      );

      nameInput?.focus();

      return;
    }

    APP.progress.studentName = name;

    APP.progress.studentClass =
      studentClass;

    if (!APP.progress.startedAt) {
      APP.progress.startedAt =
        new Date().toISOString();
    }

    saveProgress();

    showScreen("map");
  }

  // ============================================================
  // MISSION MAP
  // ============================================================

  const missionOrder = [
    "PRETEST",
    "RD",
    "RB",
    "RBR",
    "RRL",
    "RM"
  ];

  const missionFallback = {

    PRETEST: {
      title: "Starting Point",
      icon: "🎯",
      desc: "Cek kemampuan awal"
    },

    RD: {
      title: "Ratio Detective",
      icon: "🔎",
      desc: "Temukan perbandingan"
    },

    RB: {
      title: "Ratio Builder",
      icon: "🧱",
      desc: "Bangun rasio sederhana"
    },

    RBR: {
      title: "Ratio Bridge",
      icon: "🌉",
      desc: "Temukan rasio senilai"
    },

    RRL: {
      title: "Ratio in Real Life",
      icon: "🌎",
      desc: "Gunakan rasio dalam kehidupan"
    },

    RM: {
      title: "Ratio Master",
      icon: "🧠",
      desc: "Tuntaskan tantangan penalaran"
    }

  };

  function getMissionMeta(id) {

    const source = MISSIONS[id];

    const fallback =
      missionFallback[id] || {};

    return {

      title:
        source?.name ||
        source?.title ||
        fallback.title ||
        id,

      icon:
        source?.icon ||
        fallback.icon ||
        "⭐",

      desc:
        source?.description ||
        source?.desc ||
        fallback.desc ||
        "Selesaikan misi ini."

    };
  }

 function missionStatus(id) {

  // PRETEST selalu menjadi titik awal
  if (id === "PRETEST") {
    return APP.progress.pretest.completed
      ? "done"
      : "available";
  }

  // Jika misi sudah selesai
  const record = APP.progress.missions[id];

  if (record?.completed) {
    return "done";
  }

  // Cari posisi misi
  const index = missionOrder.indexOf(id);

  // Misi pertama setelah Pretest = Ratio Detective
  if (id === "RD") {
    return APP.progress.pretest.completed
      ? "available"
      : "locked";
  }

  // Jika misi tidak ditemukan
  if (index === -1) {
    return "locked";
  }

  // Misi berikutnya harus menunggu misi sebelumnya
  const previous = missionOrder[index - 1];

  if (previous === "PRETEST") {
    return APP.progress.pretest.completed
      ? "available"
      : "locked";
  }

  return APP.progress.missions[previous]?.completed
    ? "available"
    : "locked";
}

  function renderMissionMap() {

    const list =
      $("#rq-mission-list");

    if (!list) return;

    list.innerHTML =
      missionOrder
        .map((id, index) => {

          const meta =
            getMissionMeta(id);

          const status =
            missionStatus(id);

          const record =
            id === "PRETEST"
              ? APP.progress.pretest
              : APP.progress.missions[id];

          const percent =
            record?.total
              ? scorePercent(
                  record.score,
                  record.total
                )
              : 0;

          const locked =
            status === "locked";

          const statusText =
            status === "done"
              ? `✓ ${percent}%`
              : locked
                ? "🔒 Terkunci"
                : "Mulai";

          return `

            <button
              class="rq-mission-card ${status}"
              data-mission="${id}"
              ${locked ? "disabled" : ""}
            >

              <span class="rq-mission-number">
                ${index + 1}
              </span>

              <span class="rq-mission-icon">
                ${meta.icon}
              </span>

              <strong>
                ${escapeHTML(meta.title)}
              </strong>

              <small>
                ${escapeHTML(meta.desc)}
              </small>

              <span class="rq-mission-status">
                ${statusText}
              </span>

            </button>

          `;

        })
        .join("");

    const badge =
      $("#rq-player-badge");

    if (badge) {

      badge.textContent =
        `${APP.progress.avatar} ` +
        `${APP.progress.studentName} • ` +
        `${APP.progress.studentClass}`;

    }
  }

  function launchMission(mission) {

    if (mission === "PRETEST") {

      runQuestionBank(
        "PRETEST",
        {
          shuffleQuestions: false
        }
      );

      return;
    }

    if (mission === "BOSS") {

      runQuestionBank(
        "BOSS",
        {
          shuffleQuestions: true,
          boss: true
        }
      );

      return;
    }

    if (missionOrder.includes(mission)) {

      runQuestionBank(
        mission,
        {
          shuffleQuestions: true
        }
      );

    }
  }

  // ============================================================
  // QUESTION ENGINE
  // ============================================================

  function runQuestionBank(
    mission,
    options = {}
  ) {

    let bank =
      getMissionQuestions(mission);

    if (!bank.length) {

      alert(
        `Bank soal ${mission} belum tersedia.`
      );

      return;
    }

    if (options.shuffleQuestions) {
      bank = shuffle(bank);
    }

    APP.currentMission = mission;

    APP.currentQuestions = bank;

    APP.currentQuestionIndex = 0;

    APP.currentQuestion = null;

    APP.selectedAnswer = null;

    APP.lastResult = null;

    APP.isRetry = false;

    APP.bossMode =
      Boolean(options.boss);

    APP.session = {

      mission,

      score: 0,

      correct: 0,

      wrong: 0,

      attempts: 0,

      startedAt: Date.now(),

      mistakes: [],

      answered: []

    };

    showScreen("game");

    renderQuestion();
  }

  function renderQuestion() {

    const q =
      APP.currentQuestions[
        APP.currentQuestionIndex
      ];

    if (!q) {

      finishMission();

      return;
    }

    APP.currentQuestion = q;

    APP.selectedAnswer = null;

    APP.lastResult = null;

    const title =
      $("#rq-game-title");

    if (title) {

      title.innerHTML =
        `<span>${escapeHTML(
          getMissionName(
            APP.currentMission
          )
        )}</span>`;

    }

    const score =
      $("#rq-score");

    if (score) {

      score.textContent =
        `${APP.session.score} poin`;

    }

    const bar =
      $("#rq-progress-bar");

    if (bar) {

      bar.style.width =
        `${(
          APP.currentQuestionIndex /
          APP.currentQuestions.length
        ) * 100}%`;

    }

    const area =
      $("#rq-question-area");

    const feedback =
      $("#rq-feedback-area");

    if (!area) return;

    if (feedback) {
      feedback.innerHTML = "";
    }

    area.innerHTML = `

      <div class="rq-question-meta">

        <span>
          Soal
          ${APP.currentQuestionIndex + 1}
          /
          ${APP.currentQuestions.length}
        </span>

        <span>
          ${escapeHTML(q.level || "")}
        </span>

      </div>

      ${
        q.stimulus
          ? `
            <div class="rq-stimulus">
              ${formatText(q.stimulus)}
            </div>
          `
          : ""
      }

      <div class="rq-question">
        ${formatText(q.question)}
      </div>

      <div
        id="rq-answer-zone"
        class="rq-answer-zone"
      ></div>

      <div class="rq-action-row">

        ${
          APP.bossMode
            ? ""
            : `
              <button
                class="rq-btn rq-btn-hint"
                data-action="hint"
              >
                💡 Petunjuk
              </button>
            `
        }

        <button
          id="rq-submit"
          class="rq-btn rq-btn-primary"
          data-action="submit"
        >
          Jawab
        </button>

      </div>

    `;

    renderAnswerInput(q);

    updateSubmitState();
  }

  function formatText(text) {

    return escapeHTML(
      text || ""
    ).replace(/\n/g, "<br>");
  }

  // ============================================================
  // ANSWER INPUT
  // ============================================================

 function renderAnswerInput(q) {

  const zone = $("#rq-answer-zone");

  if (!zone) return;

  // ============================================================
  // MULTIPLE CHOICE
  // ============================================================

  if (q.type === "multiple_choice") {

    const options = Array.isArray(q.options)
      ? q.options
      : [];

    zone.innerHTML = options
      .map((opt, index) => {

        // Mendukung 2 format:
        // 1. "Jawaban berupa string"
        // 2. { id: "A", text: "Jawaban" }

        const isObject =
          typeof opt === "object" &&
          opt !== null;

        const id =
          isObject
            ? (opt.id ?? String.fromCharCode(65 + index))
            : String.fromCharCode(65 + index);

        const text =
          isObject
            ? (opt.text ?? "")
            : String(opt);

        return `
          <button
            type="button"
            class="rq-option"
            data-answer="${escapeHTML(text)}"
          >

            <span class="rq-option-id">
              ${escapeHTML(id)}
            </span>

            <span class="rq-option-text">
              ${formatText(text)}
            </span>

          </button>
        `;

      })
      .join("");

    return;
  }


  // ============================================================
  // TRUE / FALSE
  // ============================================================

  if (q.type === "true_false") {

    zone.innerHTML = `
      <button
        type="button"
        class="rq-option"
        data-answer="Benar"
      >
        <span class="rq-option-id">✓</span>
        <span class="rq-option-text">Benar</span>
      </button>

      <button
        type="button"
        class="rq-option"
        data-answer="Salah"
      >
        <span class="rq-option-id">✕</span>
        <span class="rq-option-text">Salah</span>
      </button>
    `;

    return;
  }


  // ============================================================
  // SHORT ANSWER
  // ============================================================

  if (q.type === "short_answer") {

    zone.innerHTML = `
      <input
        id="rq-short-answer"
        class="rq-short-answer"
        type="text"
        autocomplete="off"
        placeholder="Tulis jawabanmu..."
      >
    `;

    return;
  }


  // ============================================================
  // MATCHING
  // ============================================================

  if (q.type === "matching") {

    const opts =
      Array.isArray(q.options)
        ? q.options
        : [];

    zone.innerHTML = `

      <p class="rq-mini-label">
        Pilih pasangan sesuai urutan.
      </p>

      <div class="rq-matching-list">

        ${opts.map((opt, i) => `

          <label class="rq-match-row">

            <span>
              ${formatText(opt)}
            </span>

            <select
              data-match-index="${i}"
            >

              <option value="">
                Pilih
              </option>

              ${opts.map((_, j) => `
                <option value="${j}">
                  ${j + 1}
                </option>
              `).join("")}

            </select>

          </label>

        `).join("")}

      </div>

    `;

    return;
  }


  // ============================================================
  // FALLBACK
  // ============================================================

  zone.innerHTML = `
    <input
      id="rq-short-answer"
      class="rq-short-answer"
      type="text"
      autocomplete="off"
      placeholder="Tulis jawabanmu..."
    >
  `;
}

  function collectAnswer() {

    const q =
      APP.currentQuestion;

    if (!q) return null;

    if (q.type === "short_answer") {

      return (
        $("#rq-short-answer")
          ?.value
          .trim() || ""
      );
    }

    if (q.type === "matching") {

      return $$(
        "[data-match-index]"
      )
        .map(el => el.value)
        .join(",");
    }

    return APP.selectedAnswer;
  }

  function updateSubmitState() {

    const btn =
      $("#rq-submit");

    if (!btn) return;

    const answer =
      collectAnswer();

    btn.disabled = !answer;
  }

  // ============================================================
  // EVALUATE ANSWER
  // ============================================================

  function evaluateAnswer(q, answer) {

    if (q.type === "short_answer") {

      const expected =
        normalize(q.answer);

      const actual =
        normalize(answer);

      if (expected === actual) {
        return true;
      }

      const expectedNum =
        expected.match(
          /-?\d+(?:[.,]\d+)?/
        );

      const actualNum =
        actual.match(
          /-?\d+(?:[.,]\d+)?/
        );

      if (
        expectedNum &&
        actualNum &&
        expectedNum[0].replace(",", ".") ===
          actualNum[0].replace(",", ".")
      ) {
        return true;
      }

      return false;
    }

    if (q.type === "matching") {

      const expected =
        Array.isArray(q.answer)
          ? q.answer
              .map(normalize)
              .join("|")
          : normalize(q.answer);

      return (
        normalize(answer)
          .replace(/,/g, "|") ===
        expected.replace(/,/g, "|")
      );
    }

    return (
      normalize(answer) ===
      normalize(q.answer)
    );
  }

  // ============================================================
  // SUBMIT
  // ============================================================

  function submitAnswer() {

    const q =
      APP.currentQuestion;

    if (!q || APP.lastResult) {
      return;
    }

    const answer =
      collectAnswer();

    if (!answer) {

      alert(
        "Pilih atau tuliskan jawaban terlebih dahulu."
      );

      return;
    }

    const correct =
      evaluateAnswer(
        q,
        answer
      );

    APP.session.attempts++;

    APP.progress.attempts++;

    APP.lastResult = {
      correct,
      answer
    };

    APP.session.answered.push(
      q.id
    );

    APP.answeredIds.add(q.id);

    if (correct) {

      APP.session.correct++;

      APP.session.score +=
        Number(q.score || 10);

      showFeedback(
        true,
        q
      );

    } else {

      APP.session.wrong++;

      APP.session.mistakes.push(
        q.id
      );

      addMistake(q);

      showFeedback(
        false,
        q
      );
    }

    saveProgress();

    updateGameScore();
  }

  function updateGameScore() {

    const score =
      $("#rq-score");

    if (score) {

      score.textContent =
        `${APP.session.score} poin`;

    }
  }

  // ============================================================
  // FEEDBACK
  // ============================================================

  function showFeedback(
    correct,
    q
  ) {

    const area =
      $("#rq-feedback-area");

    if (!area) return;

    const title =
      correct
        ? "🎉 Jawaban Tepat!"
        : "🧩 Belum Tepat";

    const explanation =
      q.explanation
        ? formatText(q.explanation)
        : "";

    const error =
      !correct && q.errorCode
        ? `
          <div class="rq-error-code">

            <strong>
              ${escapeHTML(q.errorCode)}
            </strong>

            —
            ${escapeHTML(
              getErrorLabel(q.errorCode)
            )}

          </div>
        `
        : "";

    area.innerHTML = `

      <div
        class="rq-feedback ${
          correct
            ? "correct"
            : "wrong"
        }"
      >

        <h3>
          ${title}
        </h3>

        ${error}

        ${
          explanation
            ? `<p>${explanation}</p>`
            : ""
        }

        ${
          !APP.bossMode &&
          !correct &&
          q.feedback
            ? `
              <div class="rq-coach">
                🤖
                ${formatText(q.feedback)}
              </div>
            `
            : ""
        }

        <button
          class="rq-btn ${
            correct
              ? "rq-btn-primary"
              : "rq-btn-secondary"
          }"
          data-action="next-question"
        >

          ${
            APP.currentQuestionIndex ===
            APP.currentQuestions.length - 1
              ? "Lihat Hasil"
              : "Lanjut →"
          }

        </button>

      </div>

    `;

    const submit =
      $("#rq-submit");

    if (submit) {
      submit.disabled = true;
    }

    $$(".rq-option").forEach(
      btn => {

        btn.disabled = true;

        if (
          normalize(
            btn.dataset.answer
          ) ===
          normalize(q.answer)
        ) {

          btn.classList.add(
            "correct-option"
          );
        }

        if (
          APP.lastResult &&
          !correct &&
          normalize(
            btn.dataset.answer
          ) ===
          normalize(
            APP.lastResult.answer
          )
        ) {

          btn.classList.add(
            "wrong-option"
          );
        }

      }
    );
  }

  function nextQuestion() {

    APP.currentQuestionIndex++;

    if (
      APP.currentQuestionIndex >=
      APP.currentQuestions.length
    ) {

      finishMission();

    } else {

      renderQuestion();

    }
  }

  // ============================================================
  // HINT
  // ============================================================

  function showHint() {

    const q =
      APP.currentQuestion;

    if (!q || APP.bossMode) {
      return;
    }

    const area =
      $("#rq-feedback-area");

    if (!area) return;

    let hint = q.hint;

    if (!hint) {

      const hints = {

        E1:
          "Tentukan dua besaran yang benar-benar sedang dibandingkan.",

        E2:
          "Ingat urutan: besaran yang disebut pertama ditulis lebih dulu.",

        E3:
          "Cari faktor yang sama-sama dapat membagi kedua bilangan.",

        E4:
          "Bandingkan perubahan kedua besaran dengan faktor pengali yang sama.",

        E5:
          "Baca kembali situasinya. Tanyakan: angka ini mewakili apa?"

      };

      hint =
        hints[q.errorCode] ||
        "Baca informasi pada soal secara perlahan, lalu tentukan apa yang sebenarnya ditanyakan.";
    }

    area.innerHTML = `

      <div class="rq-feedback hint">

        <h3>
          💡 Petunjuk
        </h3>

        <p>
          ${formatText(hint)}
        </p>

      </div>

    `;
  }

  // ============================================================
  // MISTAKE LAB
  // ============================================================

  function addMistake(q) {

    const existing =
      APP.progress.mistakes.find(
        item => item.id === q.id
      );

    if (existing) {

      existing.count++;

      existing.lastAt =
        new Date().toISOString();

    } else {

      APP.progress.mistakes.push({

        id: q.id,

        mission: q.mission,

        errorCode:
          q.errorCode || "",

        count: 1,

        repaired: false,

        lastAt:
          new Date().toISOString()

      });

    }

    saveProgress();
  }

  function renderMistakeLab() {

    const area =
      $("#rq-mistake-content");

    if (!area) return;

    const mistakes =
      APP.progress.mistakes || [];

    if (!mistakes.length) {

      area.innerHTML = `

        <div class="rq-empty">

          <div class="rq-empty-icon">
            🌱
          </div>

          <h3>
            Belum ada kesalahan yang tersimpan.
          </h3>

          <p>
            Setiap kesalahan akan menjadi bahan belajar di sini.
          </p>

        </div>

      `;

      return;
    }

    const errorCount = {};

    mistakes.forEach(
      m => {

        errorCount[m.errorCode || "-"] =
          (
            errorCount[
              m.errorCode || "-"
            ] || 0
          ) + m.count;

      }
    );

    area.innerHTML = `

      <div class="rq-error-summary">

        ${Object.entries(errorCount)
          .map(
            ([code, count]) => `

              <div
                class="rq-error-chip"
              >

                <strong>
                  ${escapeHTML(code)}
                </strong>

                <span>
                  ${count}×
                </span>

              </div>

            `
          )
          .join("")}

      </div>


      <div class="rq-mistake-list">

        ${mistakes
          .map(m => {

            const q =
              Q.find(
                item =>
                  item.id === m.id
              );

            if (!q) return "";

            return `

              <article
                class="rq-mistake-card"
              >

                <div
                  class="rq-mistake-head"
                >

                  <span>
                    ${escapeHTML(
                      m.errorCode || ""
                    )}
                  </span>

                  <small>
                    ${escapeHTML(
                      getMissionName(
                        q.mission
                      )
                    )}
                  </small>

                </div>

                <h3>
                  ${formatText(
                    q.question
                  )}
                </h3>

                <p>
                  <strong>
                    Kesalahan yang perlu diperiksa:
                  </strong>

                  ${escapeHTML(
                    getErrorLabel(
                      q.errorCode
                    )
                  )}
                </p>

                <p>
                  <strong>
                    Pembahasan:
                  </strong>

                  ${formatText(
                    q.explanation
                  )}
                </p>

                <button
                  class="rq-btn rq-btn-small"
                  data-repair-id="${escapeHTML(
                    q.id
                  )}"
                >
                  🔧 Coba Lagi
                </button>

              </article>

            `;

          })
          .join("")}

      </div>

    `;
  }

  function retryQuestion(id) {

    const q =
      Q.find(
        item => item.id === id
      );

    if (!q) return;

    APP.currentMission =
      q.mission;

    APP.currentQuestions =
      [q];

    APP.currentQuestionIndex = 0;

    APP.currentQuestion = null;

    APP.selectedAnswer = null;

    APP.lastResult = null;

    APP.isRetry = true;

    APP.bossMode = false;

    APP.session = {

      mission: q.mission,

      score: 0,

      correct: 0,

      wrong: 0,

      attempts: 0,

      startedAt: Date.now(),

      mistakes: [],

      answered: []

    };

    showScreen("game");

    renderQuestion();
  }

  // ============================================================
  // FINISH / RESULT
  // ============================================================

  function finishMission() {

    stopTimer();

    const total =
      APP.currentQuestions.length;

    const percent =
      scorePercent(
        APP.session.score,
        total * 10
      );

    const correct =
      APP.session.correct;

    const mission =
      APP.currentMission;

    if (!APP.isRetry) {

      if (mission === "PRETEST") {

        APP.progress.pretest = {

          score:
            APP.session.score,

          total:
            total * 10,

          completed:
            true

        };

      } else if (mission === "BOSS") {

        APP.progress.boss = {

          score:
            APP.session.score,

          total:
            total * 10,

          completed:
            true

        };

      } else {

        APP.progress.missions[mission] = {

          score:
            APP.session.score,

          total:
            total * 10,

          correct,

          wrong:
            APP.session.wrong,

          attempts:
            APP.session.attempts,

          completed:
            true,

          percent

        };

      }
    }

    saveProgress();

    renderResult(
      percent,
      correct,
      total,
      mission
    );

    showScreen("result");
  }

  function renderResult(
    percent,
    correct,
    total,
    mission
  ) {

    const area =
      $("#rq-result-content");

    if (!area) return;

    const label =
      masteryLabel(percent);

    const boss =
      mission === "BOSS";

    const retry =
      APP.isRetry;

    area.innerHTML = `

      <div class="rq-result-icon">

        ${
          percent >= 80
            ? "🏆"
            : percent >= 60
              ? "⭐"
              : "🌱"
        }

      </div>

      <div class="rq-kicker">

        ${
          boss
            ? "BOSS CHALLENGE"
            : escapeHTML(
                getMissionName(
                  mission
                )
              )
        }

      </div>

      <h2>

        ${
          retry
            ? "Percobaan Selesai"
            : "Misi Selesai!"
        }

      </h2>

      <div class="rq-big-score">
        ${percent}%
      </div>

      <div class="rq-mastery">
        ${label}
      </div>

      <p>
        ${correct} dari ${total}
        soal benar.
      </p>

      ${
        !boss && !retry
          ? `
            <p class="rq-result-message">
              Kesalahan bukan akhir misi.
              Gunakan Mistake Lab untuk
              memperbaiki strategi.
            </p>
          `
          : ""
      }

      ${
        retry
          ? `
            <p class="rq-result-message">
              Coba lagi sampai kamu
              memahami langkahnya.
            </p>
          `
          : ""
      }

    `;
  }

  // ============================================================
  // STUDENT SCORE REPORT
  // ============================================================

  function renderStudentScores() {

    const area =
      $("#rq-score-content");

    if (!area) return;

    const rows = [

      [
        "Pretest",
        APP.progress.pretest
      ],

      ...missionOrder
        .slice(1)
        .map(id => [
          getMissionName(id),
          APP.progress.missions[id]
        ]),

      [
        "Boss Challenge",
        APP.progress.boss
      ]

    ];

    const completedScores =
      rows.filter(
        ([, r]) =>
          r?.completed
      );

    const totalPoints =
      completedScores.reduce(
        (sum, [, r]) =>
          sum + (r.score || 0),
        0
      );

    const totalMax =
      completedScores.reduce(
        (sum, [, r]) =>
          sum + (r.total || 0),
        0
      );

    const overall =
      scorePercent(
        totalPoints,
        totalMax
      );

    area.innerHTML = `

      <div class="rq-student-summary">

        <div>

          <small>
            Nama
          </small>

          <strong>
            ${escapeHTML(
              APP.progress.studentName ||
              "-"
            )}
          </strong>

        </div>

        <div>

          <small>
            Kelas
          </small>

          <strong>
            ${escapeHTML(
              APP.progress.studentClass ||
              "-"
            )}
          </strong>

        </div>

        <div>

          <small>
            Rata-rata progres
          </small>

          <strong>
            ${overall}%
          </strong>

        </div>

      </div>


      <div class="rq-score-table-wrap">

        <table class="rq-score-table">

          <thead>

            <tr>

              <th>
                Misi
              </th>

              <th>
                Skor
              </th>

              <th>
                Persentase
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            ${rows
              .map(
                ([name, r]) => {

                  const pct =
                    r?.total
                      ? scorePercent(
                          r.score,
                          r.total
                        )
                      : 0;

                  return `

                    <tr>

                      <td>
                        ${escapeHTML(
                          name
                        )}
                      </td>

                      <td>
                        ${
                          r?.completed
                            ? `${r.score}/${r.total}`
                            : "—"
                        }
                      </td>

                      <td>
                        ${
                          r?.completed
                            ? `${pct}%`
                            : "—"
                        }
                      </td>

                      <td>
                        ${
                          r?.completed
                            ? masteryLabel(pct)
                            : "Belum"
                        }
                      </td>

                    </tr>

                  `;

                }
              )
              .join("")}

          </tbody>

        </table>

      </div>


      <div class="rq-report-actions">

        <button
          class="rq-btn rq-btn-primary"
          data-action="download-report"
        >
          ⬇️ Unduh Rekap
        </button>

        <button
          class="rq-btn rq-btn-secondary"
          data-action="reset-progress"
        >
          ↻ Reset Data
        </button>

      </div>

    `;
  }

  // ============================================================
  // DOWNLOAD REPORT
  // ============================================================

  function downloadReport() {

    const rows = [

      [
        "Pretest",
        APP.progress.pretest
      ],

      ...missionOrder
        .slice(1)
        .map(id => [
          getMissionName(id),
          APP.progress.missions[id]
        ]),

      [
        "Boss Challenge",
        APP.progress.boss
      ]

    ];

    const csv = [

      [
        "MATH MISSION — RATIO QUEST"
      ],

      [
        "Nama",
        APP.progress.studentName
      ],

      [
        "Kelas",
        APP.progress.studentClass
      ],

      [],

      [
        "Misi",
        "Skor",
        "Maksimal",
        "Persentase",
        "Status"
      ],

      ...rows.map(
        ([name, r]) => {

          const pct =
            r?.total
              ? scorePercent(
                  r.score,
                  r.total
                )
              : 0;

          return [

            name,

            r?.score ?? "",

            r?.total ?? "",

            r?.completed
              ? `${pct}%`
              : "",

            r?.completed
              ? masteryLabel(pct)
              : "Belum"

          ];

        }
      ),

      [],

      [
        "Error Code",
        "Jumlah"
      ],

      ...Object.entries(

        APP.progress.mistakes.reduce(
          (acc, m) => {

            acc[
              m.errorCode || "-"
            ] =
              (
                acc[
                  m.errorCode || "-"
                ] || 0
              ) + m.count;

            return acc;

          },
          {}
        )

      )

    ]
      .map(
        row =>
          row
            .map(
              cell =>
                `"${String(cell ?? "")
                  .replace(/"/g, '""')}"`
            )
            .join(",")
      )
      .join("\n");

    const blob =
      new Blob(
        ["\ufeff" + csv],
        {
          type:
            "text/csv;charset=utf-8;"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      `RatioQuest_${
        (
          APP.progress.studentName ||
          "Siswa"
        ).replace(
          /[^a-z0-9]+/gi,
          "_"
        )
      }.csv`;

    a.click();

    URL.revokeObjectURL(url);
  }

  // ============================================================
  // TIMER
  // ============================================================

  function startTimer(seconds) {

    stopTimer();

    APP.timerSeconds =
      seconds;

    APP.timer =
      setInterval(() => {

        APP.timerSeconds--;

        const el =
          $("#rq-timer");

        if (el) {

          el.textContent =
            formatTime(
              APP.timerSeconds
            );

        }

        if (
          APP.timerSeconds <= 0
        ) {

          stopTimer();

          if (!APP.lastResult) {
            submitAnswer();
          }

        }

      }, 1000);
  }

  function stopTimer() {

    if (APP.timer) {

      clearInterval(
        APP.timer
      );

    }

    APP.timer = null;
  }

  function formatTime(seconds) {

    const m =
      Math.floor(
        seconds / 60
      )
        .toString()
        .padStart(2, "0");

    const s =
      Math.max(
        0,
        seconds % 60
      )
        .toString()
        .padStart(2, "0");

    return `${m}:${s}`;
  }

  // ============================================================
  // EVENT DELEGATION
  // ============================================================

  document.addEventListener(
    "click",
    event => {

      const missionButton =
        event.target.closest(
          "[data-mission]"
        );

      if (
        missionButton &&
        !missionButton.disabled
      ) {

        launchMission(
          missionButton.dataset.mission
        );

        return;
      }

      const option =
        event.target.closest(
          ".rq-option"
        );

      if (
        option &&
        !option.disabled &&
        !APP.lastResult
      ) {

        $$(".rq-option")
          .forEach(btn =>
            btn.classList.remove(
              "selected"
            )
          );

        option.classList.add(
          "selected"
        );

        APP.selectedAnswer =
          option.dataset.answer;

        updateSubmitState();

        return;
      }

      const action =
        event.target.closest(
          "[data-action]"
        );

      if (!action) return;

      switch (
        action.dataset.action
      ) {

        case "home":

          showScreen("start");

          break;

        case "map":

          showScreen("map");

          break;

        case "start":

          startGame();

          break;

        case "submit":

          submitAnswer();

          break;

        case "next-question":

          nextQuestion();

          break;

        case "hint":

          showHint();

          break;

        case "mistake":

          showScreen("mistake");

          break;

        case "boss":

          launchMission("BOSS");

          break;

        case "scores":

          showScreen("scores");

          break;

        case "download-report":

          downloadReport();

          break;

        case "reset-progress":

          if (
            confirm(
              "Hapus semua progres siswa ini?"
            )
          ) {

            resetProgress();

            showScreen("start");

            syncStartForm();

          }

          break;

      }

      const repairId =
        action.dataset.repairId;

      if (repairId) {

        retryQuestion(
          repairId
        );

      }

    }
  );

  document.addEventListener(
    "input",
    event => {

      if (
        event.target.matches(
          "#rq-short-answer"
        )
      ) {

        updateSubmitState();

      }

    }
  );

  document.addEventListener(
    "change",
    event => {

      if (
        event.target.matches(
          "[data-match-index]"
        )
      ) {

        updateSubmitState();

      }

    }
  );

  // ============================================================
  // SYNC FORM
  // ============================================================

  function syncStartForm() {

    const name =
      $("#rq-name") ||
      $("#studentName");

    const cls =
      $("#rq-class") ||
      $("#studentClass");

    if (name) {

      name.value =
        APP.progress.studentName ||
        "";

    }

    if (cls) {

      cls.value =
        APP.progress.studentClass ||
        "VI A";

    }
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {

    if (!Q.length) {

      console.error(
        "questions.js belum termuat. " +
        "Pastikan questions.js dipanggil " +
        "sebelum script.js."
      );

    }

    loadProgress();

    ensureAppShell();

    syncStartForm();

    showScreen("start");

    console.log(
      "MATH MISSION — RATIO QUEST siap."
    );

    console.log(
      `Bank soal: ${Q.length} soal.`
    );

    console.table(
      Object.fromEntries(
        Object.entries(BANKS)
          .map(
            ([key, value]) =>
              [key, value.length]
          )
      )
    );
  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

  // ============================================================
  // PUBLIC API
  // ============================================================

  window.RATIO_QUEST_APP =
    APP;

  window.RATIO_QUEST_START =
    startGame;

  window.RATIO_QUEST_SHOW_SCREEN =
    showScreen;

  window.RATIO_QUEST_LAUNCH_MISSION =
    launchMission;

  window.RATIO_QUEST_RESET =
    resetProgress;

})();
