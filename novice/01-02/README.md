## 01-02

Judul : Konstruksi Dasar JavaScript

Oleh : Aulia Putri Utami

Tanggal : 3 Maret 2020

Ringkasan Materi :

1. Pengendali alur

- Block Statement

Pernyataan paling dasar adalah pernyataan blok, yang digunakan untuk mengelompokkan pernyataan. 
Blok dibatasi oleh sepasang kurung kurawal:

    {
      statement_1; 
      statement_2; 
      ⋮ 
      statement_n;
    }

- Pernyataan bersyarat

Pernyataan bersyarat adalah seperangkat perintah yang dijalankan jika kondisi yang ditentukan benar. 
JavaScript mendukung dua pernyataan bersyarat:

 **else .. if**
 
      if (condition) {
        statement_1;
        } else {
        statement_2;
      }
      
**Switch Statement**
    
Switch memungkinkan suatu program untuk mengevaluasi ekspresi dan berupaya mencocokkan nilai ekspresi dengan label kasus. 
Jika kecocokan ditemukan, program mengeksekusi pernyataan terkait.

      switch (expression) {
      case label_1:
        statements_1
        [break;]
      case label_2:
        statements_2
        [break;]
        …
        default:
      statements_def
        [break;]
      }

- Exception handling statements

Anda bisa melempar pengecualian menggunakan throw statement dan menanganinya menggunakan try ... catch statement.

**Throw Statement**

Gunakan throw statement untuk melemparkan pengecualian. throw statement menentukan nilai yang akan dilemparkan:

    throw expression;
    
**try ... catch**

Pernyataan *try ... catch* menandai blok pernyataan yang akan dicoba, dan menentukan satu atau beberapa respons jika ada pengecualian. 
Jika ada pengecualian, *try ... catch* akan menangkapnya.

2. Iterasi dan looping

- for statement

Sebuah for loop mengulang hingga kondisi yang ditentukan evaluasinya menjadi salah/false. for loop pada Javascript serupa dengan  for loop pada Java dan C. Sebuah statement (pernyataan) for   terlihat sebagai berikut:

    for ([initialExpression]; [condition];
      [incrementExpression]) statement
    
- do...while statement

Pernyataan/statement do...while terus di ulangi sampai evaluasi kondisi bernilai false/salah. 
Sebuah do...while statement terlihat sebagai berikut:

    do
      statement
    while (condition);
   
- while statement

Sebuah statement while di eksekusi pernyataan pernyataannya asalkan memenuhi syarat kondisinya yang bernilai true/benar. 
Sebuah statement  while terlihat sebagai berikut:

while (condition)
  statement

Jika kondisi bernilai false/salah, statement dengan perulangan berhenti di eksekusi dan kontrol akan melewati statement yang mengikuti perulangan tersebut.

- labeled statement

Sebuah label menyediakan sebuah statement dengan pengenal yang memungkinkan Anda merujuknya di tempat lain dalam program Kamu. Untuk contohnya, Kamu dapat menggunakan label untuk mengidentifikasi pengulangan, lalu gunakan statement break atau continue untuk menunjukkan apakah suatu program harus memutuskan loop atau melanjutkan eksekusinya.

    label :
       statement
       
- break statement

Gunakan break statement untuk menghentikan perulangan, switch, atau konjungsi dengan statement yang memakai label.       

    break [label];
    
- continue statement

Statement continue bisa digunakan untuk memulai lagi statement while, do-while, for, atau label.

    continue [label];
    
- for...in statement

Statement for...in mengiterasi sebuah variabel spesifik diatas properti enumerable dari sebuah objek. 
Untuk setiap properti yang berbeda, JavaScript mengeksekusi pernyataan pernyataan yang spesifik. 

    for (variable in object) {in terlihat sebagai berikut:
      statements
    }
    
- for...of statement

Statement for...of membuat sebuah iterasi perulangan diatas iterable objects (termasuk Array, Map, Set, arguments object dan seterusnya), menjalankan hubungan iterasi khusus dengan statement yang akan dieksekusi untuk setiap nilai properti yang berbeda.

    for (variable of object) {
      statement
    }  
    
    
Penjelasan isi repo :
Repositori 01-02 terdiri dari file-fil latihan dan kasus yang dikerjakan untuk hari kedua minggu pertama.
