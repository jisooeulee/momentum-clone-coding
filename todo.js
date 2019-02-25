var toDoForm = document.querySelector(".js-toDoForm");
var toDoInput = toDoForm.querySelector("input");
var toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

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
    delBtn.innerText = "❌";

    var span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function loadToDos() {
    var toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
