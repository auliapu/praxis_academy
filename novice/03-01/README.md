## 03-01

Judul : **Error Handling**

Oleh : Aulia Putri Utami

Tanggal : 17 Maret 2020

Ringkasan Materi :

- Kategori Error

  Error pada JavaScript dapat dibagi menjadi dua kategori, yaitu masalah aktual dan kesalahan programmer. 
  
  - Masalah aktual 
    
    Masalah aktual adalah peristiwa yang tidak dapat dicegah oleh programmer. Misalnya, sebuah program yang meminta pengguna untuk memasukkan nama dan itu akan mengembalikan string kosong.

  - Kesalahan programmer 
    
    Kesalahan programmer adalah kesalahan yang dilakukan oleh programmer saat menulis program. Mereka dapat dibagi lagi menjadi:

    - Syntax Error
      
      Syntax error adalah jenis kesalahan paling mendasar, juga dikenal sebagai kesalahan parsing. Syntax error terjadi pada waktu kompilasi dalam bahasa pemrograman tradisional dan waktu interpretasi dalam JavaScript. Contoh :

                var x = 2;
                var y = 3;
                console.log(x + y;

      Pada contoh di atas, baris kode terakhir akan menyebabkan syntax error karena tidak ada tutup kurung. 

    - Runtime Error

      Runtime error juga dikenal sebagai pengecualian, kesalahan semacam ini terjadi ketika program Anda dieksekusi, biasanya ketika telah dikompilasi atau ditafsirkan. Pertimbangkan blok kode di bawah ini:

              var windowObject;
              var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
              
              function openPopup() {
            
                  windowObject = window.openObject("http://www.bbc.com/", "BBC_WindowName", strWindowFeatures);
              }

      Fungsi di atas akan menyebabkan kesalahan runtime karena walaupun sintaksinya benar, pada saat runtime ia mencoba memanggil metode openObject () yang tidak ada.

    - Logical Error

      Yang paling kompleks dari ketiga kesalahan, kesalahan logis terjadi ketika programmer membuat kesalahan atau cacat dalam logika yang mengontrol skrip program. Kesalahan ini menyebabkan program mengubah output yang diharapkan atau menunjukkan perilaku yang tidak terduga. Biasanya sangat sulit mencoba menangkap dan bahkan memperbaiki kesalahan logis.
    
- Cara dan Metode untuk Menangani Error

  - try...catch...finally

    Pernyataan try...catch...finally menandai blok pernyataan untuk dijalankan dalam kode dan menentukan respons jika ada pengecualian. Pernyataan ini memungkinkan untuk menangkap kesalahan logic dan runtime tetapi tidak pada syntax error.

            try {
                // attempt to execute this code
            } catch (exception) {
                // this code handles exceptions
            } finally {
                // this code always gets executed
            }

  - throw

    throw statement digunakan untuk menghasilkan pengecualian yang ditentukan pengguna. Selama runtime, ketika Throw statement ditemui, eksekusi fungsi saat ini akan berhenti dan kontrol akan diteruskan ke klausa tangkapan pertama dalam tumpukan panggilan. Jika tidak ada klausa tangkap, program akan berakhir.

  - onerror()

    Metode onerror () adalah pengendali event pertama untuk memfasilitasi dan menangani kesalahan dalam JavaScript. Ini sering digunakan dengan sintaks window.onerror. Ini memungkinkan peristiwa kesalahan untuk ditembakkan pada window object setiap kali kesalahan terjadi selama runtime.

  - Call Stack Property
    
    **stack** properti adalah fitur dalam objek Kesalahan JavaScript. Ia menawarkan jejak fungsi yang dipanggil, dalam urutan apa, dari baris dan file mana dan dengan argumen apa, melanjutkan dari panggilan terbaru ke yang sebelumnya sampai ke panggilan ruang lingkup global asli.

- Custom Error

  Ketika kita mengembangkan sesuatu, kita sering membutuhkan kelas kesalahan kita sendiri untuk mencerminkan hal-hal tertentu yang mungkin salah dalam tugas kita. Untuk kesalahan dalam operasi jaringan kita mungkin perlu HttpError, untuk operasi database DbError, untuk mencari operasi NotFoundError dan sebagainya. Kesalahan kami harus mendukung properti kesalahan dasar seperti pesan, nama dan stack. Tetapi mereka juga mungkin memiliki properti lain, misalnya Objek HttpError mungkin memiliki properti statusCode dengan nilai seperti 404 atau 403 atau 500.

- Latihan 1

  try ... catch digunakan untuk mengatasi kesalahan penulisan pada program.

  retrhowing digunakan tidak hanya untuk kesalahan data, tetapi dapat menghasilkan pesan error untuk kesalahan programming seperti variabel tidak terdefinisikan.  teknik rehrowing dapat dijelaskan lebih detail seperti berikut :
    1. catch mendapatkan semua error.
    2. di **Catch(err) {...}** block menganalisis error objek **err**
    3. Jika tidak tahu cara mengatasinya, dapat menggunakan **throw err** 
