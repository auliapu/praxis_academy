## 03-04

Judul : DOM Lanjut

Oleh : Aulia Putri Utami

Tanggal : 20 Maret 2020

Penjelasan Latihan :

1. querySelector()

   Metode `querySelector()` yaitu mengembalikan elemen pertama yang cocok dengan satu atau lebih CSS selector. Jika tidak menemukan kecocokan, metode mengembalikan `null`. 
   
   **Syntax** 

   > var ele = document.querySelector(selector);
      
   **Contoh**

        HTML
        <p>paragraph one</p>
        <p>paragraph two</p>
        <div>div one</div>
        <p>paragraph three</p>
        <div>div two</div>

        JavaScript
        var firstDiv = document.querySelector('div');
        firstDiv.style.color = 'red';

   `<div>` pertama dipilih dengan metode `querySelector()` dan pada `<div>` pertama diubah warnanya menjadi merah.

2. querySelectorAll()

   Kalau `querySelector()` hanya mengembalikan elemen pertama dari semua elemen yang cocok, maka `querySelectorAll()` mengembalikan semua elemen yang cocok dengan CSS selector. 
   
   **Syntax**

   > var eles = document.querySelectorAll(selector);

   **Contoh**

        HTML
        <p>paragraph one</p>
        <p>paragraph two</p>
        <div>div one</div>
        <p>paragraph three</p>
        <div>div two</div>

        JavaScript
        var paragraphs = document.querySelectorAll('p');
        for(var p of paragraphs)
        p.style.color = 'blue';

   semua elemen paragraf `<p>` dipilih dengan metode `querySelectorAll()` dan mengubah warnanya menjadi biru.

3. addEventListener()

   Event merujuk pada apa yang terjadi pada elemen HTML, seperti mengklik, fokus, atau memuat yang dapat direaksikan dnegan JavaScript. 

   **Syntax** 

   > ele.addEventListener(evt, listener, [options]);

   **Contoh**

        HTML
        <button>Click Me</button>

        JavaScript	
        var btn = document.querySelector('button');
        btn.addEventListener('click',foo);
        function foo() { alert('hello'); }

   `querySelector()` memilih `button` lalu menambahkan event listener agar `button` dapat di klik dan saat `button` di klik maka akan muncul alert **hello**.

4. removeEventListener() 

   Metode `removeEventListener()` digunakan untuk menghapus event listener yang sebelumnya ditambahkan dengan metode `addEventListener`.

   **Syntax**

   > ele.removeEventListener(evt, listener, [options]);

   **Contoh**

        HTML
        <button>Click Me</button>

        JavaScript	
        var btn = document.querySelector('button');
        btn.addEventListener('click',foo); // event listener
        function foo() { alert('hello'); }

        btn.removeEventListener('click',foo); //menghapus event listener

    dengan metode removeEventListener() maka akan menghapus event listener yang sebelumnya ditambahkan.

5. createElement()

   Metode `createElement()` membuat elemen HTML baru menggunakan nama tag HTML yang akan dibuat, seperti 'p' atau 'div'.

   **Syntax**
   
   > document.createElement(tagName);

   **Contoh**

   Membuat paragraf baru dengan cara :

   > var pEle = document.createElement('p')

   atau membuat div baru

   > var pEle = document.createElement('div')

6. appendChild()

   Metode `appendChild()` menambahkan elemen sebagai anak terakhir ke elemen HTML yang memanggil metode ini. Anak yang akan dimasukkan dapat berupa elemen yang baru dibuat, atau yang sudah ada. Dalam kasus terakhir, ia akan dipindahkan dari posisi sebelumnya ke posisi anak terakhir.

   **Syntax**
   
   > ele.appendChild(childEle)

   **Contoh**

     Menyisipkan elemen `<strong>` sebagai anak dari elemen `<div>` menggunakan `appendChild()` dan metode `createElement()` yang disebutkan sebelumnya.

        HTML
        <div></div>

        JavaScript
        var div = document.querySelector('div');
        var strong = document.createElement('strong');
        strong.textContent = 'Hello';
        div.appendChild(strong);

7. removeChild()

   Metode `removeChild()` menghapus elemen anak tertentu dari elemen HTML yang memanggil metode ini.

   **Syntax**

    > ele.removeChild(childEle)

   **Contoh**

   Menghapus elemen `<strong>` yang sebelumnya ditambahkan sebagai tag `<div>` di contoh pada metode `appendChild()` sebelumnya.

    > div.removeChild(strong);

8. replaceChild()

   Metode `replaceChild()` menggantikan elemen anak dengan yang lain milik elemen induk yang memanggil metode ini.

   **Syntax**

   > ele.replaceChild(newChildEle, oldChileEle)

   **Contoh**
   Mengganti elemen child `<strong>` yang berada di element parent `<div>` menjadi `<em>`.

        HTML
        <div>
        <strong>hello</strong>
        </div>

        JavaScript
        var em = document.createElement('em');
        var strong = document.querySelector('strong');
        var div = document.querySelector('div');
        em.textContent = 'hi';
        div.replaceChild(em, strong);

