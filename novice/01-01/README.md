## 01-01

Judul : Ekosistem dan Pemograman Dasar JavaScript

Oleh    : Aulia Putri Utami

Tanggal : 02 Maret 2020

**Rangkuman Materi**

- Bahasa Pemograman

Bahasa pemrograman, atau sering diistilahkan juga dengan bahasa komputer atau bahasa pemrograman komputer, adalah instruksi standar untuk memerintah komputer. Bahasa pemrograman ini merupakan suatu himpunan dari aturan sintaks dan semantik yang dipakai untuk mendefinisikan program komputer. Bahasa ini memungkinkan seorang programmer dapat menentukan secara persis data mana yang akan diolah oleh komputer, bagaimana data ini akan disimpan/diteruskan, dan jenis langkah apa yang akan diambil dalam berbagai situasi secara persis.
Menurut tingkat kedekatannya dengan mesin komputer, bahasa pemrograman terdiri dari:
1. Bahasa Mesin, yaitu memberikan perintah kepada komputer dengan memakai kode bahasa biner, contohnya 01100101100110
2. Bahasa Tingkat Rendah, atau dikenal dengan istilah bahasa rakitan (bah.Inggris Assembly), yaitu memberikan perintah kepada komputer dengan memakai kode-kode singkat (kode mnemonic), contohnya kode_mesin|MOV, SUB, CMP, JMP, JGE, JL, LOOP, dsb.
3. Bahasa Tingkat Menengah, yaitu bahasa komputer yang memakai campuran instruksi dalam kata-kata bahasa manusia (lihat contoh Bahasa Tingkat Tinggi di bawah) dan instruksi yang bersifat simbolik, contohnya {, }, ?, <<, >>, &&, ||, dsb.
4. Bahasa Tingkat Tinggi, yaitu bahasa komputer yang memakai instruksi berasal dari unsur kata-kata bahasa manusia, contohnya begin, end, if, for, while, and, or, dsb. Komputer dapat mengerti bahasa manusia itu diperlukan program compiler atau interpreter.

- Interpreter dan Compiler

Interpreter adalah perangkat lunak yang mampu mengeksekusi code program (yang ditulis oleh programmer) lalu menterjemahkannya ke dalam bahasa mesin, sehingga mesin melakukan instruksi yang diminta oleh programmer tersebut. Perintah-perintah yang dibuat oleh programmer tersebut dieksekusi baris demi baris, sambil mengikuti logika yang terdapat di dalam kode tersebut. Sedangkan compiler adalah program sistem yang digunakan sebagai alat bantu dalam pemrogaman. Perangkat lunak yang melakukan proses penterjemahan code (yang dibuat programmer) ke dalam bahasa mesin. Hasil dari terjemahan ini adalah bahasa mesin. Pada beberapa compiler, output berupa bahasa mesin dilaksanakan dengan proses assembler yang berbeda.

Perbedaan antara Compiler dengan Interpreter
1. Jika hendak menjalankan program hasil kompilasi dapat dilakukan tanpa butuh kode sumber. Kalau interpreter butuh kode sumber.
2. Jika dengan kompiler, maka pembuatan kode yang bisa dijalankan mesin dilakukan dalam 2 tahap terpisah, yaitu parsing ( pembuatan kode objek ) dan linking ( penggabungan kode objek dengan library ) . Kalau interpreter tidak ada proses terpisah.
3. JIka compiler membutuhkan linker untuk menggabungkan kode objek dengan berbagai macam library demi menghasilkan suatu kode yang bisa dijalankan oleh mesin. Kalau interpreter tidak butuh linker untuk menggabungkan kode objek dengan berbagai macam library.
4. Interpreter cocok untuk membuat / menguji coba modul ( sub-routine / program-program kecil ). Maka compiler agak repot karena untuk mengubah suatu modul / kode objek kecil, maka harus dilakukan proses linking / penggabungan kembali semua objek dengan library yang diperlukan.
5. Pada kompiler bisa dilakukan optimisasi / peningkatan kualitas kode yang bisa dijalankan. Ada yang dioptimasi supaya lebih cepat, ada yang supaya lebih kecil, ada yang dioptimasi untuk sistem dengan banyak processor. Kalau interpreter susah atau bahkan tidak bisa dioptimasikan.

-ECMAScript (ES)

ECMAScript adalah spesifikasi bahasa scripting yang distandarisasi oleh Ecma International. ECMAScript dibuat untuk membakukan JavaScript untuk membantu mendorong beberapa implementasi independen. JavaScript tetap menjadi implementasi ECMAScript yang paling banyak digunakan sejak standar pertama kali diterbitkan, dengan implementasi lainnya termasuk JScript dan ActionScript. ECMAScript biasanya digunakan untuk skrip sisi klien di World Wide Web dan semakin banyak digunakan untuk menulis aplikasi dan layanan server menggunakan Node.js.

**Isi Repositori**

Repositori terdiri dari 2 folder, yaitu **Latihan** dan **Kasus**. Kedua folder tersebut berisikan hasil pekerjaan latihan dan kasus yang terlah diselesaikan.
