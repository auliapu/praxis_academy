var re = /[\w-]+@([\w-]+\.)+[\w-]+$/i;
var rgname = /([^@]*)/;
var rgtld = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
function testInfo(email) {
  var OK = re.exec(email.value);
  var username = rgname.exec(email.value);
  var domain = rgtld.exec(email.value);
   if (!OK) {
    alert(email.value + ' tidak terdaftar!'); 
  } else {
    alert('Halo, username anda adalah ' + username[0] + ' domain anda adalah ' + domain[0]);}
}