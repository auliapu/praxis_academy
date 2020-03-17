//contoh-1 (gak ada error)
// try {

//     alert('Start of try runs');  // (1) <--
  
//     // ...no errors here
  
//     alert('End of try runs');   // (2) <--
  
//   } catch(err) {
  
//     alert('Catch is ignored, because there are no errors'); // (3)
  
//   }

//contoh 2 - ada error karena lalala tidak terdefinisi
//   try {

//     alert('Start of try runs');  // (1) <--
  
//     lalala; // error, variable is not defined!
  
//     alert('End of try (never reached)');  // (2)
  
//   } catch(err) {
  
//     alert(`Error has occurred!`); // (3) <--
  
//   }

//contoh 3 - error karena try tidak terbaca
// try {
//     {{{{{{{{{{{{
//   } catch(e) {
//     alert("The engine can't understand this code, it's invalid");
//   }

  //contoh 4 
//   try {
//     setTimeout(function() {
//       noSuchVariable; // error karena try harus didalam function
//     }, 1000);
//   } catch (e) {
//     alert( "won't work" );
//   }

// setTimeout(function() {
//     try {
//       noSuchVariable; // try..catch mengatasi error
//     } catch {
//       alert( "error is caught here!" );
//     }
//   }, 1000);

//contoh 5
// let json = "{ bad json }";

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   alert( user.name ); // doesn't work

// } catch (e) {
//   // ...the execution jumps here
//   alert( "Our apologies, the data has errors, we'll try to request it one more time." );
//   alert( e.name );
//   alert( e.message );
// }

//contoh 6 - tidak ada nama shg menampilkan pesan SyntaxError
// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }

//   alert( user.name );

// } catch(e) {
//   alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
// }

//contoh 7 - menggunakan rethrow
// let json = '{ "age": 30 }'; // incomplete data
// try {

//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }

//   blabla(); // unexpected error

//   alert( user.name );

// } catch(e) {

//   if (e.name == "SyntaxError") {
//     alert( "JSON Error: " + e.message );
//   } else {
//     throw e; // rethrow (*)
//   }

// }

//contoh 8 
//jika memilih yes pada make an error maka catch dan finally akan ditampilkan
// jika memilih no maka catch tidak akan ditampilkan, langsung lompat ke finally.

// try {
//     alert( 'try' );
//     if (confirm('Make an error?')) BAD_CODE();
//   } catch (e) {
//     alert( 'catch' );
//   } finally {
//     alert( 'finally' );
//   }

//contoh 9 
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );

