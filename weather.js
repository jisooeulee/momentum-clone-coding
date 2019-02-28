const API_KEY = "49bf77da2ad98961e26baab45f5aba4d";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

var weather = document.querySelector('js-weather');

function getWeather(coords) {
    fetch(
        `${WEATHER_API}lat=${coords.lat}&lon=${
            coords.lng
            }&appid=${API_KEY}&units=metric`
    )
        .then(response => response.json())
        .then(json => {
            const name = json.name;
            const temperature = json.main.temp;
            weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;

    }); // https://와 appid는 내가 넣어준다.
}

function handleGeoSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var coords = {
        lat,
        lng
    };
    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
}

function handleGeoFailure() {
    console.log("Can't access geo location");
    //console.log(onmessageerror);
}

// 좌표를 요청
function askForCoords() {
    // DOM APIs가 제공하는 navigator API를 이용한다.
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailure); // .getCurrentPosition()의 첫번째 인자 : 좌표를 가져오는데 성공했을 때를 처리하는 함수.
}

function loadWeather() {
    var currentCoords = localStorage.getItem("coords");
    if (currentCoords !== null) {
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords);
        return;
    } else {
        navigator.geolocation.getCurrentPosition(
            handleGeoSuccess,
            handleGeoFailure
        );
    }
}
function init() {
    loadWeather();
}

init();