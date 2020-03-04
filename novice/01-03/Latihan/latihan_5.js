//nested function  
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); 
  alert( counter() ); 
  alert( counter() ); 
