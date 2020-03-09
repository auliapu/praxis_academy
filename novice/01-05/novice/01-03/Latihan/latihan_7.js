//contoh 1
  let fruit = function(person, color) { 
  this.person = person; 
  this.color = color; 
  this.displayInfo = function() { 
      document.write(this.person + " is " + this.color + '<br>'); 
  } 
} 

let bindingObj 
= { 
  person : "Banana", 
  color : "Yellow", 
} 

let fruit1 
= new fruit("Orange", "orange"); 

fruit1.displayInfo(); 

let newBound = fruit1.displayInfo.bind(bindingObj); 

newBound(); 

//contoh dua

// let banana = { person : 'Banana' }; 
// let orange = { person : 'Orange' }; 
// function fruits(adj) 
// { 
//     document.write(this + ' '); 
//     return (this.person + " is " + adj + '<br>'); 
// } 
  
//   document.write(fruits.call(banana, 'yummy')); 
//   document.write(fruits.apply(orange, [ 'sour' ])); 

