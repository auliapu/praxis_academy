function exampleScope() {
    console.log(foo); // => undefined
    var foo = “Hello, world!”;
    console.log(foo); // => “Hello, world!”
    console.log(“This sentence will be logged”); // => “This sentence will be logged”
  }