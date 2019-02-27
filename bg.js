var body = document.querySelector("body");

const IMG_NUMBER = 3; // 원하는 숫자

// 사진 설정
function paintImage(imgNumber) {
    var image = new Image(); // 어떻게 하면 이 순서를 알고 이대로 할까. 했더니 google에 DOM APIs Image라고 하니까 https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image 이런게 뜬다! 이런 API를 보며 필요한 기능을 구현하는 거다!
    image.src = `img/${imgNumber + 1}.jpg`; // +1을 하는 이유 : Math.random() 함수가 0을 줄 수 있기 때문.
    image.classList.add("bgImage");
    body.prepend(image);
}

// 랜덤 숫자 생성
function genRandom() {
    var number = Math.floor(Math.random() * IMG_NUMBER);

    return number;
}

function init() {
    // 1. 랜덤 숫자를 생성한다. 생성한 숫자를 randomNumver에 넣어준다.
    var randomNumber = genRandom();
    // 2. 생성된 숫자로 사진생성 메소드를 호출한다.
    paintImage(randomNumber);
}

init();