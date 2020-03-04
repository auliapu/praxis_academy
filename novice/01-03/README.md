 ## 01-03
 
 Judul : Function / Fungsi di JavaScript
 
 Oleh : Aulia Putri Utami
 
 Tanggal : 04 Maret 2020
 
 Ringkasan Materi :
 - Function
    Fungsi adalah subprogram yang dirancang untuk melakukan tugas tertentu. Fungsi dijalankan ketika mereka dipanggil. Nilai dapat diteruskan ke fungsi dan digunakan di dalam fungsi. Fungsi selalu mengembalikan nilai. Dalam JavaScript, jika tidak ada nilai kembali yang ditentukan, fungsi tersebut akan kembali tidak terdefinisi.

**Deklarasi Fungsi** mendefinisikan fungsi yang memiliki nama. Untuk membuat pernyataan fungsi. Saat menggunakan deklarasi fungsi, definisi fungsi diangkat, sehingga memungkinkan fungsi untuk digunakan sebelum didefinisikan.

        function name(parameters){
        statements
        }

**Function Expressions** mendefinisikan fungsi bernama atau anonim. Fungsi anonim adalah fungsi yang tidak memiliki nama. Ekspresi Fungsi tidak diangkat, dan karena itu tidak dapat digunakan sebelum didefinisikan. Dalam contoh di bawah ini, kami menetapkan objek fungsi anonim sama dengan variabel.

        let name = function(parameters){
        statements
        }

Perbedaan parameter dengan argument

- parameter
Parameter digunakan ketika mendefinisikan suatu fungsi, mereka adalah nama yang dibuat dalam definisi fungsi.

- argument
Argumen, di sisi lain, adalah nilai yang diterima fungsi dari setiap parameter ketika fungsi dieksekusi (dipanggil). Contohnya true dan false.

Kata kunci fungsi, bila digunakan sebagai ekspresi, dapat membuat nilai fungsi. Ketika digunakan sebagai statement, statement tersebut dapat digunakan untuk mendeklarasikan ikatan dan memberinya fungsi sebagai nilainya. Arrow function adalah cara lain untuk membuat fungsi.

- Ruang Lingkup Variabel

JavaScript adalah bahasa yang sangat berorientasi fungsi. Ini memberi kita banyak kebebasan. Suatu fungsi dapat dibuat secara dinamis, diteruskan sebagai argumen ke fungsi lain dan dipanggil dari tempat kode yang sama sekali berbeda di kemudian hari. Dalam JavaScript, ada 3 cara untuk mendeklarasikan variabel: let, const (yang modern), dan var (sisa-sisa masa lalu).

- Function Generation 

Generator adalah fungsi yang dapat keluar dan kemudian dimasukkan kembali. Konteksnya (binding variabel) akan disimpan di seluruh pintu masuk. Generator dalam JavaScript terutama bila dikombinasikan dengan Promise adalah alat yang sangat kuat untuk pemrograman asinkron saat mereka memitigasi - jika tidak sepenuhnya menghilangkan - masalah dengan callback, seperti Callback Hell dan Inversion of Control. Namun, solusi yang lebih sederhana untuk masalah ini dapat dicapai dengan function async.

        function* name([param[, param[, ... param]]]) {
        statements
        }

- Arrow Function

Arrow function diperkenalkan dalam ES6, function ini menyediakan cara ringkas untuk menulis fungsi dalam JavaScript. Contoh :

Tanpa menggunakan arrow function

    hello = function() {
        return "Hello World!";
    }

Dengan menggunakan arrow function

    hello = () => {
    return "Hello World!";
    }
    
- Variable Hoisting

Variable hoisting adalah perilaku dalam JavaScript di mana deklarasi variabel dipindahkan ke bagian atas lingkup (lingkup fungsi atau lingkup global) di mana variabel tersebut didefinisikan. Variabel JavaScript khas dapat dibuat dalam dua tahap - deklarasi dan inisialisasi.

**Deklarasi JavaScript are Hoisted**
Dalam JavaScript, sebuah variabel dapat dideklarasikan setelah digunakan. Dengan kata lain, variabel dapat digunakan sebelum dideklarasikan. Contoh :

        x = 5; 

        elem = document.getElementById("demo"); 
        elem.innerHTML = x;                     

        var x; // Deklarasi x

**Inisialisasi JavaScript Not Hoisted**
JavaScript hanya mengangkat deklarasi, bukan inisialisasi.        

Isi Repositori : 

Repositor berisi direktori latihan dan kasus untuk pertemuan minggu pertama hari ketiga, dan file README.md yang berisikan ringkasan materi.
