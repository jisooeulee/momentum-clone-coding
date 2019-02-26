var toDoForm = document.querySelector(".js-toDoForm");
var toDoInput = toDoForm.querySelector("input");
var toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

var toDosArr = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArr)); // localStorage는 string만 저장할 수 있다. JSON.stringify : 자바스크립트 object를 string으로 바꿔준다.
}

function handleSubmit(event) {
    event.preventDefault();
    var currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // todoㅇ를 등록하고 나면, input창에 남아있는 문자를 지운다.
}

function paintToDo(text) {
    //console.log(text);
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    var span = document.createElement("span");
    var toDoObjId = toDosArr.length + 1;

    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = toDoObjId; // li에도 id값을 설정한다.

    toDoList.appendChild(li);
    var toDoObj = {
        text : text,
        id : toDoObjId
    };
    toDosArr.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    var loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        //console.log(loadedToDos);
        var parsedToDos = JSON.parse(loadedToDos); // json : 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능.
        //console.log(parsedToDos); // object로 변환됨을 확인 가능.
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos(); // load하나만 호출하고 물고 물리는 것 까지 여기서 하진 않는다! 물고 물리는 건 각 function에서.
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
