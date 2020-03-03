// contoh 1
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}

/*
let i = 0; 
let n = 0; 
while (i < 5) { 
  i++; 
  if (i === 3) { 
     // continue; 
  } 
  n += i; 
  console.log(n);
}
*/

/*contoh kedua
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }
*/