// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


//-----------supplying request option-------------

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *client
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://jsonplaceholder.typicode.com/users', { answer: 12 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });
  

// ------------- uploading JSON data ----------------

// const data = { username: 'anna' };

// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


// ----------------uploading a file ----------------

// const myForm = document.getElementById('myForm');
// const formData = new FormData();
// const fileField = document.querySelector('input[type="file"]');

// formData.append('username', 'abc123');
// formData.append('avatar', fileField.files[0]);

// fetch('https://jsonplaceholder.typicode.com', {
//   method: 'PUT',
//   body: formData
// })
// .then((response) => response.json())
// .then((result) => {
//   console.log('Success:', result);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


// --------- processing a text file line by line ------------

// async function* makeTextFileLineIterator(fileURL) {
//     const utf8Decoder = new TextDecoder('utf-8');
//     const response = await fetch(fileURL);
//     const reader = response.body.getReader();
//     let { value: chunk, done: readerDone } = await reader.read();
//     chunk = chunk ? utf8Decoder.decode(chunk) : '';
  
//     const re = /\n|\r|\r\n/gm;
//     let startIndex = 0;
//     let result;
  
//     for (;;) {
//       let result = re.exec(chunk);
//       if (!result) {
//         if (readerDone) {
//           break;
//         }
//         let remainder = chunk.substr(startIndex);
//         ({ value: chunk, done: readerDone } = await reader.read());
//         chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
//         startIndex = re.lastIndex = 0;
//         continue;
//       }
//       yield chunk.substring(startIndex, result.index);
//       startIndex = re.lastIndex;
//     }
//     if (startIndex < chunk.length) {
//       // last line didn't end in a newline char
//       yield chunk.substr(startIndex);
//     }
//   }
  
//   async function run() {
//     for await (let line of makeTextFileLineIterator(urlOfFile)) {
//       processLine(line);
//     }
//   }
  
//   run();

// ----------- check apakah ftech berhasil ------------

// fetch('wallpaper.jpg')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.blob();
//   })
//   .then((myBlob) => {
//     myImage.src = URL.createObjectURL(myBlob);
//   })
//   .catch((error) => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });


// --------------- supplying your own request object ---------------

// const myHeaders = new Headers();

// const myRequest = new Request('wallpaper.jpg', {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'cors',
//   cache: 'default',
// });

// fetch(myRequest)
//   .then((response) => response.blob())
//   .then((myBlob) => {
//     myImage.src = URL.createObjectURL(myBlob);
//   });

const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});







