##02-03

Judul : Paradigma Pemrograman di JavaScript: Functional Programming

Oleh : Aulia Putri Utami

Tanggal : 12 Maret 2020

Ringkasan Materi :

- Functional Programming

  Pemrograman fungsional (sering disingkat FP) adalah proses membangun perangkat lunak dengan menyusun pure function, menghindari keadaan bersama, data yang dapat diubah, dan efek samping. Pemrograman fungsional bersifat deklaratif daripada imperatif, dan keadaan aplikasi mengalir melalui pure function. Berbeda dengan pemrograman berorientasi objek, di mana keadaan aplikasi biasanya dibagi dan dikolokasi dengan metode dalam objek. Pemrograman fungsional adalah paradigma pemrograman, yang berarti bahwa itu adalah cara berpikir tentang pembangunan perangkat lunak berdasarkan pada beberapa prinsip mendasar yang mendefinisikan. Contoh lain dari paradigma pemrograman termasuk pemrograman berorientasi objek dan pemrograman prosedural.

  Dalam ilmu komputer, pemrograman fungsional adalah paradigma atau pola pemrograman (gaya membangun struktur dan elemen program komputer).
    - Pemrograman Fungsional memperlakukan komputasi sebagai evaluasi fungsi  matematika.
    - Pemrograman Fungsional menghindari perubahan-status dan data yang bisa berubah.

- Side Effect

  Efek samping adalah setiap perubahan status aplikasi yang dapat diamati di luar fungsi yang dipanggil selain nilai kembalinya. Efek samping termasuk:
    - Mengubah variabel eksternal atau properti objek apa pun (mis., Variabel global, atau variabel dalam rantai lingkup fungsi induk)
    - Masuk ke konsol
    - Menulis ke layar
    - Menulis ke file
    - Menulis ke jaringan
    - Memicu segala proses eksternal
    - Memanggil fungsi lain dengan efek samping

  Efek samping sebagian besar dihindari dalam pemrograman fungsional, yang membuat efek suatu program lebih mudah dipahami, dan lebih mudah untuk diuji.

- Immutable

  Objek immutable adalah objek yang tidak dapat dimodifikasi setelah dibuat. Sebaliknya, mutable adalah objek apa pun yang dapat dimodifikasi setelah dibuat. Immutable adalah konsep sentral pemrograman fungsional karena tanpa itu, aliran data dalam program Anda menjadi hilang. Riwayat negara ditinggalkan, dan bug aneh dapat menyusup ke perangkat lunak Anda.

- Higher Order Functions

  Fungsi yang menerima fungsi sebagai argumen atau mengembalikan fungsi disebut Fungsi Orde Tinggi. Contoh di standar library JavaScript termasuk Array.map (), Array.filter () dan Array.reduce (), yang akan kita lihat sedikit.

- Rekursi

  Rekursi adalah topik utama dalam pemrograman fungsional. ketika suatu fungsi memanggil dirinya sendiri, itu disebut fungsi rekursif. Contoh klasik rekursi adalah perhitungan urutan Fibonacci (N = (N-1 + N-2)), di sini dalam solusi 2 ^ N yang benar-benar tidak efisien (tapi enak dibaca):

        var f = (n) => n <= 1? 1: f (n-1) + f (n-2)

- Currying

  Currying adalah proses dalam pemrograman fungsional di mana kita dapat mengubah suatu fungsi dengan beberapa argumen menjadi urutan nesting function. Ini mengembalikan fungsi baru yang mengharapkan argumen inline berikutnya. Itu terus mengembalikan fungsi baru (yang mengharapkan argumen saat ini, seperti yang kami katakan sebelumnya) sampai semua argumen habis. Argumen tetap "hidup" (melalui penutupan) dan semua digunakan dalam eksekusi ketika fungsi akhir dalam rantai kari dikembalikan dan dieksekusi.