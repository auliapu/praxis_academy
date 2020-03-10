const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//CONTOH 2
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//CONTOH 3
function test() {
    'use strict';
  
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
    
    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}
    
    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
    
    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
  }
  test();

  // CONTOH 4
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj2 = Object.assign(o1, o2, o3);
console.log(obj2); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

//CONTOH 5
const o4 = { a: 1, b: 1, c: 1 };
const o5 = { b: 2, c: 2 };
const o6 = { c: 3 };

const obj3 = Object.assign({}, o4, o5, o6);
console.log(obj3); // { a: 1, b: 2, c: 3 }

//CONTOH 6
const o7 = { a: 1 };
const o8 = { [Symbol('foo')]: 2 };

const obj4 = Object.assign({}, o7, o8);
console.log(obj4); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj4); // [Symbol(foo)]

//CONTOH 7
const obj5 = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copy2 = Object.assign({}, obj5);
console.log(copy2); // { baz: 3 }


//CONTOH 8
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj6 = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj6); // { "0": "a", "1": "b", "2": "c" }

//CONTOH 9 
// const target2 = Object.defineProperty({}, 'foo', {
//     value: 1,
//     writable: false
//   }); // target.foo is a read-only property
  
//   Object.assign(target2, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
//   // TypeError: "foo" is read-only
  
//   console.log(target2.bar);  // 2, the first source was copied successfully.
//   console.log(target2.foo2); // 3, the first property of the second source was copied successfully.
//   console.log(target2.foo);  // 1, exception is thrown here.
//   console.log(target2.foo3); // undefined, assign method has finished, foo3 will not be copied.
//   console.log(target2.baz);

  // CONTOH 10
  const obj7 = {
    foo: 1,
    get bar() {
      return 2;
    }
  };
  
  let copy3 = Object.assign({}, obj7); 
  console.log(copy3); 
  // { foo: 1, bar: 2 }
  // The value of copy.bar is obj.bar's getter's return value.
  
  // This is an assign function that copies full descriptors
  function completeAssign(target, ...sources) {
    sources.forEach(source => {
      let descriptors = Object.keys(source).reduce((descriptors, key) => {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
      
      Object.getOwnPropertySymbols(source).forEach(sym => {
        let descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  copy3 = completeAssign({}, obj7);
  console.log(copy3);

  //CONTOH 11
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target === null || target === undefined) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource !== null && nextSource !== undefined) { 
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }