## 03-02

Judul :

Oleh : Aulia Putri Utami

Tanggal : 18 Maret 2020

Ringkasan Materi :

- Pengertian API

  Application Programming Interfaces (APIs) adalah konstruksi yang tersedia dalam bahasa pemograman untuk memungkinkan developer membuat fungsionalitas kompleks lebih mudah.

- APIs di client-side JavaScript

  Client-side Javascript, khususnya memiliki banyak APIs yang tersedia yang memberikan kekuatan tambahan untuk digunakan dalam kode JavaScript para programmer. Terbagi dalam dua kategori :

  - Browser APIs

    Browser APIs dibuat di dalam web browser dan dapat mengekspos data dari browser dan lingkungan komputer serta melakukan hal-hal rumit yang berguna. Contohnya, Web Audio API menyediakan konstruksi JavaScript untuk memanipulasi audio di browser (mengambil trek audio, mengubah volume, menerapkan efek, dll). Terdapat beberapa dari kategori Browser API :

    - API untuk memanipulasi dokumen
      
      APIs untuk memanipulasi dokumen yang dimuat dimuat ke browser.Contohnya, yaitu API DOM (Document Object Model) yang memungkinkan memanipulasi HTML dan CSS (membuat, menghapus, dan mengedit HTML, dll). Muncul tampilan konten maupun popup dari HTML, itulah DOM yang sedang bekerja.
    
    - API yang mengambil data dari server

      API yang mengambil data dari server untuk meperbarui bagian-bagian tertentu dari halaman web . Misalnya jika ingin memperbarui stok baru tidak perlu memuat seluruh halaman server sehingga web jauh lebih responsif.

    - API untuk menggambar dan memanipulasi grafik

      API untuk menggambar dan memanipulasi grafik sekarang banyak didukung di browser dan yang paling populer adalah Canvas dan WebGL.Canvas dan WebGL memungkinkan progammer memperbarui data piksel yang terkandung dalam elemen HTML <canvas> untuk membuat adegan 2D dan 3D. Misalnya, menggambar bentuk seperti persegi panjang atau lingkaran, mengimpor gambar ke kanvas, dan menerapkan filter seperti sepia atau grayscale menggunakan Canvas API, atau membuat adegan 3D kompleks dengan pencahayaan dan tekstur menggunakan WebGL. API semacam itu sering dikombinasikan dengan API untuk membuat loop animasi (seperti window.requestAnimationFrame ()) dan lainnya untuk membuat adegan yang terus diperbarui seperti kartun dan game.

    - API Audio dan Video

      API Audio dan Video seperti HTMLMediaElement, Web Audio API, dan WebRTC memungkinkan untuk melakukan hal-hal yang sangat menarik dengan multimedia, seperti membuat kontrol UI khusus untuk memutar audio dan video, menampilkan trek teks seperti teks dan subtitle bersama dengan video, mengambil video dari kamera web yang akan dimanipulasi melalui Canvas atau ditampilkan di komputer orang lain dalam konferensi web, atau menambahkan efek ke trek audio (seperti gain, distorsi, panning, dll).

    - Device API
      
      API Device pada dasarnya adalah API untuk memanipulasi dan mengambil data dari perangkat keras perangkat modern dengan cara yang berguna untuk aplikasi web. Contohnya termasuk memberi tahu pengguna bahwa pembaruan yang bermanfaat tersedia di aplikasi web melalui pemberitahuan sistem atau perangkat keras getaran.

    - API Penyimpanan Client-side

      API penyimpanan client-side menjadi jauh lebih tersebar luas di browser web. Kemampuan untuk menyimpan data di sisi klien sangat berguna jika ingin membuat aplikasi yang akan menyimpan keadaannya di antara pemuatan halaman, dan mungkin bahkan bekerja ketika perangkat sedang offline. Ada sejumlah opsi yang tersedia, mis. penyimpanan nama/nilai sederhana dengan API Penyimpanan Web, dan penyimpanan data tabular yang lebih kompleks dengan API IndexedDB.

  - Third-party APIs

    Third-party APIs tidak dibangun di browser secara default, biasanya harus mengambil kode dan informasinya dari suatu web. Misalnya, Twitter API memungkinkan dapat melakukan hal-hal seperti menampilkan tweet terbaru di situs web seseorang. Twitter APIs memberikan satu set konstruksi khusus yang dapat digunakan untuk menanyakan layanan Twitter dan mengembalikan informasi spesifik. Terdapat beberapa dari kategori third-party API :

    - Twitter API, yang dimungkinkan untuk melakukan hal-hal seperti menampilkan tweet terbaru pengguna di situs web tersebut.

    - API Peta, seperti Mapquest dan Google Maps API memungkinkan untuk melakukan segala hal dengan peta di halaman web user.
    
    - API Facebook, memungkinkan user untuk menggunakan berbagai bagian ekosistem Facebook untuk menguntungkan aplikasi user, misalnya dengan memberikan login aplikasi menggunakan login Facebook, menerima pembayaran dalam aplikasi, meluncurkan kampanye iklan yang ditargetkan, dll.
   
    - API Telegram, memungkinkan user untuk menyematkan konten dari saluran Telegram di situs web user, selain memberikan dukungan untuk bot.
   
    - YouTube API, yang memungkinkan user untuk menyematkan video YouTube di situs user, mencari YouTube, membuat daftar putar, dan banyak lagi.
    
    - Pinterest API. menyediakan alat untuk mengelola papan dan pin Pinterest untuk memasukkannya ke dalam situs web user.
    
    - Twilio API, yang menyediakan kerangka kerja untuk membangun fungsi panggilan suara dan video ke dalam aplikasi user, mengirim SMS / MMS dari aplikasi, dan banyak lagi.
   
    - Mastodon API, memungkinkan user untuk memanipulasi fitur-fitur jejaring sosial Mastodon secara terprogram.

