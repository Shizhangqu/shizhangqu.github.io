// JavaScript source code
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'Test_1/images/ttf.png') {
        myImage.setAttribute('src', 'Test_1/images/xxwn.jpg');
    } else {
        myImage.setAttribute('src', 'Test_1/images/ttf.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {
    let myName = prompt('please tell me your name:');
    localStorage.setItem('name', myName);
    if (!myName || myName === null) {
        setUserName();
    }
    myHeading.textContent = 'Hello!'+ myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello!'+ storedName;
}
myButton.onclick = function () {
    setUserName();
}