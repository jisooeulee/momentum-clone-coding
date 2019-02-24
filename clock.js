// 제어할 html요소를 가져온다.
var clockContainer = document.querySelector('.js-clock');
var clockTitle = document.querySelector('h1');

// 요구되는 기능들을 구현한다.
function getTime() {
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var seconds = date.getSeconds();

    // if(seconds < 10) {
    //     seconds = '0'+seconds;
    // }

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`; // 삼항 연산자를 seconds자리에 조건으로 넣는다.
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();