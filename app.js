// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheckItem)

// Functions
function addTodo(e) {
    // prevent form from submitting
    e.preventDefault();

    // create todo div with class .todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    // append li element to the div
    todoDiv.appendChild(newTodo);

    // button - completed
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('complete-btn');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedBtn);

    // button - delete
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    // append to ul
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = '';
}

function deleteCheckItem(e) {
  const item = e.target
  // delete item
  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    // animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });
  }

  // check item 
  if(item.classList[0] === 'complete-btn') {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
  }
}