9. cloneNode()

   JIka harus membuat elemen baru yang sama dengan elemen yang sudah ada, metode `cloneNode()` dapat membuat salinan elemen yang sudah ada.

   **Syntax**

    > var dupeEle = ele.cloneNode([deep])

   **Contoh**

   Membuat salinan untuk elemen `<strong>` dengan `cloneNode()`, kemudian menambahkannya ke tag `<div>` sebagai elemen turunan dengan metode `appendChild()`.
   Hasilnya, <div> akan berisi dua <strong> elemen, keduanya dengan halo string sebagai konten.

        HTML
        <div>
        <strong>hello</strong>
        </div>

        JavaScript	
        var strong = document.querySelector('strong');
        var copy = strong.cloneNode(true);
        var div = document.querySelector('div');
        div.appendChild(copy);

10. insertBefore()

    Metode `insertBefore()` menambahkan elemen child (anak) yang spesifik sebelum elemen anak lain. Metode ini dipanggil oleh elemen parent (orang tua).
    Jika elemen anak yang direferensikan tidak ada atau null, maka elemen anak yang disisipkan akan ditambahkan sebagai anak terakhir dari orangtua.

    **Syntax**

    > ele.insertBefore(newEle, refEle);

    **Contoh**

    Membuat elemen `<em>` baru yang didalamnya terdapat beberapa teks dan menambahkannya sebelum elemen `<strong>` didalam elemen induk `<div>`.

        HTML
        <div>
        <strong>hello</strong>
        </div>

        JavaScript

        var em = document.createElement('em');
        var strong = document.querySelector('strong');
        var div = document.querySelector('div');
        em.textContent = 'hi';
        div.insertBefore(em, strong);

11. createDocumentFragment()

    DocumentFragments adalah objek DOM Node yang tidak pernah menjadi bagian dari pohon DOM utama. Kasus penggunaan yang biasa adalah untuk membuat fragmen dokumen, menambahkan elemen ke fragmen dokumen dan kemudian menambahkan fragmen dokumen ke pohon DOM. Di pohon DOM, fragmen dokumen digantikan oleh semua anak-anaknya.

    **Syntax**

    > document.createDocumentFragment()

    **Contoh**

    Membuat beberapa baris tabel dan sel dengan metode `createElement()`, menambahkannya ke objek DocumentFragment, lalu menambahkan fragmen dokumen ke HTML `<table>` menggunakan metode `appendChild()`.
    Dalam contoh ini, kami membuat beberapa baris tabel dan sel dengan metode `createElement()`, lalu menambahkannya ke objek DocumentFragment, akhirnya menambahkan fragmen dokumen ke HTML `<table>` menggunakan metode `appendChild()`.
    Hasilnya, lima baris - masing-masing berisi satu sel dengan angka dari 1 hingga 5 sebagai konten - akan dimasukkan ke dalam tabel.

            HTML
            <table></table>

            Javascript
            var table = document.querySelector("table");
            var df = document.createDocumentFragment();
            
            for(var i=0; i<5; i++) {
            var td = document.createElement("td");
            var tr = document.createElement("tr");
            td.textContent = i;
            tr.appendChild(td)
            df.appendChild(tr);
            }
            
            table.appendChild(df);

12. getComputedStyle()
    
    Mengembalikan nilai yang dihitung read-only dari semua properti CSS dari halaman HTML yang telah ditentukan.

    **Syntax**

    > var style = getComputedStyle(ele, [pseudoEle])

    **Contoh**

    Menampilkan nilai `width` yang dihitung dari elemen `<div>` dengan menggunakan metode `getComputedStyle()`.

            HTML
            <div></div>

            JavaScript
            var style = getComputedStyle(document.querySelector('div'));
            alert(style.width);

13. setAttribute()

    Metode `setAttribute()` menambahkan atribut baru ke elemen HTML, atau memperbarui nilai atribut yang sudah ada.

    **Syntax**

    > ele.setAttribute(name, value);

    **Contoh**

    Menambahkan atribut ke contenteditable `<div>` dengan metode `setAttribute()` lalu mengubah menjadi konten yang dapat diedit.

            HTML
            <div>hello</div>

            JavaScript
            var div = document.querySelector('div');
            div.setAttribute('contenteditable', '')

14. getAttribute()

    Metode `getAttribute()` mengembalikan nilai atribut yang ditentukan milik elemen HTML tertentu.
    
    **Syntax**

    > ele.getAttribute(name);

    **Contoh**

            HTML
            <div contenteditable=true>hello</div>

            JavaScript
            var div = document.querySelector('div');
            alert(div.getAttribute('contenteditable'))

15. removeAttribute()

    Menghapus attribut yang diberikan di elemen HTML tertentu.

    **Syntax**

    > ele.removeAttribute(name);

    **Contoh**

            HTML
            <div contenteditable=true>hello</div>

            JavaScript
            var div = document.querySelector('div');
            div.removeAttribute('contenteditable');
    



    

   
   



   


   






   
