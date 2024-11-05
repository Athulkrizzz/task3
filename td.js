const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function() {
    todoList.removeChild(taskItem);
  };

  taskItem.appendChild(removeBtn);
  todoList.appendChild(taskItem);

  todoInput.value = "";
}
