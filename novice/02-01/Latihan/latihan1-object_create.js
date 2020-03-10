// // CONTOH 1
// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();
//   // expected output: "My name is Matthew. Am I human? true"


// // CONTOH 2
// //--superclass
// function Shape() {
//     this.x = 0;
//     this.y = 0;
// }

// //superclass method
// Shape.prototype.move = function(x ,y) {
//     this.x += x;
//     this.y += y;
//     console.info('shape moved.');
// };

// //subclass
// function Rectangle() {
//     Shape.call(this);
// }

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// var rect = new Rectangle();
// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
// console.log('Is rect an instance of Shape??', rect instanceof Shape);
// rect.move(1, 1);


//CONTOH 3
var o;
o = Object.create(null);
o = {};
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) {
      console.log('Setting `o.bar` to', value);
    }
  }
});

function Constructor() {}
o = new Constructor();
o = Object.create(Constructor.prototype);
o = Object.create({}, { p: { value: 42 } });
o.p = 24;
o.p;
o.q = 12;
for (var prop in o) {
  console.log(prop);
}
delete o.p;
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});


// CONTOH 4
oco = Object.create( {} );   // create a normal object
ocn = Object.create( null ); // create a "null" object

console.log(oco) // {} -- Seems normal
console.log(ocn) // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

console.log(oco) // {p: 1} -- Still seems normal
console.log(ocn) // {p: 0} -- Still seems normal here too. BUT WAIT...

oco.toString()
oco.valueOf()

function ShowProperties(obj){
    for(var prop in obj){  
      console.log(prop + ": " + obj[prop] + "\n" );
    }
  }