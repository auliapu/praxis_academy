'use strict';

class Hewan {
    constructor(nama) {
        this.tipe_hewan = 'Hewan'
        this.nama = nama;
    }
    tipe() {
        console.log(this.nama, 'adalah', this.tipe_hewan);
    }
    suara() {
        console.log(this.nama, 'suaranya.', this.suara_hewan);
    }
}

class Kucing extends Hewan {
    constructor(nama, warna_hewan) {
        super(nama);
        this.tipe_hewan = 'Kucing';
        this.warna_hewan = warna_hewan;
    }
    suara() {
        console.log(this.nama, 'meow.');
    }
    warna() {
        console.log(this.nama, 'berwarna', this.warna_hewan);
    }
}

let kiki = new Kucing('Kiki', 'putih');
kiki.tipe();
kiki.suara();
kiki.warna();
