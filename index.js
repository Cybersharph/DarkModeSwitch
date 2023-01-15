

// dark mode
let myBody = document.querySelector('body');

// dark mode function
function darkMode() {
    myBody.classList.toggle("dark");
}

// dark mode button
let myButton = document.querySelector('button');
myButton.addEventListener('click', darkMode);

