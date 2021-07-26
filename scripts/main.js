// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc ===  'images/firefoxlog.jpg' ) {
        myImage.setAttribute('src', 'images/thankyou-chemms.jpg');
    }else {
        myImage.setAttribute('src', 'images/firefoxlog.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla so cool,' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storageName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla so cool' + storageName;
}
myButton.onclick = function() {
    setUserName();
}