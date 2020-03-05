## 01-04

Judul : String dan Regular Expression

Oleh : Aulia Putri Utami

Tanggal : 5 Maret 2020

Ringkasan Materi :

- String
 
  Tipe String pada JavaScript digunakan untuk merepresentasikan data tekstual. String adalah satu set "elemen" dari nilai integer 16-bit unsigned (unit kode UTF-16). Setiap elemen dalam String menempati posisi dalam String. Elemen pertama adalah pada indeks 0, selanjutnya pada indeks 1, dan seterusnya. Panjang suatu String adalah jumlah elemen di dalamnya. Terdapa dua jenis string, yaitu string literal atau objek string.
	1. String literal
	   contoh : membuat quotes dengan petik satu atau petik dua.
	   **"foe"**
	   **'bar'**
	2. String Objek   
	   String objek adalah pembungkus di sekitar tipe data primitif string. Pada nilai literal string memanggil salah satu metode objek String  — JavaScript secara otomatis mengubah string literal menjadi objek String sementara, memanggil metode tersebut, lalu membuang String objek sementara. Anda juga bisa menggunakan properti String.length dengan string literal. String Objek memiliki beragam metode: misalnya metode yang mengembalikan variasi pada string itu sendiri, seperti substring dan toUpperCase. 

- Reguler Expression
 
  Reguler Expression adalah pola yang digunakan untuk mencocokkan kombinasi karakter dalam string. Dalam JavaScript, Reguler Expression juga merupakan objek. Pola-pola ini digunakan dengan metode exec () dan test () dari RegExp, dan dengan match (), matchAll (), ganti (), search (), dan split () metode String. 

	* Menulis pola ekspresi reguler
	  
	  Pola ekspresi reguler terdiri dari karakter sederhana, seperti / abc /, atau kombinasi karakter sederhana dan khusus, seperti / ab * c / atau / Bab (\ d +) \. \ D * /. Contoh terakhir termasuk tanda kurung, yang digunakan sebagai perangkat memori. 
	  1. Menggunakan pola sederhana
	   
	     Pola-pola sederhana terdiri dari karakter-karakter yang ingin Anda temukan kecocokan langsung. Sebagai contoh, pola / abc / cocok dengan kombinasi karakter dalam string hanya ketika urutan yang tepat "abc" terjadi (semua karakter bersama dan dalam urutan itu) Pertandingan seperti itu akan berhasil dalam string "Hai, apakah Anda tahu abc Anda?" dan "Desain pesawat terbaru berevolusi dari slabcraft." Dalam kedua kasus, pertandingan dengan substring "abc". Tidak ada kecocokan dalam string "Grab kepiting" karena sementara itu berisi substring "ab c", itu tidak mengandung substring yang tepat "abc".

	  2. Menggunakan karakter khusus
	   
	     Saat mencari kecocokan membutuhkan sesuatu yang lebih dari kecocokan langsung, seperti menemukan satu atau lebih huruf b, atau menemukan spasi putih, Anda dapat memasukkan karakter khusus dalam pola. Misalnya, untuk mencocokkan satu "a" diikuti dengan nol atau lebih "b" diikuti oleh "c", Anda akan menggunakan pola / ab * c /: the * setelah "b" berarti "0 atau lebih kejadian dari item sebelumnya. " Dalam string "cbbabbbbbcdebc", pola ini akan cocok dengan substring "abbbbc".

- Menggunakan ekspresi reguler dalam JavaScript
 
  Ekspresi reguler digunakan dengan pengujian metode RegExp () dan exec () dan dengan metode pencocokan String (), ganti (), search (), dan split (). Metode-metode ini dijelaskan secara rinci dalam referensi JavaScript.

Isi repositori : repositori berisi foder 01-04 yang berisikan file-file hasil dari latihan dan kasus-kasus yang dikerjakan untuk pertemuan minggu pertama hari keempat.  
