// html에서 어떤 값을 제어할 것인지 정한다.
var form = document.querySelector('.js-form');
var input = form.querySelector('input');
var greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

// 필요한 기능(요구사항)을 구현한다. 어떨 때 어떤 함수를 호출할 것인지 물고 물리는 관계를 이해한다. 어디에 어떤 이벤트가 구현되어야 하는지를 파악한다.
function handleSubmit(event) {
    event.preventDefault();
    var currentValue = input.value;

    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(name) {
    localStorage.setItem(USER_LS, name);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function loadName() {
    var currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();