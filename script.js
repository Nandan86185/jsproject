// Get elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to the list
addBtn.addEventListener('click', addTask);

// Add task when pressing 'Enter'
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = todoInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const li = document.createElement('li');
  li.className = 'todo-item';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear input
  todoInput.value = '';
}
