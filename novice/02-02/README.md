## 02-02

Judul : Paradigma Pemrograman di JavaScript: OOP (2)

Oleh : Aulia Putri Utami

Tanggal : 11 Maret 2020

Rangkuman Materi :

- Definisi Class
  
  Class di JavaScript pertama kali diperkenalkan pada ECMAScript 6 seperti pelengkap dari portotype-based JavaScirpt yang sudah ada.  Class seperti fungsi khusus yang dapat dideklarasikan function expression dan function declaration, sintak class memiliki dua komponen: class expression dan class declaration.

  - Class Declaration
    
    Salah satu cara untuk mendefinisikan kelas adalah dengan menggunakan class declaration / deklarasi kelas. Untuk mendeklarasikan kelas, dapat menggunakan kata kunci class.

    - Hoisting

      Perbedaan penting antara deklarasi fungsi (function declarations) dan deklarasi kelas (class declarations) adalah deklarasi fungsi  hoisted dan deklarasi class tidak hoisted.

  - Class Expression
  
    Ekspresi kelas (class expression) adalah cara lain untuk mendefinisikan sebuah class. Class expression bisa bernama ataupun tidak. Nama yang diberikan berbentuk lokal berada di body class.

  - Konstruktor
    
    Konstruktor adalah metode (method) khusus untuk membuat dan inisialisasi sebuah objek yang dibuat dengan class. Hanya ada satu metode khusus dengan nama "konstruktor" di kelas. Sebuah SyntaxError akan tampil jika kelas berisi lebih dari satu method constructor Sebuah konstruktor dapat digunakan keyword super untuk memanggil kostruktor dari kelas parent nya.

  - Metode Statis
    
    Kata kunci statis mendefinisikan metode statis untuk suatu kelas. Metode statis dipanggil tanpa membuat instance kelasnya dan tidak bisa dipanggil ketika kelas tersebut dipakai. Metode statis sering digunakan untuk membuat fungsi utilitas untuk suatu aplikasi.

- Prototipe

  Ketika suatu fungsi dibuat dalam JavaScript, mesin JavaScript menambahkan properti prototipe ke fungsi. Properti prototipe ini adalah objek (disebut sebagai objek prototipe) yang memiliki properti konstruktor secara default. Properti konstruktor menunjuk kembali ke fungsi di mana objek prototipe adalah properti. Kami dapat mengakses properti prototipe fungsi menggunakan functionName.prototype.