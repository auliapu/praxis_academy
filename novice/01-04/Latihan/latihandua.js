//contoh 1
var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);

//contoh dua
//var re = /\w+\s/g;
var re = new RegExp('\\w+\\s', 'g');
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

//contoh tiga
var xArray; while(xArray = re.exec(str)) console.log(xArray);