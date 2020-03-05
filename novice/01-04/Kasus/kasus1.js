
var re = /([A-Z0-9])([ \/\.])/;;
function testInfo(plateInput) {
  var OK = re.exec(plateInput.value);
  if (!OK) {
    alert(plateInput.value + ' tidak terdaftar!'); 
  } else {
    alert('Terimakasih, nomor plat Anda terdaftar ' + plateInput.value);}
} 