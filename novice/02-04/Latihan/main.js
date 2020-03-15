var fs = require("fs");
//blocking

//var data = fs.readFileSync('input.txt'); 
//console.log(data.toString()); //output berurutan

//non-blocking
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    
});
console.log("Program Selesai"); //output program selesai dulu baru input.txt

