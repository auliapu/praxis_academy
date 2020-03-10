## 01-05

Judul : Struktur Data di JavaScript

Oleh : Aulia Putri Utami

Tanggal : 6 Maret 2020

Ringkasan Materi :

- Object dan Array
 
  Objek adalah kumpulan dari properti, dan properti adalah sepasang hubungan antara nama (atau key) dan value. Nilai properti bisa berupa fungsi, Dalam hal ini properti itu disebut method. Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. Array, di sisi lain, biasanya mengandung jumlah yang bervariasi dari nilai-nilai yang identik secara konseptual dan menggunakan angka (mulai dari 0) sebagai nama properti mereka. Ada beberapa properti bernama dalam array, seperti length dan sejumlah method.

- Iterable
    
  Iterable objek adalah generalisasi dari array, itu adalah konsep yang memungkinkan kita untuk membuat objek apa pun dapat digunakan dalam loop for..of.
  - Objek yang dapat digunakan dalam for..of disebut iterable.
  - Secara teknis, iterables harus mengimplementasikan metode yang bernama Symbol.iterator. Hasil dari [Symbol.iterator] disebut iterator yang menangani proses iterasi lebih lanjut. 
  - Iterator harus memiliki metode bernama next () yang mengembalikan objek {done: Boolean, value: any}, dilakukan di sini: true menunjukkan akhir dari proses iterasi, jika nilainya adalah nilai berikutnya.

- Map dan Set

  **Map** adalah kumpulan item data yang dikunci, seperti halnya Objek. Method dan properti adalah:

	- new Map() - membuat map.
	- map.set (key, value) - menyimpan value dengan key.
	- map.get(key) - mengembalikan value dengan key, tidak terdefinisi jika key tidak ada di map.
	map.has(key) - mengembalikan true jika key ada, false jika tidak.
	- map.delete(key) - menghapus value dengan key.
	- map.clear() - menghapus semuanya dari map.
	- map.size - mengembalikan jumlah elemen saat ini.

  **Set** adalah kumpulan tipe khusus - “set of values” (tanpa key), di mana setiap nilai hanya dapat terjadi satu kali. 
  
  Metode utamanya adalah:

    - new Set(iterable) - membuat set, dan jika objek iterable disediakan (biasanya array), menyalin nilai dari set ke set.
    - set.add(value) - menambahkan value, mengembalikan set itu sendiri.
    - set.delete(value) - menghapus value, mengembalikan true jika value ada pada saat panggilan, jika tidak false.
    - set.has(value) - mengembalikan true jika value ada di set, jika tidak false.
    - set.clear () - menghapus semuanya dari set.
    - set.size - adalah jumlah elemen.	
 
 - WeakSet dan WeakMap
 
   **WeakMap** adalah koleksi seperti map yang memungkinkan hanya objek sebagai key dan menghapusnya bersama-sama dengan value terkait hingga tidak dapat diakses dengan cara lain.
	
   **WeakSet** adalah kumpulan Set-like yang hanya menyimpan objek dan menghapusnya begitu tidak dapat diakses dengan cara lain.
   
   WeakMap dan WeakSet digunakan sebagai struktur data "sekunder" di samping penyimpanan objek "utama". Setelah objek dihapus dari penyimpanan utama, jika hanya ditemukan sebagai key WeakMap atau dalam WeakSet, maka akan dibersihkan secara otomatis.
   
Isi Repositori : Berisi file-file latihan dan kasus yang dikerjakan untuk minggu pertmaa hari kelima

