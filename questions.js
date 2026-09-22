/* =========================================================
   MATH MISSION — RATIO QUEST
   BANK SOAL TERBARU — 40 SOAL
   Grade VI SD / Fase C
   ========================================================= */

window.RATIO_MISSION_INFO = {

  PRETEST: {
    icon: "🧭",
    title: "Pretest",
    description: "Uji kemampuan awalmu tentang perbandingan."
  },

  RD: {
    icon: "🔎",
    title: "Ratio Detective",
    description: "Temukan dan tentukan perbandingan dengan tepat."
  },

  RB: {
    icon: "🧱",
    title: "Ratio Builder",
    description: "Bangun perbandingan senilai dan temukan nilai yang belum diketahui."
  },

  RL: {
    icon: "🌍",
    title: "Ratio in Real Life",
    description: "Gunakan perbandingan untuk menyelesaikan masalah sehari-hari."
  },

  RM: {
    icon: "🧠",
    title: "Ratio Master",
    description: "Analisis berbagai situasi perbandingan dan temukan kesalahannya."
  },

  BOSS: {
    icon: "👑",
    title: "Boss Challenge",
    description: "Tantangan akhir untuk membuktikan kemampuanmu."
  }

};


/* =========================================================
   40 SOAL
   ========================================================= */

window.RATIO_QUESTIONS = [

  /* =======================================================
     PRETEST — 5 SOAL
     ======================================================= */

  {
    id: "P01",
    mission: "PRETEST",
    missionName: "Pretest",
    level: "KU",
    type: "multiple_choice",

    stimulus:
      "Di sebuah kotak terdapat 6 kelereng merah dan 9 kelereng biru.",

    question:
      "Perbandingan kelereng merah terhadap kelereng biru adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 2",
      "C. 6 : 3",
      "D. 9 : 6"
    ],

    answer: "A",

    explanation:
      "Perbandingan merah : biru = 6 : 9. Keduanya dibagi 3 sehingga menjadi 2 : 3.",

    errorCode: "E2",

    feedback:
      "Ingat urutan perbandingan. Jika yang ditanyakan merah : biru, tuliskan jumlah merah terlebih dahulu, kemudian jumlah biru."
  },

  {
    id: "P02",
    mission: "PRETEST",
    missionName: "Pretest",
    level: "KU",
    type: "multiple_choice",

    stimulus:
      "Di atas meja terdapat 4 apel dan 3 jeruk.",

    question:
      "Perbandingan apel terhadap jeruk adalah ...",

    options: [
      "A. 3 : 4",
      "B. 4 : 3",
      "C. 4 : 7",
      "D. 7 : 4"
    ],

    answer: "B",

    explanation:
      "Apel berjumlah 4 dan jeruk berjumlah 3. Jadi apel : jeruk = 4 : 3.",

    errorCode: "E1",

    feedback:
      "Tentukan dahulu dua besaran yang dibandingkan. Apel dibandingkan dengan jeruk."
  },

  {
    id: "P03",
    mission: "PRETEST",
    missionName: "Pretest",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Dalam sebuah kelas terdapat 12 siswa laki-laki dan 18 siswa perempuan.",

    question:
      "Bentuk paling sederhana dari perbandingan siswa laki-laki terhadap siswa perempuan adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 2",
      "C. 6 : 9",
      "D. 12 : 18"
    ],

    answer: "A",

    explanation:
      "12 : 18 dibagi 6 sehingga diperoleh 2 : 3.",

    errorCode: "E3",

    feedback:
      "Untuk menyederhanakan perbandingan, bagi kedua bilangan dengan faktor yang sama."
  },

  {
    id: "P04",
    mission: "PRETEST",
    missionName: "Pretest",
    level: "A",
    type: "matching",

    stimulus:
      "Pasangkan setiap perbandingan dengan bentuk sederhananya.",

    question:
      "Tuliskan jawaban dalam urutan yang benar.",

    options: [
      {
        left: "1. 2 apel : 4 jeruk",
        right: "1 : 2"
      },
      {
        left: "2. 6 pensil : 2 penghapus",
        right: "3 : 1"
      },
      {
        left: "3. 3 merah : 2 biru",
        right: "3 : 2"
      }
    ],

    answer: [
      "1:2",
      "3:1",
      "3:2"
    ],

    explanation:
      "2 : 4 disederhanakan menjadi 1 : 2. 6 : 2 menjadi 3 : 1. 3 : 2 sudah paling sederhana.",

    errorCode: "E1",

    feedback:
      "Perhatikan besaran pertama dan kedua sebelum menyederhanakan."
  },

  {
    id: "P05",
    mission: "PRETEST",
    missionName: "Pretest",
    level: "KU",
    type: "matching",

    stimulus:
      "Pasangkan perbandingan dengan bentuk sederhananya.",

    question:
      "Tuliskan jawaban sesuai urutan soal.",

    options: [
      {
        left: "1. 4 : 8",
        right: "1 : 2"
      },
      {
        left: "2. 6 : 9",
        right: "2 : 3"
      },
      {
        left: "3. 12 : 8",
        right: "3 : 2"
      }
    ],

    answer: [
      "1:2",
      "2:3",
      "3:2"
    ],

    explanation:
      "Setiap perbandingan disederhanakan dengan membagi kedua bilangan menggunakan faktor persekutuan yang sama.",

    errorCode: "E3",

    feedback:
      "Jangan hanya membagi salah satu bilangan. Kedua bagian perbandingan harus diperlakukan sama."
  },


  /* =======================================================
     RATIO DETECTIVE — 5 SOAL
     ======================================================= */

  {
    id: "RD01",
    mission: "RD",
    missionName: "Ratio Detective",
    level: "KU",
    type: "multiple_choice",

    stimulus:
      "Sebuah kotak berisi 8 bola merah dan 12 bola kuning.",

    question:
      "Perbandingan bola kuning terhadap bola merah dalam bentuk paling sederhana adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 2",
      "C. 8 : 12",
      "D. 12 : 8"
    ],

    answer: "B",

    explanation:
      "Kuning : merah = 12 : 8. Dibagi 4 menjadi 3 : 2.",

    errorCode: "E2",

    feedback:
      "Urutan sangat penting. Karena yang ditanyakan kuning : merah, gunakan 12 terlebih dahulu."
  },

  {
    id: "RD02",
    mission: "RD",
    missionName: "Ratio Detective",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Di sebuah rak terdapat 5 buku biru dan 10 buku merah.",

    question:
      "Perbandingan buku biru terhadap seluruh buku adalah ...",

    options: [
      "A. 1 : 2",
      "B. 1 : 3",
      "C. 2 : 3",
      "D. 5 : 10"
    ],

    answer: "B",

    explanation:
      "Jumlah seluruh buku = 5 + 10 = 15. Jadi biru : seluruh buku = 5 : 15 = 1 : 3.",

    errorCode: "E1",

    feedback:
      "Jika dibandingkan dengan seluruh benda, jumlah seluruh benda harus dihitung terlebih dahulu."
  },

  {
    id: "RD03",
    mission: "RD",
    missionName: "Ratio Detective",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Perbandingan jumlah makanan ringan dan minuman di kantin adalah 3 : 2. Jika makanan ringan berjumlah 12, berapa minuman yang tersedia?",

    question:
      "Jumlah minuman adalah ...",

    options: [
      "A. 6",
      "B. 8",
      "C. 10",
      "D. 18"
    ],

    answer: "B",

    explanation:
      "3 bagian makanan ringan = 12, sehingga 1 bagian = 4. Minuman = 2 × 4 = 8.",

    errorCode: "E4",

    feedback:
      "Cari nilai satu bagian terlebih dahulu, kemudian kalikan dengan jumlah bagian pada besaran kedua."
  },

  {
    id: "RD04",
    mission: "RD",
    missionName: "Ratio Detective",
    level: "A",
    type: "matching",

    stimulus:
      "Sederhanakan setiap perbandingan berikut.",

    question:
      "Tuliskan bentuk sederhananya.",

    options: [
      {
        left: "1. 10 : 15",
        right: "2 : 3"
      },
      {
        left: "2. 8 : 12",
        right: "2 : 3"
      },
      {
        left: "3. 18 : 12",
        right: "3 : 2"
      }
    ],

    answer: [
      "2:3",
      "2:3",
      "3:2"
    ],

    explanation:
      "10 : 15 dibagi 5 = 2 : 3. 8 : 12 dibagi 4 = 2 : 3. 18 : 12 dibagi 6 = 3 : 2.",

    errorCode: "E3",

    feedback:
      "Cari faktor persekutuan terbesar agar perbandingan menjadi paling sederhana."
  },

  {
    id: "RD05",
    mission: "RD",
    missionName: "Ratio Detective",
    level: "P",
    type: "matching",

    stimulus:
      "Perhatikan pasangan benda berikut.",

    question:
      "Tentukan perbandingan sesuai urutan yang diminta.",

    options: [
      {
        left: "1. 4 merah : 6 biru → merah : biru",
        right: "2 : 3"
      },
      {
        left: "2. 6 biru : 4 merah → biru : merah",
        right: "3 : 2"
      },
      {
        left: "3. 2 guru : 8 siswa → guru : siswa",
        right: "1 : 4"
      }
    ],

    answer: [
      "2:3",
      "3:2",
      "1:4"
    ],

    explanation:
      "Urutan benda harus mengikuti kalimat perbandingan. Setelah itu, sederhanakan jika diperlukan.",

    errorCode: "E2",

    feedback:
      "Baca kata sebelum dan sesudah tanda titik dua. Itulah urutan perbandingan."
  },


  /* =======================================================
     RATIO BUILDER — 5 SOAL
     ======================================================= */

  {
    id: "RB01",
    mission: "RB",
    missionName: "Ratio Builder",
    level: "KU",
    type: "multiple_choice",

    stimulus:
      "Sebuah kelompok memiliki 15 pensil merah dan 20 pensil biru.",

    question:
      "Perbandingan pensil merah terhadap pensil biru dalam bentuk sederhana adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 4",
      "C. 4 : 3",
      "D. 15 : 20"
    ],

    answer: "B",

    explanation:
      "15 : 20 dibagi 5 = 3 : 4.",

    errorCode: "E3",

    feedback:
      "Cari bilangan yang dapat membagi kedua bagian perbandingan."
  },

  {
    id: "RB02",
    mission: "RB",
    missionName: "Ratio Builder",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Perbandingan siswa yang membawa bekal dan tidak membawa bekal adalah 24 : 36.",

    question:
      "Bentuk sederhana dari perbandingan tersebut adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 2",
      "C. 4 : 6",
      "D. 6 : 9"
    ],

    answer: "A",

    explanation:
      "24 dan 36 sama-sama dapat dibagi 12. Jadi 24 : 36 = 2 : 3.",

    errorCode: "E3",

    feedback:
      "Sederhanakan kedua bilangan menggunakan pembagi yang sama."
  },

  {
    id: "RB03",
    mission: "RB",
    missionName: "Ratio Builder",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Untuk membuat sirup, perbandingan sirup dan air adalah 2 : 5. Jika digunakan 6 gelas sirup, berapa gelas air yang diperlukan?",

    question:
      "Air yang diperlukan adalah ...",

    options: [
      "A. 10 gelas",
      "B. 12 gelas",
      "C. 15 gelas",
      "D. 18 gelas"
    ],

    answer: "C",

    explanation:
      "2 bagian sirup = 6, berarti 1 bagian = 3. Air = 5 × 3 = 15 gelas.",

    errorCode: "E4",

    feedback:
      "Cari faktor pengali dari bagian pertama, lalu gunakan faktor yang sama pada bagian kedua."
  },

  {
    id: "RB04",
    mission: "RB",
    missionName: "Ratio Builder",
    level: "A",
    type: "matching",

    stimulus:
      "Tentukan pasangan perbandingan yang senilai.",

    question:
      "Tuliskan perbandingan yang senilai.",

    options: [
      {
        left: "1. 2 : 3 → dikali 6",
        right: "12 : 18"
      },
      {
        left: "2. 3 : 5 → dikali 2",
        right: "6 : 10"
      },
      {
        left: "3. 4 : 7 → dikali 2",
        right: "8 : 14"
      }
    ],

    answer: [
      "12:18",
      "6:10",
      "8:14"
    ],

    explanation:
      "Perbandingan senilai diperoleh dengan mengalikan kedua bagian menggunakan bilangan yang sama.",

    errorCode: "E4",

    feedback:
      "Jika satu bagian dikali suatu bilangan, bagian lainnya juga harus dikali bilangan yang sama."
  },

  {
    id: "RB05",
    mission: "RB",
    missionName: "Ratio Builder",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perbandingan jumlah kelereng Rafi dan Bima adalah 12 : 18. Perbandingan tersebut setara dengan 8 : x.",

    question:
      "Nilai x adalah ...",

    options: [
      "A. 10",
      "B. 12",
      "C. 14",
      "D. 16"
    ],

    answer: "B",

    explanation:
      "12 : 18 disederhanakan menjadi 2 : 3. Jika 2 menjadi 8, dikali 4. Maka 3 juga dikali 4 sehingga x = 12.",

    errorCode: "E4",

    feedback:
      "Sederhanakan perbandingan terlebih dahulu atau cari faktor pengalinya."
  },


  /* =======================================================
     RATIO IN REAL LIFE — 5 SOAL
     ======================================================= */

  {
    id: "RL01",
    mission: "RL",
    missionName: "Ratio in Real Life",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Resep minuman membutuhkan 2 gelas sirup dan 5 gelas air. Ibu ingin membuat dua kali lipat resep tersebut.",

    question:
      "Jumlah sirup dan air yang diperlukan adalah ...",

    options: [
      "A. 4 gelas sirup dan 10 gelas air",
      "B. 4 gelas sirup dan 7 gelas air",
      "C. 2 gelas sirup dan 10 gelas air",
      "D. 6 gelas sirup dan 10 gelas air"
    ],

    answer: "A",

    explanation:
      "Semua bagian dikalikan 2. Sirup 2 × 2 = 4 dan air 5 × 2 = 10.",

    errorCode: "E4",

    feedback:
      "Pada perbandingan senilai, kedua besaran harus berubah dengan faktor yang sama."
  },

  {
    id: "RL02",
    mission: "RL",
    missionName: "Ratio in Real Life",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Perbandingan siswa yang membawa bekal dan tidak membawa bekal adalah 3 : 1. Jumlah seluruh siswa 24 orang.",

    question:
      "Berapa siswa yang membawa bekal?",

    options: [
      "A. 6",
      "B. 12",
      "C. 18",
      "D. 20"
    ],

    answer: "C",

    explanation:
      "Jumlah bagian = 3 + 1 = 4. Satu bagian = 24 ÷ 4 = 6. Bekal = 3 × 6 = 18.",

    errorCode: "E5",

    feedback:
      "Jika diketahui jumlah keseluruhan, jumlahkan bagian perbandingan terlebih dahulu."
  },

  {
    id: "RL03",
    mission: "RL",
    missionName: "Ratio in Real Life",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Untuk membuat adonan, perbandingan tepung dan gula adalah 4 : 1. Ibu menggunakan 400 gram tepung.",

    question:
      "Berapa gram gula yang diperlukan?",

    options: [
      "A. 50 gram",
      "B. 80 gram",
      "C. 100 gram",
      "D. 160 gram"
    ],

    answer: "C",

    explanation:
      "4 bagian tepung = 400 gram, sehingga 1 bagian = 100 gram. Gula = 1 bagian = 100 gram.",

    errorCode: "E5",

    feedback:
      "Gunakan informasi yang diketahui untuk menemukan nilai satu bagian."
  },

  {
    id: "RL04",
    mission: "RL",
    missionName: "Ratio in Real Life",
    level: "A",
    type: "matching",

    stimulus:
      "Gunakan perbandingan untuk menentukan jumlah yang belum diketahui.",

    question:
      "Tuliskan jawaban yang tepat.",

    options: [
      {
        left: "1. Rasio 2 : 3, bagian pertama = 8",
        right: "12"
      },
      {
        left: "2. Rasio 1 : 2, bagian pertama = 10",
        right: "20"
      },
      {
        left: "3. Tepung : gula = 3 : 1, tepung = 300 g",
        right: "100 g"
      }
    ],

    answer: [
      "12",
      "20",
      "100"
    ],

    explanation:
      "Gunakan faktor pengali yang sama untuk menentukan besaran kedua.",

    errorCode: "E4",

    feedback:
      "Temukan nilai satu bagian atau faktor pengali terlebih dahulu."
  },

  {
    id: "RL05",
    mission: "RL",
    missionName: "Ratio in Real Life",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Dalam sebuah paket makanan, perbandingan nasi dan lauk adalah 12 : 8. Jika lauk ditambah menjadi 20 bagian dengan perbandingan tetap, berapa bagian nasi?",

    question:
      "Jumlah nasi adalah ...",

    options: [
      "A. 24",
      "B. 30",
      "C. 32",
      "D. 36"
    ],

    answer: "B",

    explanation:
      "12 : 8 disederhanakan menjadi 3 : 2. Jika 2 bagian = 20, maka 1 bagian = 10. Nasi = 3 × 10 = 30.",

    errorCode: "E4",

    feedback:
      "Sederhanakan rasio terlebih dahulu agar hubungan kedua besaran lebih mudah terlihat."
  },


  /* =======================================================
     RATIO MASTER — 10 SOAL
     ======================================================= */

  {
    id: "RM01",
    mission: "RM",
    missionName: "Ratio Master",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Dalam kegiatan olahraga, perbandingan siswa yang memilih sepak bola dan bulu tangkis adalah 3 : 2. Jumlah seluruh siswa 25 orang.",

    question:
      "Berapa siswa yang memilih sepak bola?",

    options: [
      "A. 10",
      "B. 12",
      "C. 15",
      "D. 18"
    ],

    answer: "C",

    explanation:
      "Jumlah bagian = 3 + 2 = 5. Satu bagian = 25 ÷ 5 = 5. Sepak bola = 3 × 5 = 15.",

    errorCode: "E5",

    feedback:
      "Untuk mencari bagian dari keseluruhan, jumlahkan seluruh bagian rasio terlebih dahulu."
  },

  {
    id: "RM02",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perhatikan dua perbandingan berikut: 4 : 6 dan 6 : 9.",

    question:
      "Pernyataan yang benar adalah ...",

    options: [
      "A. Kedua rasio tidak senilai",
      "B. Hanya rasio pertama yang sederhana",
      "C. Kedua rasio senilai",
      "D. Rasio kedua lebih besar"
    ],

    answer: "C",

    explanation:
      "4 : 6 = 2 : 3 dan 6 : 9 = 2 : 3. Jadi kedua perbandingan senilai.",

    errorCode: "E4",

    feedback:
      "Untuk membandingkan dua rasio, sederhanakan keduanya terlebih dahulu."
  },

  {
    id: "RM03",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Rina berkata, '8 : 12 lebih besar daripada 2 : 3 karena 8 lebih besar daripada 2.'",

    question:
      "Bagaimana pendapatmu terhadap pernyataan Rina?",

    options: [
      "A. Benar, karena 8 > 2",
      "B. Benar, karena 12 > 3",
      "C. Salah, karena kedua rasio sebenarnya senilai",
      "D. Salah, karena 8 : 12 tidak dapat disederhanakan"
    ],

    answer: "C",

    explanation:
      "8 : 12 disederhanakan menjadi 2 : 3. Jadi ukuran bilangan tidak dapat langsung digunakan untuk menentukan rasio mana yang lebih besar.",

    errorCode: "E3",

    feedback:
      "Jangan membandingkan pembilang atau angka secara langsung. Bandingkan nilai perbandingannya."
  },

  {
    id: "RM04",
    mission: "RM",
    missionName: "Ratio Master",
    level: "A",
    type: "matching",

    stimulus:
      "Pasangkan strategi dengan situasi yang sesuai.",

    question:
      "Pilih strategi yang tepat.",

    options: [
      {
        left: "1. Diketahui jumlah seluruh benda",
        right: "Jumlahkan bagian rasio"
      },
      {
        left: "2. Diketahui nilai satu bagian",
        right: "Cari faktor pengali"
      },
      {
        left: "3. Membandingkan dua rasio",
        right: "Sederhanakan keduanya"
      }
    ],

    answer: [
      "Jumlahkan bagian rasio",
      "Cari faktor pengali",
      "Sederhanakan keduanya"
    ],

    explanation:
      "Strategi penyelesaian harus disesuaikan dengan informasi yang diketahui.",

    errorCode: "E5",

    feedback:
      "Baca informasi yang tersedia sebelum memilih strategi."
  },

  {
    id: "RM05",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perbandingan bola merah dan kuning yang benar adalah 2 : 3. Doni memiliki 6 bola merah dan 8 bola kuning.",

    question:
      "Apa yang dapat disimpulkan?",

    options: [
      "A. Bola Doni memiliki rasio yang sama",
      "B. Bola Doni memiliki terlalu banyak bola kuning",
      "C. Bola Doni memiliki terlalu banyak bola merah",
      "D. Tidak dapat dibandingkan"
    ],

    answer: "C",

    explanation:
      "Jika merah 6, maka dengan rasio 2 : 3 seharusnya kuning 9. Doni hanya memiliki 8 kuning, sehingga jumlah merah relatif terlalu banyak.",

    errorCode: "E4",

    feedback:
      "Gunakan rasio acuan untuk menentukan jumlah pasangan yang seharusnya."
  },

  {
    id: "RM06",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "matching",

    stimulus:
      "Perhatikan arti dari beberapa perbandingan.",

    question:
      "Pasangkan rasio dengan maknanya.",

    options: [
      {
        left: "1. 2 : 5",
        right: "2 bagian pertama dibanding 5 bagian kedua"
      },
      {
        left: "2. 3 : 4",
        right: "3 bagian pertama dibanding 4 bagian kedua"
      },
      {
        left: "3. 4 : 7",
        right: "4 bagian pertama dibanding 7 bagian kedua"
      }
    ],

    answer: [
      "2 bagian pertama dibanding 5 bagian kedua",
      "3 bagian pertama dibanding 4 bagian kedua",
      "4 bagian pertama dibanding 7 bagian kedua"
    ],

    explanation:
      "Angka pertama menunjukkan jumlah bagian pertama, sedangkan angka kedua menunjukkan jumlah bagian kedua.",

    errorCode: "E2",

    feedback:
      "Perhatikan urutan angka dalam rasio."
  },

  {
    id: "RM07",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perbandingan siswa laki-laki dan perempuan adalah 2 : 3. Budi berkata, 'Jika jumlah siswa laki-laki ditambah 4, perbandingannya tetap sama.'",

    question:
      "Apakah pernyataan Budi benar?",

    options: [
      "A. Benar, karena 4 dapat ditambahkan",
      "B. Benar, karena rasio tidak berubah",
      "C. Salah, karena kedua besaran harus berubah secara proporsional",
      "D. Salah, karena siswa laki-laki tidak boleh bertambah"
    ],

    answer: "C",

    explanation:
      "Agar rasio tetap 2 : 3, kedua jumlah harus berubah dengan faktor yang sama. Menambah 4 hanya pada salah satu bagian mengubah rasio.",

    errorCode: "E4",

    feedback:
      "Rasio senilai mempertahankan hubungan kedua besaran, bukan hanya salah satunya."
  },

  {
    id: "RM08",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perbandingan acuan adalah 5 : 8.",

    question:
      "Manakah yang TIDAK senilai dengan 5 : 8?",

    options: [
      "A. 10 : 16",
      "B. 15 : 24",
      "C. 20 : 32",
      "D. 25 : 36"
    ],

    answer: "D",

    explanation:
      "5 : 8 dikali 2 = 10 : 16, dikali 3 = 15 : 24, dan dikali 4 = 20 : 32. Sedangkan 25 : 36 tidak senilai.",

    errorCode: "E4",

    feedback:
      "Cek apakah kedua bilangan dapat diperoleh dengan faktor pengali yang sama."
  },

  {
    id: "RM09",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "matching",

    stimulus:
      "Setiap kesalahan memiliki ciri tertentu.",

    question:
      "Pasangkan kode kesalahan dengan jenis kesalahannya.",

    options: [
      {
        left: "1. E1",
        right: "Salah menentukan besaran yang dibandingkan"
      },
      {
        left: "2. E2",
        right: "Salah urutan rasio"
      },
      {
        left: "3. E3",
        right: "Salah menyederhanakan rasio"
      }
    ],

    answer: [
      "Salah menentukan besaran yang dibandingkan",
      "Salah urutan rasio",
      "Salah menyederhanakan rasio"
    ],

    explanation:
      "E1 berkaitan dengan besaran, E2 dengan urutan, dan E3 dengan proses penyederhanaan.",

    errorCode: "E1",

    feedback:
      "Gunakan kode kesalahan untuk menemukan bagian mana dari prosesmu yang perlu diperbaiki."
  },

  {
    id: "RM10",
    mission: "RM",
    missionName: "Ratio Master",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Citra membuat adonan dengan perbandingan tepung dan gula 5 : 2. Ia menggunakan 750 gram tepung.",

    question:
      "Berapa gram gula yang diperlukan agar perbandingan tetap sama?",

    options: [
      "A. 150 gram",
      "B. 250 gram",
      "C. 300 gram",
      "D. 375 gram"
    ],

    answer: "C",

    explanation:
      "5 bagian tepung = 750 gram. Satu bagian = 750 ÷ 5 = 150 gram. Gula = 2 × 150 = 300 gram.",

    errorCode: "E5",

    feedback:
      "Cari nilai satu bagian terlebih dahulu, kemudian kalikan dengan jumlah bagian gula."
  },


  /* =======================================================
     BOSS CHALLENGE — 10 SOAL
     ======================================================= */

  {
    id: "B01",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Sebuah kelas memiliki 18 buku cerita dan 24 buku pengetahuan.",

    question:
      "Perbandingan buku cerita terhadap buku pengetahuan dalam bentuk sederhana adalah ...",

    options: [
      "A. 2 : 3",
      "B. 3 : 4",
      "C. 4 : 3",
      "D. 18 : 24"
    ],

    answer: "B",

    explanation:
      "18 : 24 dibagi 6 = 3 : 4.",

    errorCode: "E3",

    feedback:
      "Sederhanakan kedua bilangan dengan pembagi yang sama."
  },

  {
    id: "B02",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Perbandingan buku cerita dan buku pengetahuan adalah 3 : 5. Jika buku cerita berjumlah 24, berapa buku pengetahuan?",

    question:
      "Jumlah buku pengetahuan adalah ...",

    options: [
      "A. 30",
      "B. 35",
      "C. 40",
      "D. 45"
    ],

    answer: "C",

    explanation:
      "3 bagian = 24, maka 1 bagian = 8. Buku pengetahuan = 5 × 8 = 40.",

    errorCode: "E4",

    feedback:
      "Temukan nilai satu bagian sebelum mencari bagian yang lain."
  },

  {
    id: "B03",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "A",
    type: "multiple_choice",

    stimulus:
      "Perbandingan jus dan susu dalam sebuah minuman adalah 4 : 3. Jika jus yang digunakan 28 gelas satuan, berapa susu yang diperlukan?",

    question:
      "Jumlah susu yang diperlukan adalah ...",

    options: [
      "A. 18",
      "B. 20",
      "C. 21",
      "D. 24"
    ],

    answer: "C",

    explanation:
      "4 bagian = 28, maka 1 bagian = 7. Susu = 3 × 7 = 21.",

    errorCode: "E4",

    feedback:
      "Bagilah jumlah yang diketahui dengan banyak bagian untuk mendapatkan nilai satu bagian."
  },

  {
    id: "B04",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "A",
    type: "matching",

    stimulus:
      "Tentukan nilai kedua berdasarkan perbandingan yang diberikan.",

    question:
      "Tuliskan nilai besaran kedua.",

    options: [
      {
        left: "1. Rasio 2 : 3, bagian pertama = 10",
        right: "15"
      },
      {
        left: "2. Rasio 3 : 4, bagian pertama = 12",
        right: "16"
      },
      {
        left: "3. Rasio 4 : 5, bagian pertama = 20",
        right: "25"
      }
    ],

    answer: [
      "15",
      "16",
      "25"
    ],

    explanation:
      "Cari faktor pengali dari bagian pertama kemudian gunakan faktor yang sama pada bagian kedua.",

    errorCode: "E4",

    feedback:
      "Perbandingan senilai menggunakan faktor pengali yang sama."
  },

  {
    id: "B05",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Perbandingan siswa yang memilih olahraga dan seni adalah 3 : 2. Jika 18 siswa memilih olahraga, berapa siswa yang memilih seni?",

    question:
      "Jumlah siswa yang memilih seni adalah ...",

    options: [
      "A. 8",
      "B. 10",
      "C. 12",
      "D. 15"
    ],

    answer: "C",

    explanation:
      "3 bagian = 18, sehingga 1 bagian = 6. Seni = 2 × 6 = 12.",

    errorCode: "E5",

    feedback:
      "Gunakan hubungan antarbagian dalam rasio, bukan hanya selisih kedua bilangan."
  },

  {
    id: "B06",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Rasio acuan adalah 2 : 3.",

    question:
      "Manakah perbandingan yang tidak senilai dengan 2 : 3?",

    options: [
      "A. 4 : 6",
      "B. 6 : 9",
      "C. 8 : 12",
      "D. 10 : 14"
    ],

    answer: "D",

    explanation:
      "4 : 6, 6 : 9, dan 8 : 12 semuanya dapat disederhanakan menjadi 2 : 3. Sedangkan 10 : 14 menjadi 5 : 7.",

    errorCode: "E4",

    feedback:
      "Sederhanakan setiap pilihan dan bandingkan dengan rasio acuan."
  },

  {
    id: "B07",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "matching",

    stimulus:
      "Identifikasi jenis kesalahan dalam penyelesaian perbandingan.",

    question:
      "Pasangkan kode kesalahan dengan contohnya.",

    options: [
      {
        left: "1. E1",
        right: "Membandingkan jumlah benda yang salah"
      },
      {
        left: "2. E2",
        right: "Menulis perbandingan secara terbalik"
      },
      {
        left: "3. E3",
        right: "Membagi hanya salah satu bilangan"
      }
    ],

    answer: [
      "Membandingkan jumlah benda yang salah",
      "Menulis perbandingan secara terbalik",
      "Membagi hanya salah satu bilangan"
    ],

    explanation:
      "Kesalahan perbandingan dapat dikenali dari langkah yang dilakukan siswa.",

    errorCode: "E1",

    feedback:
      "Cek kembali: besaran, urutan, lalu cara menyederhanakan."
  },

  {
    id: "B08",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Di kelas terdapat 10 siswa laki-laki dan 18 siswa perempuan. Guru ingin membuat perbandingan laki-laki : perempuan menjadi 2 : 3 dengan menambah siswa laki-laki.",

    question:
      "Berapa siswa laki-laki yang perlu ditambahkan agar perbandingan menjadi 2 : 3?",

    options: [
      "A. 1 siswa",
      "B. 2 siswa",
      "C. 3 siswa",
      "D. 4 siswa"
    ],

    answer: "B",

    explanation:
      "Jika laki-laki menjadi 12 dan perempuan tetap 18, maka 12 : 18 = 2 : 3. Jadi perlu menambah 2 siswa laki-laki.",

    errorCode: "E4",

    feedback:
      "Cari nilai laki-laki yang membuat rasio 2 : 3 dengan jumlah perempuan tetap 18."
  },

  {
    id: "B09",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "multiple_choice",

    stimulus:
      "Sebuah keranjang berisi 12 apel merah dan 20 apel hijau.",

    question:
      "Perbandingan apel merah terhadap apel hijau adalah ...",

    options: [
      "A. 2 : 5",
      "B. 3 : 4",
      "C. 3 : 5",
      "D. 5 : 3"
    ],

    answer: "C",

    explanation:
      "12 : 20 dibagi 4 = 3 : 5.",

    errorCode: "E4",

    feedback:
      "Cari faktor persekutuan yang dapat membagi kedua jumlah."
  },

  {
    id: "B10",
    mission: "BOSS",
    missionName: "Boss Challenge",
    level: "P",
    type: "matching",

    stimulus:
      "Gunakan strategi perbandingan untuk menyelesaikan situasi berikut.",

    question:
      "Pasangkan situasi dengan strategi yang tepat.",

    options: [
      {
        left: "1. Menentukan rasio apel : jeruk",
        right: "Tentukan dua besaran dan urutannya"
      },
      {
        left: "2. Total benda 30 dengan rasio 2 : 3",
        right: "Jumlahkan bagian rasio lalu cari satu bagian"
      },
      {
        left: "3. Bagian pertama 8 pada rasio 2 : 5",
        right: "Cari faktor pengali"
      }
    ],

    answer: [
      "Tentukan dua besaran dan urutannya",
      "Jumlahkan bagian rasio lalu cari satu bagian",
      "Cari faktor pengali"
    ],

    explanation:
      "Strategi yang tepat bergantung pada informasi yang diketahui dalam soal.",

    errorCode: "E5",

    feedback:
      "Baca soal dengan teliti. Tentukan informasi yang diketahui dan apa yang harus dicari."
  }

];


/* =========================================================
   BANK SOAL PER MISI
   ========================================================= */

window.RATIO_QUESTION_BANKS = {

  PRETEST: window.RATIO_QUESTIONS.filter(
    q => q.mission === "PRETEST"
  ),

  RD: window.RATIO_QUESTIONS.filter(
    q => q.mission === "RD"
  ),

  RB: window.RATIO_QUESTIONS.filter(
    q => q.mission === "RB"
  ),

  RL: window.RATIO_QUESTIONS.filter(
    q => q.mission === "RL"
  ),

  RM: window.RATIO_QUESTIONS.filter(
    q => q.mission === "RM"
  ),

  BOSS: window.RATIO_QUESTIONS.filter(
    q => q.mission === "BOSS"
  )

};


/* =========================================================
   VALIDASI BANK SOAL
   ========================================================= */

console.log(
  "📚 Total soal Ratio Quest:",
  window.RATIO_QUESTIONS.length
);

console.log(
  "📊 Bank soal:",
  {
    PRETEST: window.RATIO_QUESTION_BANKS.PRETEST.length,
    RD: window.RATIO_QUESTION_BANKS.RD.length,
    RB: window.RATIO_QUESTION_BANKS.RB.length,
    RL: window.RATIO_QUESTION_BANKS.RL.length,
    RM: window.RATIO_QUESTION_BANKS.RM.length,
    BOSS: window.RATIO_QUESTION_BANKS.BOSS.length
  }
);


/* =========================================================
   CEK DUPLIKAT ID
   ========================================================= */

const ratioIds = window.RATIO_QUESTIONS.map(q => q.id);

const duplicateIds = ratioIds.filter(
  (id, index) => ratioIds.indexOf(id) !== index
);

if (duplicateIds.length > 0) {
  console.error(
    "❌ ID soal duplikat:",
    duplicateIds
  );
} else {
  console.log(
    "✅ Semua ID soal unik."
  );
}


/* =========================================================
   CEK JUMLAH SOAL
   ========================================================= */

if (window.RATIO_QUESTIONS.length === 40) {
  console.log(
    "✅ BANK SOAL BERHASIL: 40 soal."
  );
} else {
  console.error(
    "❌ Jumlah soal tidak sesuai. Ditemukan:",
    window.RATIO_QUESTIONS.length
  );
}
