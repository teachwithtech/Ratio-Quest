/* =========================================================
   MATH MISSION - RATIO QUEST
   Sistem Progress Per Siswa
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     1. DATA SOAL
     ========================================================= */

  const Q = window.RATIO_QUESTIONS || [];
  const BANKS = window.RATIO_QUESTION_BANKS || {};
  const MISSIONS = window.RATIO_MISSION_INFO || {};

  /* =========================================================
     2. LOCAL STORAGE
     ========================================================= */

  const STORAGE_PREFIX = "ratioQuestProgress_";

  function getStudentStorageKey(studentName) {
    const cleanName = String(studentName || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

    return STORAGE_PREFIX + (cleanName || "siswa");
  }

  /* =========================================================
     3. DATA PROGRESS KOSONG
     ========================================================= */

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

  /* =========================================================
     4. APP STATE
     ========================================================= */

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

    progress: createEmptyProgress(),

    answeredIds: new Set(),

    mistakeIds: [],

    bossMode: false
  };

  /* =========================================================
     5. HELPER DOM
     ========================================================= */

  const $ = (selector) => document.querySelector(selector);

  const $$ = (selector) => [...document.querySelectorAll(selector)];

  /* =========================================================
     6. SAVE PROGRESS SISWA
     ========================================================= */

  function saveProgress() {
    const studentName = APP.progress.studentName;

    if (!studentName) {
      return;
    }

    const key = getStudentStorageKey(studentName);

    APP.progress.lastPlayed = new Date().toISOString();

    localStorage.setItem(
      key,
      JSON.stringify(APP.progress)
    );

    console.log("💾 Progress disimpan:", key);
  }

  /* =========================================================
     7. LOAD PROGRESS SISWA
     ========================================================= */

  function loadProgress(studentName) {
    if (!studentName) {
      APP.progress = createEmptyProgress();
      return;
    }

    const key = getStudentStorageKey(studentName);

    const saved = localStorage.getItem(key);

    if (saved) {
      try {
        const data = JSON.parse(saved);

        APP.progress = {
          ...createEmptyProgress(),
          ...data,

          pretest: {
            ...createEmptyProgress().pretest,
            ...(data.pretest || {})
          },

          boss: {
            ...createEmptyProgress().boss,
            ...(data.boss || {})
          },

          missions: data.missions || {},

          mistakes: data.mistakes || []
        };

        console.log(
          "📂 Progress ditemukan untuk:",
          studentName
        );

      } catch (error) {
        console.error(
          "❌ Progress siswa rusak:",
          error
        );

        APP.progress = createEmptyProgress();
      }

    } else {

      /*
       * SISWA BARU
       * Tidak mengambil progress siswa lain.
       */

      APP.progress = createEmptyProgress();

      APP.progress.studentName = studentName;

      console.log(
        "🆕 Siswa baru. Progress dimulai dari awal:",
        studentName
      );
    }

    APP.progress.studentName = studentName;
  }

  /* =========================================================
     8. RESET PROGRESS SISWA AKTIF
     ========================================================= */

  function resetProgress() {
    const studentName = APP.progress.studentName;

    if (!studentName) {
      alert("Belum ada siswa yang aktif.");
      return;
    }

    const yakin = confirm(
      `Reset seluruh progress siswa "${studentName}"?\n\n` +
      `Semua nilai dan progress siswa ini akan kembali ke awal.`
    );

    if (!yakin) {
      return;
    }

    const key = getStudentStorageKey(studentName);

    localStorage.removeItem(key);

    APP.progress = createEmptyProgress();

    APP.progress.studentName = studentName;

    APP.answeredIds.clear();

    APP.mistakeIds = [];

    APP.session = null;

    APP.currentMission = null;

    APP.currentQuestion = null;

    APP.currentQuestions = [];

    APP.currentQuestionIndex = 0;

    saveProgress();

    alert(
      `Progress ${studentName} sudah direset.`
    );

    showScreen("map");
  }

  /* =========================================================
     9. FORM SISWA
     ========================================================= */

  function syncStartForm() {
    const nameInput = $(
      "#rq-student-name"
    );

    const classInput = $(
      "#rq-student-class"
    );

    if (nameInput) {
      nameInput.value =
        APP.progress.studentName || "";
    }

    if (classInput) {
      classInput.value =
        APP.progress.studentClass || "VI A";
    }
  }

  /* =========================================================
     10. MULAI GAME
     ========================================================= */

  function startGame() {

    const nameInput = $(
      "#rq-student-name"
    );

    const classInput = $(
      "#rq-student-class"
    );

    const studentName =
      nameInput?.value.trim() || "";

    const studentClass =
      classInput?.value.trim() || "VI A";

    if (!studentName) {
      alert(
        "Silakan masukkan nama terlebih dahulu."
      );

      nameInput?.focus();

      return;
    }

    /*
     * PENTING:
     * Setiap kali nama berbeda,
     * kita LOAD progress berdasarkan nama tersebut.
     */

    if (
      APP.progress.studentName !==
      studentName
    ) {

      loadProgress(studentName);

      APP.answeredIds.clear();

      APP.mistakeIds = [];

      APP.session = null;

      APP.currentMission = null;

      APP.currentQuestion = null;

      APP.currentQuestions = [];

      APP.currentQuestionIndex = 0;

    } else {

      /*
       * Nama sama → lanjutkan progress.
       */

      loadProgress(studentName);
    }

    APP.progress.studentName =
      studentName;

    APP.progress.studentClass =
      studentClass;

    if (!APP.progress.startedAt) {
      APP.progress.startedAt =
        new Date().toISOString();
    }

    saveProgress();

    syncStartForm();

    showScreen("map");

    console.log(
      "🎮 Game dimulai untuk:",
      studentName
    );

    console.log(
      "📊 Progress:",
      APP.progress
    );
  }

  /* =========================================================
     11. SCREEN
     ========================================================= */

  function hideAllScreens() {

    $$(
      "#app > section, #app > div[id$='screen']"
    ).forEach((el) => {
      el.style.display = "none";
    });

    $$(
      ".rq-screen"
    ).forEach((el) => {
      el.style.display = "none";
    });
  }

  function showScreen(screen) {

    APP.currentScreen = screen;

    hideAllScreens();

    let target = null;

    switch (screen) {

      case "start":
        target = $("#rq-start");
        break;

      case "map":
        target = $("#rq-map");
        break;

      case "question":
        target = $("#rq-question");
        break;

      case "feedback":
        target = $("#rq-feedback");
        break;

      case "mistake":
        target = $("#rq-mistake-lab");
        break;

      case "boss":
        target = $("#rq-boss");
        break;

      case "scores":
        target = $("#rq-scores");
        break;

      case "result":
        target = $("#rq-result");
        break;

      default:
        console.warn(
          "Screen tidak ditemukan:",
          screen
        );
    }

    if (target) {
      target.style.display = "";
    }

    if (screen === "map") {
      renderMissionMap();
    }

    if (screen === "mistake") {
      renderMistakeLab();
    }

    if (screen === "scores") {
      renderStudentScores();
    }

    if (screen === "start") {
      syncStartForm();
    }
  }

  /* =========================================================
     12. MISSION ORDER
     ========================================================= */

  const missionOrder = [
  "PRETEST",
  "RD",
  "RB",
  "RL",
  "RM",
  "BOSS"
];
 
  /* =========================================================
     13. STATUS MISSION
     ========================================================= */

  function missionStatus(id) {

    if (id === "PRETEST") {

      return APP.progress.pretest.completed
        ? "done"
        : "available";
    }

    if (id === "BOSS") {

     const allMissionsDone =
  ["RD", "RB", "RL", "RM"]
          .every(
            (mission) =>
              APP.progress.missions[
                mission
              ]?.completed
          );

      if (
        APP.progress.boss.completed
      ) {
        return "done";
      }

      return allMissionsDone
        ? "available"
        : "locked";
    }

    const record =
      APP.progress.missions[id];

    if (record?.completed) {
      return "done";
    }

    const index =
      missionOrder.indexOf(id);

    /*
     * Ratio Detective baru terbuka
     * setelah PRETEST.
     */

    if (index === 1) {

      return APP.progress.pretest.completed
        ? "available"
        : "locked";
    }

    const previous =
      missionOrder[index - 1];

    if (previous === "PRETEST") {

      return APP.progress.pretest.completed
        ? "available"
        : "locked";
    }

    return APP.progress.missions[
      previous
    ]?.completed
      ? "available"
      : "locked";
  }

  /* =========================================================
     14. RENDER MISSION MAP
     ========================================================= */

  function renderMissionMap() {

    const container =
      $("#rq-mission-list");

    if (!container) {
      return;
    }

    const missionIds = [
  "PRETEST",
  "RD",
  "RB",
  "RL",
  "RM"
];
    container.innerHTML = "";

    missionIds.forEach((id) => {

      const info =
        MISSIONS[id] || {};

      const status =
        missionStatus(id);

      const record =
        id === "PRETEST"
          ? APP.progress.pretest
          : APP.progress.missions[id];

      const percent =
        record?.completed
          ? calculatePercent(record)
          : 0;

      const card =
        document.createElement("div");

      card.className =
        `rq-mission-card ${status}`;

      card.innerHTML = `
        <div class="rq-mission-icon">
          ${info.icon || "🎯"}
        </div>

        <div class="rq-mission-content">

          <h3>
            ${info.title || id}
          </h3>

          <p>
            ${
              info.description ||
              "Misi Ratio Quest"
            }
          </p>

          ${
            status === "done"
              ? `
                <div class="rq-progress-text">
                  Selesai • ${percent}%
                </div>
              `
              : ""
          }

          ${
            status === "locked"
              ? `
                <div class="rq-progress-text">
                  🔒 Terkunci
                </div>
              `
              : ""
          }

        </div>

        <div class="rq-mission-action">

          ${
            status === "available"
              ? `
                <button
                  data-action="mission"
                  data-mission="${id}">
                  Mulai
                </button>
              `
              : ""
          }

          ${
            status === "done"
              ? `
                <button
                  data-action="mission"
                  data-mission="${id}">
                  Ulangi
                </button>
              `
              : ""
          }

        </div>
      `;

      container.appendChild(card);
    });

    /*
     * BOSS
     */

    const bossContainer =
      $("#rq-boss-card");

    if (bossContainer) {

      const status =
        missionStatus("BOSS");

      bossContainer.innerHTML = `
        <div class="rq-mission-icon">
          👑
        </div>

        <div class="rq-mission-content">

          <h3>
            Boss Challenge
          </h3>

          <p>
            Tantangan akhir untuk
            menguji penguasaan
            perbandingan.
          </p>

          ${
            status === "done"
              ? `
                <div>
                  Selesai •
                  ${calculatePercent(
                    APP.progress.boss
                  )}%
                </div>
              `
              : ""
          }

          ${
            status === "locked"
              ? `
                <div>
                  🔒 Selesaikan semua misi
                </div>
              `
              : ""
          }

        </div>

        <div>

          ${
            status !== "locked"
              ? `
                <button
                  data-action="boss">
                  ${
                    status === "done"
                      ? "Ulangi"
                      : "Mulai"
                  }
                </button>
              `
              : ""
          }

        </div>
      `;
    }

    /*
     * Nama siswa
     */

    const nameDisplay =
      $("#rq-current-student");

    if (nameDisplay) {

      nameDisplay.textContent =
        `${APP.progress.avatar} ${APP.progress.studentName}`;
    }
  }

  /* =========================================================
     15. PERCENT
     ========================================================= */

  function calculatePercent(record) {

    if (!record) {
      return 0;
    }

    if (
      !record.total ||
      record.total <= 0
    ) {
      return 0;
    }

    return Math.round(
      (record.score /
        (record.total * 10)) *
        100
    );
  }

  /* =========================================================
     16. MULAI BANK SOAL
     ========================================================= */

  function runQuestionBank(
    missionId,
    boss = false
  ) {

    let questions = [];

    if (boss) {

      questions =
        BANKS.BOSS ||
        Q.filter(
          (q) => q.mission === "BOSS"
        );

    } else {

      questions =
        BANKS[missionId] ||
        Q.filter(
          (q) =>
            q.mission === missionId
        );
    }

    if (!questions.length) {

      alert(
        `Soal untuk ${missionId} belum ditemukan.`
      );

      return;
    }

    APP.currentMission =
      missionId;

    APP.currentQuestions =
      [...questions];

    APP.currentQuestionIndex = 0;

    APP.currentQuestion =
      APP.currentQuestions[0];

    APP.selectedAnswer = null;

    APP.lastResult = null;

    APP.isRetry = false;

    APP.bossMode = boss;

    APP.session = {

      score: 0,

      correct: 0,

      wrong: 0,

      attempts: 0,

      mistakes: [],

      answered: []
    };

    showQuestion();
  }

  /* =========================================================
     17. TAMPILKAN SOAL
     ========================================================= */

  function showQuestion() {

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

    const questionNumber =
      $("#rq-question-number");

    const questionText =
      $("#rq-question-text");

    const stimulus =
      $("#rq-stimulus");

    const answerArea =
      $("#rq-answer-area");

    if (questionNumber) {

      questionNumber.textContent =
        `${APP.currentQuestionIndex + 1} / ${APP.currentQuestions.length}`;
    }

    if (questionText) {

      questionText.textContent =
        q.question || "";
    }

    if (stimulus) {

      stimulus.textContent =
        q.stimulus || "";

      stimulus.style.display =
        q.stimulus ? "" : "none";
    }

    if (answerArea) {

      answerArea.innerHTML =
        renderAnswerInput(q);
    }

    const feedback =
      $("#rq-feedback-box");

    if (feedback) {

      feedback.innerHTML = "";

      feedback.style.display =
        "none";
    }

    showScreen("question");
  }

  /* =========================================================
     18. RENDER JAWABAN
     ========================================================= */

  function renderAnswerInput(q) {

    if (
      q.type === "multiple_choice"
    ) {

      return `
        <div class="rq-options">

          ${
            (q.options || [])
              .map(
                (option, index) => {

                  const value =
                    typeof option === "object"
                      ? option.id
                      : option;

                  const text =
                    typeof option === "object"
                      ? option.text
                      : option;

                  return `
                    <button
                      class="rq-option"
                      data-action="option"
                      data-value="${escapeHTML(
                        value
                      )}">

                      <span>
                        ${String.fromCharCode(
                          65 + index
                        )}.
                      </span>

                      ${escapeHTML(text)}

                    </button>
                  `;
                }
              )
              .join("")
          }

        </div>
      `;
    }

    if (
      q.type === "true_false"
    ) {

      return `
        <div class="rq-options">

          <button
            class="rq-option"
            data-action="option"
            data-value="true">
            ✅ Benar
          </button>

          <button
            class="rq-option"
            data-action="option"
            data-value="false">
            ❌ Salah
          </button>

        </div>
      `;
    }

    if (
      q.type === "short_answer"
    ) {

      return `
        <input
          id="rq-short-answer"
          class="rq-short-answer"
          type="text"
          placeholder="Ketik jawabanmu..."
          autocomplete="off">
      `;
    }

    if (
      q.type === "matching"
    ) {

      return `
        <div class="rq-matching">

          ${
            (q.options || [])
              .map(
                (option, index) => {

                  const left =
                    option.left ||
                    option[0] ||
                    "";

                  const right =
                    option.right ||
                    option[1] ||
                    "";

                  return `
                    <div
                      class="rq-match-row">

                      <span>
                        ${escapeHTML(left)}
                      </span>

                      <span>→</span>

                      <input
                        type="text"
                        data-match="${index}"
                        placeholder="Jawaban">

                    </div>
                  `;
                }
              )
              .join("")
          }

        </div>
      `;
    }

    return `
      <input
        id="rq-short-answer"
        class="rq-short-answer"
        type="text"
        placeholder="Ketik jawabanmu..."
        autocomplete="off">
    `;
  }

  /* =========================================================
     19. ESCAPE HTML
     ========================================================= */

  function escapeHTML(value) {

    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /* =========================================================
     20. PILIHAN JAWABAN
     ========================================================= */

  function selectOption(value) {

    APP.selectedAnswer = value;

    $$(".rq-option").forEach(
      (button) => {

        button.classList.toggle(
          "selected",
          button.dataset.value ===
            String(value)
        );
      }
    );
  }

  /* =========================================================
     21. AMBIL JAWABAN
     ========================================================= */

  function collectAnswer() {

    const q =
      APP.currentQuestion;

    if (
      q.type === "multiple_choice" ||
      q.type === "true_false"
    ) {

      return APP.selectedAnswer;
    }

    if (
      q.type === "short_answer"
    ) {

      return $(
        "#rq-short-answer"
      )?.value.trim() || "";
    }

    if (
      q.type === "matching"
    ) {

      const inputs =
        $$("[data-match]");

      return inputs.map(
        (input) =>
          input.value.trim()
      );
    }

    return APP.selectedAnswer;
  }

  /* =========================================================
     22. NORMALISASI JAWABAN
     ========================================================= */

  function normalize(value) {

    if (Array.isArray(value)) {

      return value.map(
        (item) =>
          String(item)
            .trim()
            .toLowerCase()
      );
    }

    return String(value ?? "")
      .trim()
      .toLowerCase();
  }

  /* =========================================================
     23. CEK JAWABAN
     ========================================================= */

  function evaluateAnswer(
    userAnswer,
    correctAnswer
  ) {

    const user =
      normalize(userAnswer);

    const correct =
      normalize(correctAnswer);

    if (
      Array.isArray(user) &&
      Array.isArray(correct)
    ) {

      if (
        user.length !==
        correct.length
      ) {
        return false;
      }

      return user.every(
        (value, index) =>
          value === correct[index]
      );
    }

    /*
     * Untuk jawaban angka,
     * 24 dan "24" dianggap sama.
     */

    if (
      !Array.isArray(user) &&
      !Array.isArray(correct)
    ) {

      const userNumber =
        Number(user);

      const correctNumber =
        Number(correct);

      if (
        user !== "" &&
        correct !== "" &&
        !Number.isNaN(userNumber) &&
        !Number.isNaN(correctNumber)
      ) {

        return (
          userNumber ===
          correctNumber
        );
      }
    }

    return user === correct;
  }

  /* =========================================================
     24. SUBMIT JAWABAN
     ========================================================= */

  function submitAnswer() {

    const q =
      APP.currentQuestion;

    if (!q) {
      return;
    }

    const userAnswer =
      collectAnswer();

    if (
      userAnswer === null ||
      userAnswer === "" ||
      (
        Array.isArray(userAnswer) &&
        userAnswer.every(
          (item) => item === ""
        )
      )
    ) {

      alert(
        "Pilih atau isi jawaban terlebih dahulu."
      );

      return;
    }

    const isCorrect =
      evaluateAnswer(
        userAnswer,
        q.answer
      );

    APP.session.attempts++;

    APP.progress.attempts++;

    APP.lastResult = {
      question: q,
      userAnswer,
      correctAnswer: q.answer,
      isCorrect
    };

    if (isCorrect) {

      APP.session.correct++;

      APP.session.score +=
        q.score || 10;

    } else {

      APP.session.wrong++;

      /*
       * Simpan kesalahan
       */

      const mistake = {

        id: q.id,

        mission:
          q.mission,

        question:
          q.question,

        stimulus:
          q.stimulus,

        userAnswer,

        correctAnswer:
          q.answer,

        explanation:
          q.explanation,

        errorCode:
          q.errorCode,

        feedback:
          q.feedback,

        time:
          new Date().toISOString()
      };

      APP.session.mistakes.push(
        mistake
      );

      APP.progress.mistakes.push(
        mistake
      );
    }

    APP.session.answered.push(
      q.id
    );

    showFeedback(
      isCorrect
    );

    saveProgress();
  }

  /* =========================================================
     25. FEEDBACK
     ========================================================= */

  function showFeedback(
    isCorrect
  ) {

    const q =
      APP.currentQuestion;

    const box =
      $("#rq-feedback-box");

    const title =
      $("#rq-feedback-title");

    const message =
      $("#rq-feedback-message");

    const explanation =
      $("#rq-feedback-explanation");

    if (!box) {
      return;
    }

    box.style.display = "";

    if (title) {

      title.textContent =
        isCorrect
          ? "🎉 Jawaban Benar!"
          : "💡 Belum Tepat";
    }

    if (message) {

      message.textContent =
        isCorrect
          ? "Hebat! Kamu menemukan jawaban yang tepat."
          : (
              q.feedback ||
              "Coba perhatikan kembali informasi pada soal."
            );
    }

    if (explanation) {

      explanation.textContent =
        q.explanation || "";
    }

    showScreen("feedback");
  }

  /* =========================================================
     26. SOAL BERIKUTNYA
     ========================================================= */

  function nextQuestion() {

    APP.currentQuestionIndex++;

    if (
      APP.currentQuestionIndex >=
      APP.currentQuestions.length
    ) {

      finishMission();

      return;
    }

    showQuestion();
  }

  /* =========================================================
     27. SELESAI MISSION
     ========================================================= */

  function finishMission() {

    stopTimer();

    const session =
      APP.session;

    if (!session) {
      showScreen("map");
      return;
    }

    const total =
      APP.currentQuestions.length;

    const score =
      session.score;

    const record = {

      score,

      total,

      correct:
        session.correct,

      wrong:
        session.wrong,

      attempts:
        session.attempts,

      completed: true,

      completedAt:
        new Date().toISOString()
    };

    if (
      APP.currentMission ===
      "PRETEST"
    ) {

      APP.progress.pretest =
        record;

    } else if (
      APP.bossMode ||
      APP.currentMission === "BOSS"
    ) {

      APP.progress.boss =
        record;

    } else {

      APP.progress.missions[
        APP.currentMission
      ] = record;
    }

    saveProgress();

    APP.lastResult = record;

    renderResult();

    showScreen("result");
  }

  /* =========================================================
     28. HASIL
     ========================================================= */

  function renderResult() {

    const result =
      $("#rq-result");

    if (!result) {
      return;
    }

    const record =
      APP.lastResult;

    const percent =
      calculatePercent(record);

    const missionName =
      APP.bossMode
        ? "Boss Challenge"
        : (
            MISSIONS[
              APP.currentMission
            ]?.title ||
            APP.currentMission
          );

    result.innerHTML = `
      <div class="rq-result-card">

        <div class="rq-result-icon">
          ${
            percent >= 80
              ? "🏆"
              : percent >= 60
              ? "⭐"
              : "💪"
          }
        </div>

        <h2>
          ${escapeHTML(
            missionName
          )}
        </h2>

        <p>
          ${escapeHTML(
            APP.progress.studentName
          )}
        </p>

        <div class="rq-result-score">
          ${percent}%
        </div>

        <p>
          Benar:
          ${record.correct || 0}
          dari
          ${record.total || 0}
          soal
        </p>

        <div class="rq-result-actions">

          <button
            data-action="map">
            🗺️ Kembali ke Mission Map
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     29. MISTAKE LAB
     ========================================================= */

  function renderMistakeLab() {

    const container =
      $("#rq-mistake-list");

    if (!container) {
      return;
    }

    const mistakes =
      APP.progress.mistakes || [];

    if (!mistakes.length) {

      container.innerHTML = `
        <div class="rq-empty-state">

          <div style="font-size:48px;">
            🎉
          </div>

          <h3>
            Belum ada kesalahan
          </h3>

          <p>
            Terus pertahankan ketelitianmu!
          </p>

        </div>
      `;

      return;
    }

    container.innerHTML =
      mistakes
        .map(
          (mistake, index) => `
            <div
              class="rq-mistake-card">

              <div>

                <strong>
                  Kesalahan ${index + 1}
                </strong>

                ${
                  mistake.errorCode
                    ? `
                      <span>
                        ${escapeHTML(
                          mistake.errorCode
                        )}
                      </span>
                    `
                    : ""
                }

              </div>

              <h3>
                ${escapeHTML(
                  mistake.question
                )}
              </h3>

              ${
                mistake.stimulus
                  ? `
                    <p>
                      ${escapeHTML(
                        mistake.stimulus
                      )}
                    </p>
                  `
                  : ""
              }

              <p>
                <strong>
                  Jawabanmu:
                </strong>

                ${escapeHTML(
                  formatAnswer(
                    mistake.userAnswer
                  )
                )}
              </p>

              <p>
                <strong>
                  Jawaban benar:
                </strong>

                ${escapeHTML(
                  formatAnswer(
                    mistake.correctAnswer
                  )
                )}
              </p>

              ${
                mistake.explanation
                  ? `
                    <div>
                      💡
                      ${escapeHTML(
                        mistake.explanation
                      )}
                    </div>
                  `
                  : ""
              }

            </div>
          `
        )
        .join("");
  }

  /* =========================================================
     30. FORMAT ANSWER
     ========================================================= */

  function formatAnswer(answer) {

    if (Array.isArray(answer)) {

      return answer.join(" | ");
    }

    return String(answer ?? "");
  }

  /* =========================================================
     31. HINT
     ========================================================= */

  function showHint() {

    if (APP.bossMode) {

      alert(
        "Boss Challenge tidak menyediakan petunjuk."
      );

      return;
    }

    const q =
      APP.currentQuestion;

    if (!q) {
      return;
    }

    let hint =
      q.hint;

    if (!hint) {

      const hints = {

        E1:
          "Perhatikan dua besaran yang sedang dibandingkan.",

        E2:
          "Perhatikan urutan kedua besaran dalam perbandingan.",

        E3:
          "Coba sederhanakan kedua bilangan dengan pembagi yang sama.",

        E4:
          "Gunakan faktor pengali yang sama pada kedua bagian rasio.",

        E5:
          "Baca kembali informasi dalam cerita sebelum menghitung."
      };

      hint =
        hints[q.errorCode] ||
        "Baca kembali informasi penting pada soal.";
    }

    alert(
      `💡 PETUNJUK\n\n${hint}`
    );
  }

  /* =========================================================
     32. RETRY SOAL
     ========================================================= */

  function retryQuestion(index) {

    const mistakes =
      APP.progress.mistakes || [];

    const mistake =
      mistakes[index];

    if (!mistake) {
      return;
    }

    const q =
      Q.find(
        (item) =>
          item.id === mistake.id
      );

    if (!q) {
      alert(
        "Soal tidak ditemukan."
      );

      return;
    }

    APP.currentMission =
      q.mission;

    APP.currentQuestions =
      [q];

    APP.currentQuestionIndex =
      0;

    APP.currentQuestion =
      q;

    APP.selectedAnswer = null;

    APP.isRetry = true;

    APP.bossMode = false;

    APP.session = {

      score: 0,

      correct: 0,

      wrong: 0,

      attempts: 0,

      mistakes: [],

      answered: []
    };

    showQuestion();
  }

  /* =========================================================
     33. NILAI SISWA
     ========================================================= */

  function renderStudentScores() {

    const container =
      $("#rq-score-content");

    if (!container) {
      return;
    }

    const p =
      APP.progress;

    const missionIds = [
  "PRETEST",
  "RD",
  "RB",
  "RL",
  "RM",
  "BOSS"
];

    let html = `
      <div class="rq-student-summary">

        <h2>
          📊 Nilai Siswa
        </h2>

        <h3>
          ${escapeHTML(
            p.studentName
          )}
        </h3>

        <p>
          Kelas:
          ${escapeHTML(
            p.studentClass
          )}
        </p>

      </div>

      <table class="rq-score-table">

        <thead>

          <tr>
            <th>Misi</th>
            <th>Benar</th>
            <th>Total</th>
            <th>Nilai</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>
    `;

    missionIds.forEach(
      (id) => {

        let record;

        if (id === "PRETEST") {

          record = p.pretest;

        } else if (
          id === "BOSS"
        ) {

          record = p.boss;

        } else {

          record =
            p.missions[id];
        }

        const percent =
          calculatePercent(record);

        const status =
          record?.completed
            ? getMasteryStatus(
                percent
              )
            : "Belum dikerjakan";

        html += `
          <tr>

            <td>
              ${
                id === "PRETEST"
                  ? "Pretest"
                  : id === "BOSS"
                  ? "Boss Challenge"
                  : (
                      MISSIONS[id]?.title ||
                      id
                    )
              }
            </td>

            <td>
              ${
                record?.correct ??
                "-"
              }
            </td>

            <td>
              ${
                record?.total ??
                "-"
              }
            </td>

            <td>
              ${
                record?.completed
                  ? percent + "%"
                  : "-"
              }
            </td>

            <td>
              ${status}
            </td>

          </tr>
        `;
      }
    );

    html += `
        </tbody>

      </table>
    `;

    container.innerHTML = html;
  }

  /* =========================================================
     34. STATUS PENGUASAAN
     ========================================================= */

  function getMasteryStatus(
    percent
  ) {

    if (percent >= 80) {
      return "Tuntas";
    }

    if (percent >= 60) {
      return "Perlu Penguatan";
    }

    return "Perlu Bimbingan";
  }

  /* =========================================================
     35. DOWNLOAD REPORT
     ========================================================= */

  function downloadReport() {

    const p =
      APP.progress;

    let rows = [];

    rows.push([
      "Nama Siswa",
      "Kelas",
      "Misi",
      "Benar",
      "Total",
      "Nilai",
      "Status"
    ]);

    const missionIds = [
      "PRETEST",
      "RD",
      "RB",
      "RBR",
      "RRL",
      "RM",
      "BOSS"
    ];

    missionIds.forEach(
      (id) => {

        let record;

        if (id === "PRETEST") {

          record = p.pretest;

        } else if (
          id === "BOSS"
        ) {

          record = p.boss;

        } else {

          record =
            p.missions[id];
        }

        const percent =
          calculatePercent(record);

        rows.push([
          p.studentName,
          p.studentClass,
          id,
          record?.correct ?? 0,
          record?.total ?? 0,
          record?.completed
            ? percent
            : 0,
          record?.completed
            ? getMasteryStatus(
                percent
              )
            : "Belum dikerjakan"
        ]);
      }
    );

    const csv =
      rows
        .map(
          (row) =>
            row
              .map(
                (cell) =>
                  `"${String(cell)
                    .replaceAll(
                      '"',
                      '""'
                    )}"`
              )
              .join(",")
        )
        .join("\n");

    const blob =
      new Blob(
        [csv],
        {
          type:
            "text/csv;charset=utf-8;"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `Nilai_${p.studentName.replace(
        /\s+/g,
        "_"
      )}.csv`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
  }

  /* =========================================================
     36. TIMER
     ========================================================= */

  function startTimer(seconds) {

    stopTimer();

    APP.timerSeconds =
      seconds;

    APP.timer =
      setInterval(() => {

        APP.timerSeconds--;

        if (
          APP.timerSeconds <= 0
        ) {

          stopTimer();

          submitAnswer();
        }

      }, 1000);
  }

  function stopTimer() {

    if (APP.timer) {

      clearInterval(
        APP.timer
      );

      APP.timer = null;
    }
  }

  /* =========================================================
     37. ENSURE APP SHELL
     ========================================================= */

  function ensureAppShell() {

    const app =
      $("#app");

    if (!app) {
      console.error(
        "❌ Elemen #app tidak ditemukan."
      );

      return;
    }

    /*
     * Jangan membuat ulang HTML
     * jika sudah dibuat oleh index.html.
     */

    console.log(
      "✅ App shell ditemukan."
    );
  }

  /* =========================================================
     38. EVENT DELEGATION
     ========================================================= */

  document.addEventListener(
    "click",
    (event) => {

      const target =
        event.target.closest(
          "[data-action]"
        );

      if (!target) {
        return;
      }

      const action =
        target.dataset.action;

      switch (action) {

        /* =========================
           START
           ========================= */

        case "start":

          startGame();

          break;

        /* =========================
           MISSION
           ========================= */

        case "mission":

          runQuestionBank(
            target.dataset.mission,
            false
          );

          break;

        /* =========================
           BOSS
           ========================= */

        case "boss":

          runQuestionBank(
            "BOSS",
            true
          );

          break;

        /* =========================
           OPTION
           ========================= */

        case "option":

          selectOption(
            target.dataset.value
          );

          break;

        /* =========================
           SUBMIT
           ========================= */

        case "submit":

          submitAnswer();

          break;

        /* =========================
           NEXT
           ========================= */

        case "next":

          nextQuestion();

          break;

        /* =========================
           HINT
           ========================= */

        case "hint":

          showHint();

          break;

        /* =========================
           MAP
           ========================= */

        case "map":

          showScreen("map");

          break;

        /* =========================
           HOME
           ========================= */

        case "home":

          showScreen("start");

          break;

        /* =========================
           MISTAKE LAB
           ========================= */

        case "mistake":

          showScreen("mistake");

          break;

        /* =========================
           SCORES
           ========================= */

        case "scores":

          showScreen("scores");

          break;

        /* =========================
           DOWNLOAD
           ========================= */

        case "download":

          downloadReport();

          break;

        /* =========================
           RESET
           ========================= */

        case "reset":

          resetProgress();

          break;

        /* =========================
           RETRY
           ========================= */

        case "retry":

          retryQuestion(
            Number(
              target.dataset.index
            )
          );

          break;

        default:

          console.warn(
            "Action tidak dikenal:",
            action
          );
      }
    }
  );

  /* =========================================================
     39. INPUT ENTER
     ========================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Enter"
      ) {
        return;
      }

      const active =
        document.activeElement;

      if (
        active?.id ===
        "rq-student-name"
      ) {

        startGame();
      }

      if (
        active?.id ===
        "rq-short-answer"
      ) {

        submitAnswer();
      }
    }
  );

  /* =========================================================
     40. INIT
     ========================================================= */

  function init() {

    console.log(
      "🚀 RATIO QUEST DIMULAI"
    );

    console.log(
      "Jumlah soal:",
      Q.length
    );

    console.log(
      "Bank soal:",
      BANKS
    );

    /*
     * SANGAT PENTING:
     *
     * Saat halaman pertama kali dibuka,
     * JANGAN mengambil progress siswa lama.
     *
     * Siswa baru harus memilih namanya
     * terlebih dahulu.
     */

    APP.progress =
      createEmptyProgress();

    APP.answeredIds.clear();

    APP.mistakeIds = [];

    APP.session = null;

    APP.currentMission = null;

    APP.currentQuestion = null;

    APP.currentQuestions = [];

    APP.currentQuestionIndex = 0;

    ensureAppShell();

    syncStartForm();

    /*
     * TIDAK ADA lagi:
     *
     * loadProgress();
     *
     * karena itu yang menyebabkan
     * progress siswa sebelumnya
     * muncul saat halaman dibuka.
     */

    showScreen("start");

    console.log(
      "👤 Silakan masukkan nama siswa."
    );
  }

  /* =========================================================
     41. JALANKAN
     ========================================================= */

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

})();
