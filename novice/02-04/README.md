## 02-04

Judul : Asynchronous Programming di JavaScript

Oleh : Aulia Putri Utami

Tanggal : 12 Maret 2020

- Asynchronous Programming

  Dalam ilmu komputer, asynchronous I/O (juga non-sequential I/O) adalah bentuk pemrosesan input atau output yang memungkinkan pemrosesan lain untuk melanjutkan sebelum transmisi selesai. Pendekatan sederhana untuk I/O adalah memulai akses dan kemudian menunggu sampai selesai. 

    - single-threated : Jika sedang mengerjakan beberapa task, maka JavaScipt akan memulai proses pada task pertama lalu belum selesai mengerjakan task pertama, proses akan berpindah thread untuk mengerjakan task kedua dan seterusnya akan berpindah thread hingga task pertama selesai dan task lainnya juga selesai dikerjakan (konkuren).

    - multi-threaded : asynchronous multi-thread dapat  mengerjakan semua task di beberapa thread secara bersama-sama (paralel)
  
  - Perbedaan syncronous dengan asynchronous :
  
    Dalam eksepusi synchronous, biasanya akan mengeksekusi kode program secara berurutan sedangkan asynchronous mengeksekusi kode program tidak berjalan secara berurutan. Contoh :
    
    Synchronous: 1,2,3

            alert(1);
            alert(2);
            alert(3);

    Outputnya secara berurutan yaitu muncul alert 1, 2, 3.

    Asynchronous: 1,3,2

            alert(1);
            setTimeout(() => alert(2), 5000);
            alert(3);

    Sementara dalam operasi asynchronous **alert(2)** (dinamakan callback) dieksekusi paling akhir karena menunggu 5 detik. Selama menunggu 5 detik, proses akan pindah terlebih dahulu ke thread alert(3) dan menampilkan hasilnya. Setelah 5 detik, maka alert(2) akan muncul, sehingga jika dijalankan maka muncul alert 1, 3, 2.


- Blocking vs non-blocking

  Blocking : jika satu task yang dikerjakan menunggu lama dalam memprosesnya, maka harus menunggu proses tersebut hingga selesai. Jika telah selesai maka dapat menuju task yang kedua.

  Non-blocking : jika mengerjekan suatu task namun proses dari task tersebut belum selesai, maka tetap dapat melanjutkan ke task yang kedua dan seterusnya sehingga tidak perlu menunggu proses dari task sebelumnya selesai.

- Callback 

  Callback yaitu function yang biasanya digunakan untuk men-delay proses tertentu, yang dimana hasil proses tersebut membutuhkan waktu tertentu untuk menampilkan outputnya. 

  Pengertian Callback secara umum :

  - function yang dikirimkan sebagai parameter pada function yang lain. 
  - function yang dieksekusi setelah fungsi lain selesai dijalankan.

- Promise

  Promise umumnya digunakan sebagai alternatif *callback*, promise akan selalu berjalan pada asynchronous dan tidak dapat berjalan di synchronous.
  Promise memiliki 3 kemungkinan state :
  - Pending (sedang dalam proses)
  - Fulfilled (berhasil)
  - Rejected (gagal)

  Promise yang pending dapat berhasil (fullfilled) dengan hasil value atau gagal (rejected) dengan alasan error/terjadi kesalahan. Ketika salah satu dari ketiga tersebut terjadi, penanganan yang terkait antri dengan metode promise kemudian dipanggil. 

  - Async dan Await

    Async/Await adalh salah satu cara untuk mengatasi asynchronous pada JavaScript selain menggunakan *callback* dan *promise*, Async/Await tidak dapat berdiri tanpa adanya Promise. 
