//let promise = new Promise(function(resolve, reject) {
    //setTimeout(() => resolve("done"), 1000);
    //setTimeout(() => reject(new Error("Whoops!")), 1000);
    //resolve(123);
//});

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );

//catch
//promise.catch(alert);

//finally
new Promise((resolve, reject) => {
    //setTimeout(() => resolve("result"), 2000)
    throw new Error("error");
  })
    .finally(() => alert("Promise ready"))
    //.then(result => alert(result));
    .catch(err => alert(err));