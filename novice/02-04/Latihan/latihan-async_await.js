// async function f() {
//   return 1;
// }

// f().then(alert);

// //atau
// async function f() {
//     return Promise.resolve(1);
// }
// f().then(alert);

//await
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise;
  
    console.log(result); 
  }
  
  f();

  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // resolve with this.num*2 after 1000ms
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  };
  
  async function f() {
    // waits for 1 second, then result becomes 2
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();