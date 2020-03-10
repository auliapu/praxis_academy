// // CONTOH 1
// function Tree(name) {
//     this.name = name
//   }
  
//   let theTree = new Tree('Redwood')
//   console.log('theTree.constructor is ' + theTree.constructor)

// // CONTOH 2
//   function Type () {}
//   let types = [
//     new Array(),
//     [],
//     new Boolean(),
//     true,             // remains unchanged
//     new Date(),
//     new Error(),
//     new Function(),
//     function () {},
//     Math,
//     new Number(),
//     1,                // remains unchanged
//     new Object(),
//     {},
//     new RegExp(),
//     /(?:)/,
//     new String(),
//     'test'            // remains unchanged
//   ]
//   for (let i = 0; i < types.length; i++) {
//     types[i].constructor = Type
//     types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()]
//   }
//   console.log(types.join('\n'))

// CONTOH 3
function Parent() {} 
function CreatedConstructor() {} 

CreatedConstructor.prototype = Object.create(Parent.prototype) 
CreatedConstructor.prototype.constructor = CreatedConstructor // sets the correct constructor for future use

CreatedConstructor.prototype.create = function create() { 
  return new this.constructor()
} 

new CreatedConstructor().create().create() // it's pretty fine

// CONTOH 4
function ParentWithStatic() {}

ParentWithStatic.startPosition = { x: 0, y:0 }
ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition
} 

function Child(x, y) {
  this.position = {
    x: x,
    y: y
  }
}

Child.prototype = Object.create(ParentWithStatic.prototype)
Child.prototype.constructor = Child

Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  let position = this.position
  let startPosition = this.constructor.getStartPosition() // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};