function Buah(nama, warna, manfaat) {
    this.nama = nama,
    this.warna = warna,
    this.manfaat = manfaat,
    this.getName = function() {
        return "Nama buah : " + this.nama + ", Warna : " + this.warna + ", Manfaat : " + this.manfaat;
    }
}

let jeruk = new Buah("Jeruk", "Oranye", "Menyembuhkan Sariawan");
console.log(jeruk.getName());

// //subclass
// class Buah {
//     constructor(nama, warna, manfaat) {
//     this.nama = nama;
//     this.warna = warna;
//     this.manfaat = manfaat;
//     }

//     getName() {
//         return "Nama buah : " + this.nama + "<br>" + " Warna : " + this.warna + "<br>" + " Manfaat : " + this.manfaat;
//     }
// }

// class Jeruk extends Buah {
//     getName() {
//         return super.getName() + " - buah yang memiliki banyak vitamin C.";
//     }
// }



