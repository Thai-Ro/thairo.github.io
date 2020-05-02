//Image switcher code

let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vans-header-logo.png') {
        myImage.setAttribute ('src','images/vans-sb-logo.png');
    } else {
        myImage.setAttribute ('src','/images/vans-header-logo.png');
    }
}

//Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUsername();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Go Off the Wall, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Go Off the Wall, ' + storedName;
}

myButton.onclick = function() {
    setUsername();  
}