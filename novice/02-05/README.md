## 02-05

Judul : JavaScript Modules

Oleh : Aulia Putri Utami

Tanggal : 16 Maret 2020

Ringkasan Materi : 

**Modules**
  
  Moduleses hanyalah sebuah file. Satu skrip adalah satu modules.
  Modules dapat memuat satu sama lain dan menggunakan arahan khusus ekspor dan impor untuk fungsi pertukaran, fungsi panggilan dari satu modules dari yang lain:
  
    - ekspor kata kunci label variabel dan fungsi yang harus dapat diakses dari luar modules saat ini.
    
    - impor memungkinkan impor fungsionalitas dari modules lain.

  Misalnya, jika kita memiliki file sayHi.js yang mengekspor fungsi:

        // 📁 sayHi.js
        export function sayHi(user) {
            alert(`Hello, ${user}!`);
        }

  Kemudian file lainnya memungkinkan import dan menggunakannya :

        // 📁 main.js
        import {sayHi} from './sayHi.js';
        alert(sayHi); // function...
        sayHi('John'); // Hello, John!

  Karena modules mendukung kata kunci dan fitur khusus, kita harus memberi tahu browser bahwa skrip harus diperlakukan sebagai modules, dengan menggunakan atribut 
  
        <script type = "modules">

  Misalnya :

        <!doctype html>
        <script type="moduleses">
        import {sayHi} from './say.js';
        document.body.innerHTML = sayHi('John');
        </script>

  Lalu jalankan script html di browser, maka browser secara otomatis mengambil dan mengevaluasi modules yang diimpor (dan impornya jika diperlukan), dan kemudian menjalankan skrip dengan output muncul alert **Hello, John!**.

 
