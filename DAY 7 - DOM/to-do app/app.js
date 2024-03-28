const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOptions = document.querySelector(".filter-todo");
const todolist = document.querySelector((".todo-list");


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// function to add new tasks to localStorage
function addTodo (e) {
    //prevent form submission
    e.preventDefault();
    //create a new todo div
}