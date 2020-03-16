// import { sum, mult } from './lib.js';

// console.log( sum(1,2,3,4) ); //output 10

//--multiple item
// console.log( mult(1,2,3,4)); //output 24

//aliased (as)
// import { sum as addAll, mult as multiplyAll } from './lib.js';

// console.log( addAll(1,2,3,4) );      // output 10
// console.log( multiplyAll(1,2,3,4) ); // output 24

//all items
import * as lib from './lib.js';

console.log( lib.PI );
console.log(lib.sum(1,2,3,4));
console.log(lib.mult(1,2,3,4));




