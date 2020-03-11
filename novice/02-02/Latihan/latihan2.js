class Mahasiswa {
    constructor(nama) {
        this.nama = nama;
    }

    get nama() {
        return this._nama;
    }

    set nama(value) {
        value = value.toUpperCase();
        this._nama = value;
    }

    Hallo() {
        return "Hallo, " + this.nama;
    }
}
let mhs = new Mahasiswa('Aulia');

console.log(mhs);