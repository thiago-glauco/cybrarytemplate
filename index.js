// Import stylesheets
import './style.css';

// Write Javascript code!
let sayHello = function () {
  alert("Hello, student!");
}

let message = "You are at Cybrary";
document.getElementById('btnHello').onclick = sayHello;

//Just template code
const appDiv = document.getElementById('lblMessage');
appDiv.innerHTML = `<h3>This is a teste App. Your output is right bellow:<h3>
<h4>${message}</h4>`;


