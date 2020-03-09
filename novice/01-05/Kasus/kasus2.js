function kamus() {
    let kamus = new Map([
        ['where', 'dimana'],
        ['when', 'kapan'],
        ['why', 'bagaimana'],
        ['who', 'siapa']
    ]);
    console.log(kamus);
    var a = prompt("Masukkan kata : ");
    var b = prompt("Masukkan arti : ");
    kamus.set(a,b);

    alert(kamus.get(a));
    console.log(kamus);
}
kamus();

function cari_kata() {
    var a = document.getElementById('demo').value;
    var kata = new Map([
        ['where', 'dimana'],
        ['when', 'kapan'],
        ['why', 'bagaimana'],
        ['who', 'siapa'] 
    ]);
alert(kata.get(a));
}