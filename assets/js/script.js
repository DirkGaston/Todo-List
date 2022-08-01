import { tasks } from "./tasks.js"
const taskList = document.querySelector(".tasks");
const taskCounter = document.querySelector("#taskCounter");
const doneCounter = document.querySelector("#doneCounter");
let htmlCode = "";
let id = tasks.length;
const addTask = document.querySelector("#addTask");
let taskDone = "";
const taskInput = document.querySelector("#taskDesc");
const taskHeader = "<tr><th>ID</th><th>Tarea</th></tr>";

const filterDone = () => {
  doneCounter.innerHTML = tasks.filter(({ done }) => done === true).length;

}

const template = (htmlId, htmlDesc, htmlState) => {
  htmlCode += ` <tr>
  <td>${htmlId}</td>
  <td class="taskDescription" id="${htmlId}">${htmlDesc}</td>
  <td><input class="taskCheck" id="c${htmlId}" type="checkbox" value="true" ${htmlState} /></td>
  <td class="deleteTaskIcon">
  <i id="${htmlId}" class="fa-solid fa-x deleteTaskIcon"></i>
  </td>
</tr>`;
};

const pageLoad = (taskId, taskDesc, taskState) => {
  taskDone = ""
  if (taskState === true) {
    taskDone = "checked"
  } else {
    taskDone === ""
  }
  if (taskId >= id) {
    id = taskId + 1
  }
  template(taskId, taskDesc, taskDone)
};

const renderTasks = () => {
  htmlCode = "";
  id = tasks.length
  for (let task of tasks) {
    pageLoad(task.id, task.description, task.done)
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
  filterDone();
}

const newTask = () => {
  if (taskInput.value === "") {
    alert("¡Ingresa una tarea!")
    return
  } else {
    tasks.push({ id: id, description: taskInput.value, done: false });
    taskInput.value = ""
    renderTasks()
    taskCheck()
    taskCheckDone()
  }
}

addTask.addEventListener("click", () => {
  newTask()
})

const taskCheck = () => {
  document.querySelectorAll('i').forEach((item) => {
    item.addEventListener('click', (e) => {
      deleteTask(e.target.id)
    })
  })
}

const taskCheckDone = () => {
  document.querySelectorAll('.taskCheck').forEach((item) => {

    item.addEventListener('click', (e) => {
      let itemId = Number(e.target.id.slice(1))
      let taskToStrikeThrough = document.getElementById(itemId);
      const taskIndex = tasks.findIndex(
        (taskItems) => taskItems.id == itemId
      )
      if (e.target.checked) {
        tasks[taskIndex].done = true
        taskToStrikeThrough.innerHTML =
          "<strike>" + taskToStrikeThrough.innerHTML + "</strike>";
      } else {
        tasks[taskIndex].done = false
      }
      filterDone()
    })
  })
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(
    (taskItems) => taskItems.id == id
  )
  tasks.splice(taskIndex, 1)
  renderTasks()
  taskCheck()
  taskCheckDone()
}

window.onload = () => {
  renderTasks()
  taskCheck()
  taskCheckDone()
}


