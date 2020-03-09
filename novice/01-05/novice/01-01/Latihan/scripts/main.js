/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/th.jpg') {
      myImage.setAttribute ('src','image/th2.jpg');
    } else {
      myImage.setAttribute ('src','image/th.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }*/
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Chrome is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chrome is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }