let inputField = document.getElementById('inputField');
let addTodo = document.getElementById('addTodo');
let toDoList = document.getElementById('toDoList');

addTodo.addEventListener('click', function(){
    var list = document.createElement('li');
    if (!inputField.value)
        alert('내용을 입력해 주세요!');
    else {
        list.innerText = inputField.value;
        toDoList.appendChild(list);
        inputField.value= "";
    }
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){
        toDoList.removeChild(list);
    })
})