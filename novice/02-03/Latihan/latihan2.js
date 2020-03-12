// let PI = 3.14;
// const calculateArea = (radius, pi) => radius * radius * pi;
// console.log(calculateArea(10, PI));

//contoh 2
// let counter = 1;

// function increaseCounter(value) {
//   counter = value + 1;
// }

// increaseCounter(counter);
// console.log(counter);

//contoh 3
// let counter = 1;
// const increaseCounter = (value) => value + 1;
// increaseCounter(counter); 
// console.log(counter); 

// contoh 4
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers);

// contoh 5
// var filterArray = function(x, coll) {
//     var resultArray = [];

//     for (var i = 0; i< coll.length; i++) {
//         if(coll[i] < x) {
//             resultArray.push(coll[i]);
//         }
//     }

//     return resultArray;
// }
// console.log(filterArray(3, [10, 9, 8, 2, 7, 5, 1, 3, 0]));

//contoh 6
var people = [
    {name: "TK", age: 26},
    {name: "Kaio", age: 10},
    {name: "Kazumi", age: 30}
];

var peopleSentences = [];

for(var i = 0; i < people.length; i++) {
    var sentence = people[i].name + " is " + people[i].age + " years old";
    peopleSentences.push(sentence);
}

console.log(peopleSentences);

//contoh 7
var values = [1, 2, 3, -4, 5];

for (var i = 0; i < values.length; i++) {
    values[i] = Math.abs(values[i]);
}
console.log(values);

//contoh 8
var orders = [
    {productTitle: "Product 1", amount: 10},
    {productTitle: "Product 2", amount: 30},
    {productTitle: "Product 3", amount: 20},
    {productTitle: "Product 4", amount: 60},
];

var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}

console.log(totalAmount);

//contoh 9
var shoppingCart = [
    {productTitle: "Functional Programming", type: "books", amount: 10},
    {productTitle: "Kindle", type: "electronics", amount: 30},
    {productTitle: "Shoes", type: "fashion", amount: 20},
    {productTitle: "Clean Code", type: "books", amount: 60},
];

const byBooks = (order) => order.type == "books";
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
    return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart);

console.log(getTotalAmount(shoppingCart));