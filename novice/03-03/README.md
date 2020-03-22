## 03-03

Judul :

Oleh : Aulia Putri Utami

Tanggal : 19 Maret 2020

Ringkasan Materi :

- Pengertian DOM

  DOM (Document Object Model) adalah sebuah objek untuk memodelkan dokumen HTML dan XML. DOM mewakili halaman sehingga program dapat mengubah struktur dokumen, style, dan konten. DOM mewakili dokumen sebagai simpul dan objek. DOM adalah representasi berorientasi objek dari halaman web yang dapat dimodifikasi dengan bahasa scripting seperti JavaScript.

- DOM dan JavaScript

  DOM bukanlah bahasa pemrograman, tetapi tanpa DOM, JavaScript tidak akan memiliki model atau gagasan tentang halaman web, dokumen HTML, dokumen XML, dan bagian-bagian komponennya. Setiap elemen dalam dokumen adalah bagian dari DOM untuk dokumen tersebut sehingga semuanya dapat diakses dan dimanipulasi menggunakan DOM dan bahasa scripting seperti JavaScript.  

- Tipe Data Fundamental dalam DOM

  Objek **document** adalah model dari dokumen HTML. Objek ini berisi kumpulan fungsi dan atribut berupa objek dari elemen HTML yang bisa figambarkan dalam bentuk pohon, sebagai berikut :

  ![Pohon](https://www.petanikode.com/img/js/dom/pohon-html.gif)

  Apabila ingin mengakses elemen yang spesifik, terdapat beberapa fungsi yang bisa digunakan:

    - getElementById() fungsi untuk memilih elemen berdasarkan atribut id.
   
    - getElementByName() fungsi untuk memilih elemen berdasarkan atribut name.
    
    - getElementByClassName() fungsi untuk memilih elemen berdasarkan atribut class.
    
    - getElementByTagName() fungsi untuk memilih elemen berdasarkan nama tag.
    
    - getElementByTagNameNS() fungsi untuk memilih elemen berdasarkan nama tag.
    
    - querySelector() fungsi untuk memilih elemen berdasarkan query.
    
    - querySelectorAll() fungsi untuk memilih elemen berdasarkan query, dan lain-lain.