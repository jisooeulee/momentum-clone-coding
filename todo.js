var todoForm = document.querySelector(".js-toDoForm");
var toDoInput = todoForm.querySelector("input");
var todoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

var todosArr = [];

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todosArr)); // localStorage는 string만 저장할 수 있다. JSON.stringify : 자바스크립트 object를 string으로 바꿔준다.
}

function handleSubmit(event) {
    event.preventDefault();
    var currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = ""; // todoㅇ를 등록하고 나면, input창에 남아있는 문자를 지운다.
}

function deleteTodo(event) {
    //console.dir(event.target.parentNode.id);
    var btn = event.target;
    var li = btn.parentNode;
    todoList.removeChild(li);
    // cleanTodos와 filter가 하는 것은 'filterFn'이 체크가 된 아이템들의 array를 주는 것.
    var cleanTodos = todosArr.filter(function (todo) { // filter는 array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들만 가지고 새로운 array를 만들고
        return todo.id !== parseInt(li.id); // 1 : true
    });

    todosArr = cleanTodos;
    saveTodos();
}

function paintTodo(text) {
    //console.log(text);
    var li = document.createElement("li");
    var span = document.createElement("span");
    var todoObjId = todosArr.length + 1;
    var delBtn = document.createElement("button");

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = todoObjId; // li에도 id값을 설정한다.

    todoList.appendChild(li);
    var toDoObj = {
        text: text,
        id: todoObjId
    };
    todosArr.push(toDoObj);
    saveTodos();
}

function loadTodos() {
    var loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null) {
        //console.log(loadedToDos);
        var parsedTodos = JSON.parse(loadedTodos); // json : 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능.
        //console.log(parsedToDos); // object로 변환됨을 확인 가능.
        parsedTodos.forEach(function (todo) {
            paintTodo(todo.text);
        })
    }
}

function init() {
    loadTodos(); // load하나만 호출하고 물고 물리는 것 까지 여기서 하진 않는다! 물고 물리는 건 각 function에서.
    todoForm.addEventListener("submit", handleSubmit);
}

init();
