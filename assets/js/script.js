const tasks = [
  { id: 0, description: "Ir al gym", done: false },
  { id: 1, description: "Leer", done: false },
  { id: 2, description: "Programar", done: false },
];
const taskList = document.querySelector(".tasks");
const taskInput = document.querySelector("#taskDesc");
const addTask = document.querySelector("#addTask");
const taskHeader = "<tr><th>ID</th><th>Tarea</th></tr>";
const taskCounter = document.querySelector("#taskCounter");
const doneCounter = document.querySelector("#doneCounter");
let id = tasks.length;
let htmlCode = "";

const template = (task) => {
  return ` <tr>
  <td>${task.id}</td>
  <td id="${task.id}">${task.description}</td>
  <td><input type="checkbox" id="cbox${task.id}" onclick="checkTask(${task.id})" /></td>
  <td class="deleteTaskIcon">
  <i onclick="deleteTask(${task.id})" class="fa-solid fa-x deleteTaskIcon"></i>
  </td>
</tr>`;
};

const pageLoad = () => {
  for (const task of tasks) {
    htmlCode += template(task);
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
  filterDone();
};

function renderTasks() {
  let htmlCode = "";
  for (let task of tasks) {
    htmlCode += template(task);
    id = tasks.length;
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
  filterDone();
}

addTask.addEventListener("click", () => {
  newTask = { id: id, description: taskInput.value, done: false };
  tasks.push(newTask);
  taskInput.value = "";

  let htmlCode = "";
  for (let task of tasks) {
    htmlCode += template(task);
    id = tasks.length;
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
  filterDone();
});

function deleteTask(id) {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  renderTasks();
}

function checkTask(id) {
  const index = tasks.findIndex((ele) => ele.id == id);
  let checkbox = document.querySelector("#cbox" + id);
  if (checkbox.checked == true) {
    tasks[index].done = true;
  } else {
    tasks[index].done = false;
  }
  let taskToStrikeThrough = document.getElementById(id);
  taskToStrikeThrough.innerHTML =
    "<strike>" + taskToStrikeThrough.innerHTML + "</strike>";

  filterDone();
}

function filterDone() {
  let doneTasks = tasks.filter((task) => task.done == true);
  let totalDoneTasks = doneTasks.length;
  doneCounter.innerHTML = totalDoneTasks;
}

window.onload = function () {
  pageLoad();
};
