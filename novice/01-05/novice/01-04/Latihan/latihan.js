// const firstString = '2 + 2';
// const secondString = new String('2 + 2');
// eval(firstString);
// eval(secondString); 

// const hello = 'Hello, World!';
// const helloLength = hello.length;
// hello[0];
// hello[0]; 

// contoh 3
console.log('string text line 1\n\
string text line 2');
console.log(`string text line 1
string text line 2`);

// contoh 4
// const five = 5;
// const ten = 10;
// console.log('Fifteen is ' + (five + ten) + ' not ' + (2 * five + ten) + '.');

const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);

// contoh 5

const msPerDay = 24 * 60 * 60 * 1000;
// July 17, 2014 00:00:00 UTCs.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));
const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
console.log(americanDateTime(july172014));

// contoh 6

const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });
 
console.log(hanDecimalRMBInChina.format(1314.25));

// contoh 7
const names = ['Hochberg', 'Hönigswald', 'Holzman'];
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
console.log(names.sort(germanPhonebook.compare).join(', '));

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
console.log(names.sort(germanDictionary.compare).join(', '));


