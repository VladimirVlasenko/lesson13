function onPageLoaded() {
let headerInput = document.querySelector('.header-input');
let headerButton = document.querySelector('.header-button');
let container = document.querySelector('.container');
let ul = document.querySelector('.todo');
let todoItem = document.createElement('li');

let addListItem = function() {
    container.appendChild(ul);
    ul.classList.add('todo');
    ul.appendChild(todoItem);
    todoItem.classList.add('todo-item');
    todoItem.textContent = headerInput.value;
    console.log('todoItem: ', todoItem);

    let buttonTodoRemove = document.createElement('button');
    buttonTodoRemove.classList.add('todo-remove');
    todoItem.appendChild(buttonTodoRemove);
    let buttonTodoComplete = document.createElement('button');
    buttonTodoComplete.classList.add('todo-complete');
    
};

headerButton.addEventListener('click', addListItem);
}
document.addEventListener("DOMContentLoaded", onPageLoaded);