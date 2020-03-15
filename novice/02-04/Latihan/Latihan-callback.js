const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
    console.log('timeout');
    }, 0);

    setTimeout(() => {
        console.log('immediate');
    });
});

//contoh 2
let bar;

function someAsyncApiCall(callback) { 
    //callback(); //undefined
    process.nextTick(callback); //1
}

someAsyncApiCall(() => {
    //console.log('bar', bar); //undefined
    console.log('bar', bar); //1
});
bar = 1;

//contoh 3
const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
  this.emit('event');
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
