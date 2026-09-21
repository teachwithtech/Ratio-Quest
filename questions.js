const questions = [
// ============================================================
// MATH MISSION — RATIO QUEST
// "Misi Menemukan Perbandingan yang Tepat"
// questions.js — Question Database
// ============================================================
//
// 67 SOAL
//
// PRETEST       : 10 soal
// RATIO DETECTIVE : 8 soal
// RATIO BUILDER   : 8 soal
// RATIO BRIDGE    : 8 soal
// REAL LIFE       : 10 soal
// RATIO MASTER    : 8 soal
// BOSS CHALLENGE  : 15 soal
//
// Level kognitif:
// KU = Pengetahuan & Pemahaman
// A  = Aplikasi
// P  = Penalaran
//
// Error Code:
// E1 = Salah menentukan besaran yang dibandingkan
// E2 = Salah urutan rasio
// E3 = Salah menyederhanakan rasio
// E4 = Salah menentukan rasio senilai
// E5 = Salah memahami konteks
//
// ============================================================


// ============================================================
// DATA SOAL
// ============================================================

const questions = [

    // ========================================================
    // PRETEST — STARTING POINT
    // ========================================================

    {
        id: "P01",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "Di meja terdapat 6 pensil biru dan 4 pensil merah.",

        question:
            "Berapakah rasio pensil biru terhadap pensil merah?",

        options: [
            "2 : 3",
            "3 : 2",
            "6 : 4",
            "4 : 6"
        ],

        answer: "6 : 4",

        explanation:
            "Yang dibandingkan adalah biru terhadap merah, sehingga 6 : 4.",

        errorCode: "E2",

        feedback:
            "Perhatikan urutannya! Yang disebut pertama menjadi bilangan pertama. Biru : merah = 6 : 4."
    },


    {
        id: "P02",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "🍎 🍎 🍎 🍎 🍎\n🍊 🍊 🍊",

        question:
            "Rasio apel terhadap jeruk adalah …",

        options: [
            "3 : 5",
            "5 : 3",
            "5 : 8",
            "8 : 5"
        ],

        answer: "5 : 3",

        explanation:
            "Ada 5 apel dan 3 jeruk, sehingga rasionya 5 : 3.",

        errorCode: "E2",

        feedback:
            "Hitung dulu masing-masing benda. Apel ada 5 dan jeruk ada 3."
    },


    {
        id: "P03",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "short_answer",

        stimulus:
            "Di kelas terdapat 8 siswa laki-laki dan 12 siswa perempuan.",

        question:
            "Tuliskan rasio siswa laki-laki terhadap siswa perempuan.",

        options: [],

        answer: "8 : 12",

        explanation:
            "Kata 'terhadap' menunjukkan urutan perbandingan. Laki-laki : perempuan = 8 : 12.",

        errorCode: "E2",

        feedback:
            "Kata 'terhadap' menunjukkan urutan perbandingan. Laki-laki : perempuan."
    },


    {
        id: "P04",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "Data buah:\n\nApel = 8\nJeruk = 12\nMangga = 4",

        question:
            "Rasio jeruk terhadap mangga adalah …",

        options: [
            "12 : 4",
            "4 : 12",
            "12 : 8",
            "8 : 4"
        ],

        answer: "12 : 4",

        explanation:
            "Yang dibandingkan hanya jeruk dan mangga. Jeruk = 12 dan mangga = 4.",

        errorCode: "E1/E2",

        feedback:
            "Cari dua data yang diminta saja: jeruk dan mangga."
    },


    {
        id: "P05",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Bentuk paling sederhana dari 12 : 18 adalah …",

        options: [
            "2 : 3",
            "3 : 2",
            "6 : 9",
            "4 : 9"
        ],

        answer: "2 : 3",

        explanation:
            "12 dan 18 sama-sama dapat dibagi 6, sehingga 12 : 18 = 2 : 3.",

        errorCode: "E3",

        feedback:
            "Cari bilangan yang dapat membagi kedua bagian. 12 dan 18 sama-sama dapat dibagi 6."
    },


    {
        id: "P06",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Pasangan rasio yang senilai dengan 2 : 3 adalah …",

        options: [
            "4 : 5",
            "4 : 6",
            "6 : 8",
            "8 : 10"
        ],

        answer: "4 : 6",

        explanation:
            "2 × 2 = 4 dan 3 × 2 = 6, sehingga 4 : 6 senilai dengan 2 : 3.",

        errorCode: "E4",

        feedback:
            "Pada rasio senilai, kedua bagian harus dikalikan dengan bilangan yang sama."
    },


    {
        id: "P07",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Untuk membuat jus, diperlukan 2 buah jeruk untuk setiap 3 gelas air.\n\nJika digunakan 6 gelas air, berapa buah jeruk yang diperlukan?",

        question:
            "Berapa buah jeruk yang diperlukan?",

        options: [
            "2",
            "3",
            "4",
            "6"
        ],

        answer: "4",

        explanation:
            "3 gelas air menjadi 6 gelas, berarti dikali 2. Maka jumlah jeruk juga dikali 2: 2 × 2 = 4.",

        errorCode: "E4",

        feedback:
            "Bandingkan faktor perubahan. Air berubah dari 3 menjadi 6, berarti dikali 2. Jeruk juga harus dikali 2."
    },


    {
        id: "P08",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Resep salad menggunakan 3 wortel untuk setiap 2 buah tomat.\n\nJika ingin menggunakan 6 wortel, berapa tomat yang diperlukan?",

        question:
            "Berapa tomat yang diperlukan?",

        options: [
            "2",
            "3",
            "4",
            "6"
        ],

        answer: "4",

        explanation:
            "Wortel dari 3 menjadi 6 berarti dikali 2. Tomat juga harus dikali 2: 2 × 2 = 4.",

        errorCode: "E4",

        feedback:
            "Wortel dari 3 menjadi 6 berarti dikali 2. Tomat juga harus dikali 2."
    },


    {
        id: "P09",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Dina menyelesaikan:\n\n8 : 12 = 4 : 12",

        question:
            "Apa kesalahan Dina?",

        options: [
            "8 seharusnya ditambah 4",
            "Hanya satu bilangan yang dibagi",
            "Urutan rasio terbalik",
            "12 seharusnya dikali 2"
        ],

        answer: "Hanya satu bilangan yang dibagi",

        explanation:
            "Saat menyederhanakan rasio, kedua bagian harus diperlakukan dengan operasi yang sama.",

        errorCode: "E3",

        feedback:
            "Saat menyederhanakan rasio, kedua bagian harus diperlakukan dengan operasi yang sama."
    },


    {
        id: "P10",
        mission: "PRETEST",
        missionName: "Pretest",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Kelas VI memiliki 18 siswa. Perbandingan siswa laki-laki dan perempuan adalah 1 : 2.",

        question:
            "Berapa banyak siswa laki-laki?",

        options: [
            "6",
            "8",
            "9",
            "12"
        ],

        answer: "6",

        explanation:
            "1 + 2 = 3 bagian. 18 ÷ 3 = 6. Laki-laki = 1 bagian = 6 siswa.",

        errorCode: "E5",

        feedback:
            "Jangan langsung membagi 18 dengan angka pertama. Jumlahkan seluruh bagian rasio terlebih dahulu."
    },


    // ========================================================
    // MISSION 1 — RATIO DETECTIVE
    // ========================================================

    {
        id: "RD11",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "Ada 7 bola merah dan 5 bola biru.",

        question:
            "Dua kuantitas yang dibandingkan dalam rasio merah terhadap biru adalah …",

        options: [
            "merah dan semua bola",
            "biru dan semua bola",
            "merah dan biru",
            "semua bola dan merah"
        ],

        answer: "merah dan biru",

        explanation:
            "Rasio merah terhadap biru hanya membandingkan dua kelompok tersebut.",

        errorCode: "E1",

        feedback:
            "Rasio merah terhadap biru hanya membandingkan dua kelompok tersebut."
    },


    {
        id: "RD12",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "🟩 🟩 🟩 🟩\n\n🟨 🟨 🟨 🟨 🟨 🟨",

        question:
            "Rasio hijau terhadap kuning adalah …",

        options: [
            "4 : 6",
            "6 : 4",
            "4 : 10",
            "10 : 4"
        ],

        answer: "4 : 6",

        explanation:
            "Ada 4 kotak hijau dan 6 kotak kuning. Karena yang ditanya hijau terhadap kuning, rasionya 4 : 6.",

        errorCode: "E2",

        feedback:
            "Hijau disebut lebih dulu, jadi tuliskan jumlah hijau terlebih dahulu."
    },


    {
        id: "RD13",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "Di taman ada 5 bunga mawar dan 8 bunga melati.",

        question:
            "Manakah kalimat rasio yang benar?",

        options: [
            "Mawar terhadap melati = 8 : 5",
            "Mawar terhadap melati = 5 : 8",
            "Melati terhadap mawar = 5 : 8",
            "Mawar terhadap semua bunga = 5 : 8"
        ],

        answer: "Mawar terhadap melati = 5 : 8",

        explanation:
            "Mawar disebut pertama, sehingga 5 menjadi bilangan pertama.",

        errorCode: "E2",

        feedback:
            "Mawar disebut pertama. Jadi 5 menjadi bilangan pertama."
    },


    {
        id: "RD14",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "KU",
        type: "short_answer",

        stimulus:
            "Ada 6 buku cerita dan 9 buku pengetahuan.",

        question:
            "Tuliskan rasio buku cerita terhadap buku pengetahuan dalam bentuk a : b.",

        options: [],

        answer: "6 : 9",

        explanation:
            "Buku cerita : buku pengetahuan = 6 : 9.",

        errorCode: "E2",

        feedback:
            "Cerita : pengetahuan = 6 : 9."
    },


    {
        id: "RD15",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "KU",
        type: "matching",

        stimulus:
            "Merah = 10\nBiru = 15\nHijau = 5",

        question:
            "Pasangkan rasio berikut dengan nilainya:\n\n1. Merah : Biru\n2. Biru : Hijau\n3. Hijau : Merah",

        options: [
            "Merah : Biru → 10 : 15",
            "Biru : Hijau → 15 : 5",
            "Hijau : Merah → 5 : 10"
        ],

        answer: [
            "10 : 15",
            "15 : 5",
            "5 : 10"
        ],

        explanation:
            "Baca rasio dari kiri ke kanan sesuai urutan yang diminta.",

        errorCode: "E2",

        feedback:
            "Baca rasio dari kiri ke kanan sesuai urutan yang diminta."
    },


    {
        id: "RD16",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Di kelas ada 12 siswa perempuan dan 8 siswa laki-laki.",

        question:
            "Rasio perempuan terhadap laki-laki adalah …",

        options: [
            "2 : 3",
            "3 : 2",
            "12 : 20",
            "8 : 12"
        ],

        answer: "3 : 2",

        explanation:
            "12 : 8 disederhanakan dengan membagi 4 menjadi 3 : 2.",

        errorCode: "E2",

        feedback:
            "12 : 8 dapat disederhanakan dengan membagi 4 menjadi 3 : 2."
    },


    {
        id: "RD17",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Raka berkata:\n\n'Ada 4 bola merah dan 6 bola biru. Jadi rasio biru terhadap merah adalah 4 : 6.'",

        question:
            "Pernyataan Raka …",

        options: [
            "benar",
            "salah karena seharusnya 6 : 4",
            "salah karena seharusnya 4 : 10",
            "benar karena urutan tidak penting"
        ],

        answer: "salah karena seharusnya 6 : 4",

        explanation:
            "Rasio memperhatikan urutan. Biru : merah = 6 : 4.",

        errorCode: "E2",

        feedback:
            "Rasio memperhatikan urutan. Biru : merah = 6 : 4."
    },


    {
        id: "RD18",
        mission: "RD",
        missionName: "Ratio Detective",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Nia: 6 apel dan 4 jeruk.\n\nApel : jeruk = 4 : 6.",

        question:
            "Kesalahan Nia adalah …",

        options: [
            "salah menghitung apel",
            "salah menghitung jeruk",
            "membalik urutan rasio",
            "tidak menyederhanakan rasio"
        ],

        answer: "membalik urutan rasio",

        explanation:
            "Nia sudah menghitung dengan benar, tetapi urutannya terbalik. Apel : jeruk = 6 : 4.",

        errorCode: "E2",

        feedback:
            "Nia sudah menghitung dengan benar, tetapi urutannya terbalik. Apel : jeruk = 6 : 4."
    },


    // ========================================================
    // MISSION 2 — RATIO BUILDER
    // ========================================================

    {
        id: "RB19",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Bentuk paling sederhana dari 8 : 12 adalah …",

        options: [
            "2 : 3",
            "3 : 2",
            "4 : 6",
            "8 : 4"
        ],

        answer: "2 : 3",

        explanation:
            "8 dan 12 sama-sama dapat dibagi 4.",

        errorCode: "E3",

        feedback:
            "8 dan 12 sama-sama dapat dibagi 4."
    },


    {
        id: "RB20",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Bilangan terbesar yang dapat membagi 12 dan 18 sekaligus adalah …",

        options: [
            "2",
            "3",
            "6",
            "9"
        ],

        answer: "6",

        explanation:
            "6 adalah bilangan terbesar yang dapat membagi 12 dan 18 tanpa sisa.",

        errorCode: "E3",

        feedback:
            "Cari bilangan yang dapat membagi kedua angka tanpa sisa."
    },


    {
        id: "RB21",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Rasio 15 : 20 jika disederhanakan menjadi …",

        options: [
            "2 : 3",
            "3 : 4",
            "4 : 5",
            "5 : 4"
        ],

        answer: "3 : 4",

        explanation:
            "15 dan 20 sama-sama dibagi 5, sehingga menjadi 3 : 4.",

        errorCode: "E3",

        feedback:
            "Cari faktor yang sama pada kedua bilangan."
    },


    {
        id: "RB22",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Ada 12 balon merah dan 8 balon putih.",

        question:
            "Rasio merah terhadap putih dalam bentuk paling sederhana adalah …",

        options: [
            "3 : 2",
            "2 : 3",
            "12 : 20",
            "4 : 6"
        ],

        answer: "3 : 2",

        explanation:
            "12 : 8 dibagi 4 menjadi 3 : 2.",

        errorCode: "E3",

        feedback:
            "12 : 8 dibagi 4 menjadi 3 : 2."
    },


    {
        id: "RB23",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Di perpustakaan terdapat 18 buku cerita dan 12 buku sains.",

        question:
            "Rasio buku cerita terhadap buku sains dalam bentuk sederhana adalah …",

        options: [
            "3 : 2",
            "2 : 3",
            "18 : 30",
            "6 : 5"
        ],

        answer: "3 : 2",

        explanation:
            "18 : 12 dapat dibagi 6 sehingga menjadi 3 : 2.",

        errorCode: "E3",

        feedback:
            "Cari bilangan yang dapat membagi kedua bagian rasio."
    },


    {
        id: "RB24",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "10 : 15 → ?\n12 : 16 → ?\n18 : 24 → ?",

        question:
            "Pasangan bentuk sederhana yang benar adalah …",

        options: [
            "2:3, 3:4, 3:4",
            "3:2, 4:3, 4:3",
            "2:3, 4:3, 3:4",
            "5:3, 3:4, 4:3"
        ],

        answer: "2:3, 3:4, 3:4",

        explanation:
            "10 : 15 = 2 : 3, 12 : 16 = 3 : 4, dan 18 : 24 = 3 : 4.",

        errorCode: "E3",

        feedback:
            "Sederhanakan setiap rasio dengan membagi kedua bilangan menggunakan faktor yang sama."
    },


    {
        id: "RB25",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Bima:\n16 : 24\n= 8 : 24\n= 4 : 12",

        question:
            "Kesalahan pertama Bima adalah …",

        options: [
            "16 dibagi 2, tetapi 24 tidak dibagi 2",
            "16 seharusnya dikali 2",
            "24 seharusnya ditambah 8",
            "tidak ada kesalahan"
        ],

        answer: "16 dibagi 2, tetapi 24 tidak dibagi 2",

        explanation:
            "Saat menyederhanakan rasio, kedua bilangan harus mengalami operasi yang sama.",

        errorCode: "E3",

        feedback:
            "Saat menyederhanakan rasio, kedua bilangan harus mengalami operasi yang sama."
    },


    {
        id: "RB26",
        mission: "RB",
        missionName: "Ratio Builder",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Salsa mendapatkan:\n\n20 : 30 = 2 : 3\n\nGuru meminta Salsa memperbaiki langkahnya.",

        question:
            "Langkah yang paling tepat adalah …",

        options: [
            "20 ÷ 10 dan 30 ÷ 10",
            "20 ÷ 2 dan 30 ÷ 3",
            "20 − 10 dan 30 − 10",
            "20 ÷ 5 dan 30 ÷ 10"
        ],

        answer: "20 ÷ 10 dan 30 ÷ 10",

        explanation:
            "Kedua bagian harus dibagi dengan bilangan yang sama. 20 dan 30 sama-sama dapat dibagi 10.",

        errorCode: "E3",

        feedback:
            "Kedua bagian harus dibagi dengan bilangan yang sama. 20 dan 30 sama-sama dapat dibagi 10."
    },


    // ========================================================
    // MISSION 3 — RATIO BRIDGE
    // ========================================================

    {
        id: "RBR27",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Manakah yang senilai dengan 3 : 4?",

        options: [
            "6 : 8",
            "6 : 7",
            "9 : 16",
            "12 : 20"
        ],

        answer: "6 : 8",

        explanation:
            "3 dan 4 sama-sama dikalikan 2 menjadi 6 dan 8.",

        errorCode: "E4",

        feedback:
            "Kedua bagian harus dikalikan dengan faktor yang sama."
    },


    {
        id: "RBR28",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Pensil : Penghapus\n\n2 : 3\n4 : 6\n6 : ?",

        question:
            "Nilai yang tepat adalah …",

        options: [
            "7",
            "8",
            "9",
            "10"
        ],

        answer: "9",

        explanation:
            "Pola 2 → 4 → 6. Penghapus mengikuti faktor yang sama: 3 → 6 → 9.",

        errorCode: "E4",

        feedback:
            "Pola 2 → 4 → 6. Penghapus juga mengikuti faktor yang sama: 3 → 6 → 9."
    },


    {
        id: "RBR29",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "A",
        type: "short_answer",

        stimulus:
            "Gelas jus : Buah\n\n2 : 4\n4 : 8\n6 : ?",

        question:
            "Nilai yang tepat adalah …",

        options: [],

        answer: "12",

        explanation:
            "Setiap 1 gelas jus berpasangan dengan 2 buah. Jika gelas menjadi 6, buah = 6 × 2 = 12.",

        errorCode: "E4",

        feedback:
            "Perhatikan pola pasangan. Saat gelas bertambah, jumlah buah bertambah dengan faktor yang sama."
    },


    {
        id: "RBR30",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Untuk setiap 2 sendok sirup diperlukan 5 sendok air.",

        question:
            "Manakah pasangan yang memiliki rasio sirup : air yang sama?",

        options: [
            "4 : 10",
            "6 : 10",
            "8 : 15",
            "10 : 20"
        ],

        answer: "4 : 10",

        explanation:
            "2 : 5 dikalikan 2 menjadi 4 : 10.",

        errorCode: "E4",

        feedback:
            "Kalikan kedua bagian dengan faktor yang sama."
    },


    {
        id: "RBR31",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "A",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Manakah pasangan yang tidak senilai dengan 4 : 5?",

        options: [
            "8 : 10",
            "12 : 15",
            "16 : 20",
            "20 : 30"
        ],

        answer: "20 : 30",

        explanation:
            "4 : 5 senilai dengan 8 : 10, 12 : 15, dan 16 : 20. Namun 20 : 30 disederhanakan menjadi 2 : 3.",

        errorCode: "E4",

        feedback:
            "Coba sederhanakan setiap rasio. Rasio yang senilai akan memiliki bentuk sederhana yang sama."
    },


    {
        id: "RBR32",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Kotak : Bola\n\n1 : 3\n2 : 6\n3 : 9\n4 : ?",

        question:
            "Berapa bola dalam 4 kotak?",

        options: [
            "10",
            "11",
            "12",
            "13"
        ],

        answer: "12",

        explanation:
            "Setiap 1 kotak berisi 3 bola. Jadi 4 kotak berisi 4 × 3 = 12 bola.",

        errorCode: "E4",

        feedback:
            "Cari faktor tetap antara jumlah kotak dan jumlah bola."
    },


    {
        id: "RBR33",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Rasio awal = 3 : 5\n\nDiperbesar 2 kali.\n\nHasil = 6 : 5",

        question:
            "Apa kesalahannya?",

        options: [
            "3 tidak boleh dikali",
            "hanya bagian pertama yang dikali",
            "rasio harus dibalik",
            "5 harus dikurangi 2"
        ],

        answer: "hanya bagian pertama yang dikali",

        explanation:
            "Jika rasio diperbesar 2 kali, kedua bagian harus dikalikan 2: 3 × 2 : 5 × 2 = 6 : 10.",

        errorCode: "E4",

        feedback:
            "Jika rasio diperbesar 2 kali, kedua bagian dikalikan 2: 3 × 2 : 5 × 2 = 6 : 10."
    },


    {
        id: "RBR34",
        mission: "RBR",
        missionName: "Ratio Bridge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Andi menulis:\n\n4 : 7 = 8 : 14",

        question:
            "Apakah jawaban Andi benar?",

        options: [
            "Benar, karena keduanya dikali 2",
            "Salah, karena hanya angka pertama yang berubah",
            "Salah, karena 7 harus menjadi 9",
            "Salah, karena rasio tidak boleh diperbesar"
        ],

        answer: "Benar, karena keduanya dikali 2",

        explanation:
            "Benar! Kedua bagian dikalikan dengan faktor yang sama, yaitu 2.",

        errorCode: null,

        feedback:
            "Benar! Kedua bagian dikalikan dengan faktor yang sama, yaitu 2."
    },


    // ========================================================
    // MISSION 4 — RATIO IN REAL LIFE
    // ========================================================

    {
        id: "RRL35",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Untuk membuat 1 gelas jus diperlukan 2 buah jeruk dan 3 sendok air.",

        question:
            "Rasio jeruk terhadap sendok air adalah …",

        options: [
            "2 : 3",
            "3 : 2",
            "2 : 5",
            "5 : 2"
        ],

        answer: "2 : 3",

        explanation:
            "Jeruk = 2 dan air = 3, sehingga rasio jeruk : air = 2 : 3.",

        errorCode: "E2",

        feedback:
            "Perhatikan urutan yang diminta: jeruk terlebih dahulu, kemudian air."
    },


    {
        id: "RRL36",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Satu resep membutuhkan 2 telur untuk 3 porsi kue.",

        question:
            "Berapa telur yang diperlukan untuk 9 porsi?",

        options: [
            "3",
            "4",
            "6",
            "9"
        ],

        answer: "6",

        explanation:
            "3 porsi menjadi 9 porsi, berarti dikali 3. Telur juga dikali 3: 2 × 3 = 6.",

        errorCode: "E4",

        feedback:
            "Cari faktor perubahan porsi, kemudian gunakan faktor yang sama untuk jumlah telur."
    },


    {
        id: "RRL37",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Kelas VI terdiri atas 15 siswa laki-laki dan 20 siswa perempuan.",

        question:
            "Rasio laki-laki terhadap perempuan dalam bentuk sederhana adalah …",

        options: [
            "3 : 4",
            "4 : 3",
            "15 : 35",
            "5 : 4"
        ],

        answer: "3 : 4",

        explanation:
            "15 : 20 dibagi 5 menjadi 3 : 4.",

        errorCode: "E3",

        feedback:
            "Sederhanakan kedua bagian menggunakan faktor yang sama."
    },


    {
        id: "RRL38",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Untuk membuat warna ungu, Rani mencampurkan 2 bagian merah dan 3 bagian biru.\n\nJika Rani menggunakan 6 bagian biru, berapa bagian merah yang diperlukan?",

        question:
            "Berapa bagian merah yang diperlukan?",

        options: [
            "2",
            "3",
            "4",
            "6"
        ],

        answer: "4",

        explanation:
            "Biru dari 3 menjadi 6 berarti dikali 2. Merah juga dikali 2: 2 × 2 = 4.",

        errorCode: "E4",

        feedback:
            "Biru berubah dari 3 menjadi 6, berarti dikali 2. Merah juga harus dikali 2."
    },


    {
        id: "RRL39",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Toko A menjual 2 pensil seharga Rp6.000.\n\nToko B menjual 3 pensil seharga Rp9.000.",

        question:
            "Apa yang dapat disimpulkan?",

        options: [
            "Harga per pensil di Toko A lebih murah",
            "Harga per pensil di Toko B lebih murah",
            "Harga per pensil kedua toko sama",
            "Tidak dapat dibandingkan"
        ],

        answer: "Harga per pensil kedua toko sama",

        explanation:
            "Rp6.000 ÷ 2 = Rp3.000 dan Rp9.000 ÷ 3 = Rp3.000. Jadi harga per pensil sama.",

        errorCode: "E5",

        feedback:
            "Jangan hanya membandingkan harga total. Bandingkan harga untuk jumlah barang yang sama."
    },


    {
        id: "RRL40",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Sebuah kotak bekal berisi nasi, sayur, dan lauk dengan rasio 4 : 2 : 2.\n\nJika seluruh isi kotak terdiri atas 16 bagian, berapa bagian yang merupakan nasi?",

        question:
            "Berapa bagian yang merupakan nasi?",

        options: [
            "4",
            "6",
            "8",
            "10"
        ],

        answer: "8",

        explanation:
            "Jumlah bagian rasio = 4 + 2 + 2 = 8. Jika seluruhnya 16 bagian, faktor pengalinya 16 ÷ 8 = 2. Nasi = 4 × 2 = 8 bagian.",

        errorCode: "E5",

        feedback:
            "Jumlahkan seluruh bagian rasio terlebih dahulu, lalu tentukan nilai satu bagian."
    },


    {
        id: "RRL41",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Dalam kegiatan olahraga, waktu berlari dan berjalan memiliki rasio 3 : 2.\n\nJika waktu berlari 30 menit, berapa menit waktu berjalan?",

        question:
            "Berapa menit waktu berjalan?",

        options: [
            "10",
            "15",
            "20",
            "25"
        ],

        answer: "20",

        explanation:
            "3 bagian = 30 menit, sehingga 1 bagian = 10 menit. Berjalan = 2 bagian = 20 menit.",

        errorCode: "E4",

        feedback:
            "Tentukan nilai satu bagian terlebih dahulu."
    },


    {
        id: "RRL42",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Di kebun terdapat tanaman cabai dan tomat dengan rasio 2 : 5.\n\nJika jumlah tanaman cabai 8, berapa jumlah tanaman tomat?",

        question:
            "Berapa jumlah tanaman tomat?",

        options: [
            "10",
            "16",
            "20",
            "24"
        ],

        answer: "20",

        explanation:
            "2 bagian = 8, sehingga 1 bagian = 4. Tomat = 5 × 4 = 20.",

        errorCode: "E4",

        feedback:
            "Jika 2 bagian bernilai 8, tentukan dulu nilai 1 bagian."
    },


    {
        id: "RRL43",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Sebuah kelas mengumpulkan botol plastik.\n\nSenin: 12 botol\nSelasa: 18 botol\nRabu: 24 botol",

        question:
            "Rasio botol Senin terhadap Rabu dalam bentuk sederhana adalah …",

        options: [
            "1 : 2",
            "2 : 3",
            "3 : 4",
            "4 : 3"
        ],

        answer: "1 : 2",

        explanation:
            "12 : 24 dibagi 12 menjadi 1 : 2.",

        errorCode: "E3",

        feedback:
            "Bandingkan data Senin dan Rabu saja, kemudian sederhanakan 12 : 24."
    },


    {
        id: "RRL44",
        mission: "RRL",
        missionName: "Ratio in Real Life",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Perbandingan kelereng Andi dan Budi adalah 2 : 3.\nAndi memiliki 10 kelereng.\n\nRaka: Budi memiliki 15 kelereng.\n\nSinta: Budi memiliki 30 kelereng.",

        question:
            "Siapa yang benar?",

        options: [
            "Raka",
            "Sinta",
            "Keduanya",
            "Tidak ada"
        ],

        answer: "Raka",

        explanation:
            "2 bagian = 10, sehingga 1 bagian = 5. Budi memiliki 3 bagian = 15.",

        errorCode: "E4/E5",

        feedback:
            "2 bagian = 10, sehingga 1 bagian = 5. Budi memiliki 3 bagian = 15."
    },


    // ========================================================
    // MISSION 5 — RATIO MASTER
    // ========================================================

    {
        id: "RM45",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Sebuah kelas memiliki 24 siswa. Rasio laki-laki : perempuan = 1 : 2.",

        question:
            "Informasi apa yang perlu digunakan untuk menentukan jumlah siswa laki-laki?",

        options: [
            "24 dan 1 : 2",
            "hanya 24",
            "hanya angka 2",
            "jumlah meja"
        ],

        answer: "24 dan 1 : 2",

        explanation:
            "Untuk menentukan jumlah siswa laki-laki, kita membutuhkan jumlah seluruh siswa dan rasio laki-laki : perempuan.",

        errorCode: "E5",

        feedback:
            "Gunakan jumlah seluruh siswa dan rasio untuk menentukan nilai setiap bagian."
    },


    {
        id: "RM46",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Tiga kelompok memiliki rasio:\n\nKelompok A = 2 : 3\nKelompok B = 4 : 6\nKelompok C = 6 : 8",

        question:
            "Kelompok mana yang memiliki rasio setara dengan A?",

        options: [
            "A saja",
            "B saja",
            "C saja",
            "B dan C"
        ],

        answer: "B saja",

        explanation:
            "A = 2 : 3. B = 4 : 6 yang dapat disederhanakan menjadi 2 : 3. C = 6 : 8 menjadi 3 : 4.",

        errorCode: "E4",

        feedback:
            "Sederhanakan rasio setiap kelompok, lalu bandingkan bentuk sederhananya."
    },


    {
        id: "RM47",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Rasio buku cerita : buku pengetahuan = 3 : 5.",

        question:
            "Manakah yang tidak mungkin menunjukkan jumlah buku dengan rasio tersebut?",

        options: [
            "6 : 10",
            "9 : 15",
            "12 : 20",
            "15 : 20"
        ],

        answer: "15 : 20",

        explanation:
            "6 : 10, 9 : 15, dan 12 : 20 semuanya dapat disederhanakan menjadi 3 : 5. Sedangkan 15 : 20 menjadi 3 : 4.",

        errorCode: "E4",

        feedback:
            "Sederhanakan setiap pasangan untuk mengetahui mana yang memiliki rasio berbeda."
    },


    {
        id: "RM48",
        mission: "RM",
        missionName: "Ratio Master",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Banyak kotak : banyak pensil\n\n2 : 10\n4 : 20\n6 : ?",

        question:
            "Jika pola tetap, berapa pensil dalam 6 kotak?",

        options: [
            "25",
            "30",
            "35",
            "40"
        ],

        answer: "30",

        explanation:
            "Setiap 1 kotak berisi 5 pensil. Jadi 6 × 5 = 30 pensil.",

        errorCode: "E4",

        feedback:
            "Cari hubungan tetap antara jumlah kotak dan jumlah pensil."
    },


    {
        id: "RM49",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Campuran A: 2 merah + 3 putih\n\nCampuran B: 4 merah + 5 putih",

        question:
            "Apakah kedua campuran memiliki rasio merah : putih yang sama?",

        options: [
            "Ya",
            "Tidak",
            "Hanya jika ditambah merah",
            "Tidak dapat diketahui"
        ],

        answer: "Tidak",

        explanation:
            "Campuran A = 2 : 3. Campuran B = 4 : 5. Keduanya tidak dapat disederhanakan menjadi rasio yang sama.",

        errorCode: "E4",

        feedback:
            "A = 2 : 3. B = 4 : 5. Keduanya tidak dapat disederhanakan menjadi rasio yang sama."
    },


    {
        id: "RM50",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Rina mengatakan:\n\n'Rasio 5 : 8 lebih besar daripada 3 : 5 karena 5 lebih besar daripada 3.'",

        question:
            "Apakah alasan Rina sudah tepat?",

        options: [
            "Ya",
            "Tidak, kedua rasio harus dibandingkan sebagai hubungan",
            "Ya, karena bilangan pertama selalu menentukan",
            "Tidak, karena rasio tidak dapat dibandingkan"
        ],

        answer: "Tidak, kedua rasio harus dibandingkan sebagai hubungan",

        explanation:
            "Untuk membandingkan rasio, tidak cukup melihat satu angka. Perhatikan hubungan kedua bagian.",

        errorCode: "E5",

        feedback:
            "Untuk membandingkan rasio, tidak cukup melihat satu angka. Perhatikan hubungan kedua bagian."
    },


    {
        id: "RM51",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "3 : 4 = 6 : 8\n6 : 8 = 9 : 12\n\nJadi 3 : 4 = 9 : 12.",

        question:
            "Kesimpulan tersebut …",

        options: [
            "benar",
            "salah karena faktor pengalinya berbeda",
            "salah karena rasio tidak boleh diperbesar",
            "salah karena 9 harus menjadi 8"
        ],

        answer: "benar",

        explanation:
            "Benar. 3 : 4 dikali 3 menjadi 9 : 12.",

        errorCode: null,

        feedback:
            "Benar. 3 : 4 dikali 3 menjadi 9 : 12."
    },


    {
        id: "RM52",
        mission: "RM",
        missionName: "Ratio Master",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Perbandingan siswa laki-laki dan perempuan adalah 2 : 3. Jumlah seluruh siswa 25.",

        question:
            "Strategi yang paling tepat adalah …",

        options: [
            "25 ÷ 2",
            "25 ÷ 3",
            "25 ÷ (2 + 3), kemudian kalikan sesuai bagian",
            "25 × 2 × 3"
        ],

        answer: "25 ÷ (2 + 3), kemudian kalikan sesuai bagian",

        explanation:
            "Jumlah seluruh bagian = 2 + 3 = 5. Cari nilai satu bagian terlebih dahulu.",

        errorCode: "E5",

        feedback:
            "Jumlah seluruh bagian = 2 + 3 = 5. Cari nilai satu bagian terlebih dahulu."
    },


    // ========================================================
    // BOSS CHALLENGE
    // ========================================================

    {
        id: "BOSS53",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "7 bola merah dan 14 bola biru.",

        question:
            "Rasio merah : biru paling sederhana adalah …",

        options: [
            "1 : 2",
            "2 : 1",
            "7 : 14",
            "14 : 7"
        ],

        answer: "1 : 2",

        explanation:
            "7 : 14 dibagi 7 menjadi 1 : 2.",

        errorCode: null,

        feedback:
            "7 : 14 disederhanakan menjadi 1 : 2."
    },


    {
        id: "BOSS54",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "KU",
        type: "multiple_choice",

        stimulus:
            "🍪 🍪 🍪 🍪\n\n🥛 🥛",

        question:
            "Rasio kue terhadap susu adalah …",

        options: [
            "1 : 2",
            "2 : 1",
            "4 : 2",
            "2 : 4"
        ],

        answer: "4 : 2",

        explanation:
            "Ada 4 kue dan 2 susu. Karena yang dibandingkan kue terhadap susu, rasionya 4 : 2.",

        errorCode: null,

        feedback:
            "Hitung jumlah kue dan susu, lalu ikuti urutan yang diminta."
    },


    {
        id: "BOSS55",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Rasio 18 : 24 paling sederhana adalah …",

        options: [
            "2 : 3",
            "3 : 4",
            "4 : 3",
            "6 : 8"
        ],

        answer: "3 : 4",

        explanation:
            "18 dan 24 sama-sama dibagi 6 sehingga menjadi 3 : 4.",

        errorCode: null,

        feedback:
            "18 : 24 = 3 : 4."
    },


    {
        id: "BOSS56",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "KU",
        type: "multiple_choice",

        stimulus: "",

        question:
            "Pasangan yang senilai dengan 5 : 7 adalah …",

        options: [
            "10 : 14",
            "10 : 12",
            "15 : 20",
            "20 : 25"
        ],

        answer: "10 : 14",

        explanation:
            "5 : 7 dikalikan 2 menjadi 10 : 14.",

        errorCode: null,

        feedback:
            "Kedua bagian dikalikan dengan faktor yang sama."
    },


    {
        id: "BOSS57",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "A : B\n\n3 : 5\n6 : 10\n9 : ?",

        question:
            "Nilai yang tepat adalah …",

        options: [
            "12",
            "15",
            "18",
            "20"
        ],

        answer: "15",

        explanation:
            "3 : 5 dikalikan 3 menjadi 9 : 15.",

        errorCode: null,

        feedback:
            "Jika 3 menjadi 9, faktor pengalinya 3. Maka 5 × 3 = 15."
    },


    {
        id: "BOSS58",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Untuk membuat 4 roti diperlukan 2 butir telur.",

        question:
            "Berapa telur untuk membuat 12 roti?",

        options: [
            "4",
            "5",
            "6",
            "8"
        ],

        answer: "6",

        explanation:
            "4 roti menjadi 12 roti, berarti dikali 3. Telur juga dikali 3: 2 × 3 = 6.",

        errorCode: null,

        feedback:
            "Cari faktor perubahan jumlah roti, kemudian gunakan faktor yang sama."
    },


    {
        id: "BOSS59",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Sebuah kelas memiliki rasio laki-laki : perempuan = 3 : 4. Jumlah siswa laki-laki 15.",

        question:
            "Jumlah siswa perempuan adalah …",

        options: [
            "18",
            "20",
            "21",
            "24"
        ],

        answer: "20",

        explanation:
            "3 bagian = 15, sehingga 1 bagian = 5. Perempuan = 4 × 5 = 20.",

        errorCode: null,

        feedback:
            "3 bagian bernilai 15. Jadi 1 bagian = 5 dan 4 bagian = 20."
    },


    {
        id: "BOSS60",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "A",
        type: "multiple_choice",

        stimulus:
            "Campuran minuman menggunakan sirup : air = 1 : 4.\n\nJika digunakan 12 gelas air, berapa gelas sirup?",

        question:
            "Berapa gelas sirup?",

        options: [
            "2",
            "3",
            "4",
            "6"
        ],

        answer: "3",

        explanation:
            "4 bagian air = 12 gelas, sehingga 1 bagian = 3 gelas. Sirup = 3 gelas.",

        errorCode: null,

        feedback:
            "Jika 4 bagian air = 12 gelas, maka 1 bagian = 3 gelas."
    },


    {
        id: "BOSS61",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Kelas A memiliki 12 siswa laki-laki dan 18 perempuan.\n\nKelas B memiliki 10 siswa laki-laki dan 15 perempuan.",

        question:
            "Kelas mana yang memiliki rasio laki-laki : perempuan yang sama?",

        options: [
            "Kelas A saja",
            "Kelas B saja",
            "Kelas A dan B",
            "Tidak ada"
        ],

        answer: "Kelas A dan B",

        explanation:
            "Kelas A = 12 : 18 = 2 : 3. Kelas B = 10 : 15 = 2 : 3. Jadi keduanya memiliki rasio yang sama.",

        errorCode: null,

        feedback:
            "Kedua kelas memiliki rasio sederhana 2 : 3."
    },


    {
        id: "BOSS62",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Resep A: 3 tepung : 2 gula\n\nResep B: 6 tepung : 4 gula",

        question:
            "Pernyataan yang benar adalah …",

        options: [
            "hanya A yang memiliki rasio 3 : 2",
            "hanya B yang memiliki rasio 3 : 2",
            "keduanya memiliki rasio yang sama",
            "keduanya berbeda"
        ],

        answer: "keduanya memiliki rasio yang sama",

        explanation:
            "6 : 4 dapat disederhanakan dengan membagi 2 menjadi 3 : 2.",

        errorCode: null,

        feedback:
            "6 : 4 disederhanakan menjadi 3 : 2, sehingga kedua resep memiliki rasio yang sama."
    },


    {
        id: "BOSS63",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Doni menyelesaikan:\n\n4 : 6 = 4 : 12",

        question:
            "Bagian mana yang salah?",

        options: [
            "angka 4 pertama",
            "angka 6",
            "angka 12",
            "tidak ada kesalahan"
        ],

        answer: "angka 12",

        explanation:
            "Jika 6 dikali 2 menjadi 12, maka 4 juga harus dikali 2 menjadi 8. Jadi 4 : 6 = 8 : 12.",

        errorCode: null,

        feedback:
            "Jika 6 dikali 2 menjadi 12, maka 4 juga harus dikali 2 menjadi 8."
    },


    {
        id: "BOSS64",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Perbandingan jumlah buku Ani dan Beni adalah 3 : 5. Jumlah buku mereka 32.",

        question:
            "Berapa buku yang dimiliki Beni?",

        options: [
            "12",
            "15",
            "20",
            "25"
        ],

        answer: "20",

        explanation:
            "3 + 5 = 8 bagian. 32 ÷ 8 = 4. Beni = 5 × 4 = 20.",

        errorCode: null,

        feedback:
            "Jumlah bagian = 8. Nilai satu bagian = 32 ÷ 8 = 4. Beni memiliki 5 × 4 = 20 buku."
    },


    {
        id: "BOSS65",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Sebuah kelas membuat paket makanan dengan rasio:\n\nnasi : lauk : sayur = 4 : 2 : 1\n\nJika dibuat 3 kali lipat dari jumlah awal, rasio menjadi …",

        question:
            "Rasio yang benar adalah …",

        options: [
            "12 : 6 : 3",
            "4 : 6 : 3",
            "12 : 2 : 1",
            "7 : 3 : 1"
        ],

        answer: "12 : 6 : 3",

        explanation:
            "Semua bagian rasio dikalikan 3: 4 × 3 : 2 × 3 : 1 × 3 = 12 : 6 : 3.",

        errorCode: null,

        feedback:
            "Ketiga bagian harus dikalikan dengan faktor yang sama, yaitu 3."
    },


    {
        id: "BOSS66",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Rasio merah : biru = 2 : 5.\n\nJika merah = 8, maka biru = 20.\n\nRafi: 'Benar, karena 2 dikali 4 dan 5 juga dikali 4.'\n\nLala: 'Salah, karena 8 + 20 bukan 2 + 5.'",

        question:
            "Siapa yang memberikan alasan yang tepat?",

        options: [
            "Rafi",
            "Lala",
            "Keduanya",
            "Tidak ada"
        ],

        answer: "Rafi",

        explanation:
            "Rafi menggunakan faktor yang sama. 2 × 4 = 8 dan 5 × 4 = 20.",

        errorCode: "E4/E5",

        feedback:
            "Rafi menggunakan faktor yang sama. 2 × 4 = 8 dan 5 × 4 = 20."
    },


    {
        id: "BOSS67",
        mission: "BOSS",
        missionName: "Boss Challenge",
        level: "P",
        type: "multiple_choice",

        stimulus:
            "Panitia kelas membuat minuman untuk kegiatan sekolah.\n\nPerbandingan sirup dan air adalah 2 : 5.\n\nPanitia memiliki 20 gelas air.\n\nSetelah minuman dibuat, ternyata 4 gelas minuman tumpah.",

        question:
            "Berapa gelas minuman yang masih tersedia?",

        options: [
            "24 gelas",
            "26 gelas",
            "28 gelas",
            "30 gelas"
        ],

        answer: "24 gelas",

        explanation:
            "Rasio sirup : air = 2 : 5. Air 20 berarti dikali 4. Sirup = 2 × 4 = 8. Total awal = 20 + 8 = 28 gelas. Tumpah 4 gelas, sehingga tersisa 28 − 4 = 24 gelas.",

        errorCode: "E4/E5",

        feedback:
            "Tentukan jumlah sirup terlebih dahulu. Setelah mendapatkan total minuman, kurangi 4 gelas yang tumpah."
    }

];


// ============================================================
// PEMBAGIAN BANK SOAL
// ============================================================

const questionBanks = {

    PRETEST: questions.filter(q => q.mission === "PRETEST"),

    RD: questions.filter(q => q.mission === "RD"),

    RB: questions.filter(q => q.mission === "RB"),

    RBR: questions.filter(q => q.mission === "RBR"),

    RRL: questions.filter(q => q.mission === "RRL"),

    RM: questions.filter(q => q.mission === "RM"),

    BOSS: questions.filter(q => q.mission === "BOSS")

};


// ============================================================
// INFORMASI MISI
// ============================================================

const missionInfo = {

    PRETEST: {
        title: "Pretest",
        subtitle: "Starting Point",
        icon: "🔎",
        description: "Lihat kemampuan awalmu tentang perbandingan."
    },

    RD: {
        title: "Ratio Detective",
        subtitle: "Mission 01",
        icon: "🕵️",
        description: "Temukan dan baca perbandingan dengan tepat."
    },

    RB: {
        title: "Ratio Builder",
        subtitle: "Mission 02",
        icon: "🧱",
        description: "Bangun perbandingan dalam bentuk sederhana."
    },

    RBR: {
        title: "Ratio Bridge",
        subtitle: "Mission 03",
        icon: "🌉",
        description: "Temukan dan gunakan rasio yang ekuivalen."
    },

    RRL: {
        title: "Ratio in Real Life",
        subtitle: "Mission 04",
        icon: "🥗",
        description: "Gunakan perbandingan dalam kehidupan sehari-hari."
    },

    RM: {
        title: "Ratio Master",
        subtitle: "Mission 05",
        icon: "🧠",
        description: "Gunakan penalaran untuk memecahkan masalah."
    },

    BOSS: {
        title: "Boss Challenge",
        subtitle: "Final Assessment",
        icon: "👑",
        description: "Buktikan penguasaanmu tanpa bantuan."
    }

};


// ============================================================
// FUNGSI HELPER
// ============================================================

function getQuestionsByMission(mission) {

    return questionBanks[mission] || [];

}


function getQuestionById(id) {

    return questions.find(q => q.id === id);

}


function getMissionInfo(mission) {

    return missionInfo[mission] || null;

}


// ============================================================
// EKSPOR KE WINDOW
// Digunakan oleh script.js
// ============================================================

window.RATIO_QUESTIONS = questions;

window.RATIO_QUESTION_BANKS = questionBanks;

window.RATIO_MISSION_INFO = missionInfo;

window.getQuestionsByMission = getQuestionsByMission;

window.getQuestionById = getQuestionById;

window.getMissionInfo = getMissionInfo;


// ============================================================
// INFORMASI BANK
// ============================================================

console.log(
    "MATH MISSION — RATIO QUEST"
);

console.log(
    "Total soal:",
    questions.length
);

console.log(
    "Pretest:",
    questionBanks.PRETEST.length
);

console.log(
    "Ratio Detective:",
    questionBanks.RD.length
);

console.log(
    "Ratio Builder:",
    questionBanks.RB.length
);

console.log(
    "Ratio Bridge:",
    questionBanks.RBR.length
);

console.log(
    "Ratio in Real Life:",
    questionBanks.RRL.length
);

console.log(
    "Ratio Master:",
    questionBanks.RM.length
);

console.log(
    "Boss Challenge:",
    questionBanks.BOSS.length
);
