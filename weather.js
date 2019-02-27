const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can't access geo location");
    //console.log(onmessageerror);
}

// 좌표를 요청
function askForCoords() {
    // DOM APIs가 제공하는 navigator API를 이용한다.
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // .getCurrentPosition()의 첫번째 인자 : 좌표를 가져오는데 성공했을 때를 처리하는 함수.
}

function loadCoords() {
    var loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();