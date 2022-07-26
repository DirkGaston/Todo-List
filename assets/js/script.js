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
let id = tasks.length;

function renderTasks() {
  let htmlCode = "";
  for (let task of tasks) {
    htmlCode += ` <tr>
    <td>${task.id}</td>
    <td>${task.description}</td>
    <td><input type="checkbox" id="cbox" /></td>
    <td class="deleteTaskIcon">
    <i onclick="deleteTask(${task.id})" class="fa-solid fa-x deleteTaskIcon"></i>
    </td>
  </tr>`;
    id = tasks.length;
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
}

addTask.addEventListener("click", () => {
  newTask = { id: id, description: taskInput.value, done: false };
  console.log(newTask);
  tasks.push(newTask);
  taskInput.value = "";

  let htmlCode = "";
  for (let task of tasks) {
    htmlCode += ` <tr>
    <td>${task.id}</td>
    <td>${task.description}</td>
    <td><input type="checkbox" id="cbox" /></td>
    <td class="deleteTaskIcon">
    <i onclick="deleteTask(${task.id})" class="fa-solid fa-x deleteTaskIcon"></i>
    </td>
  </tr>`;
    id = tasks.length;
  }
  taskList.innerHTML = taskHeader + htmlCode;
  taskCounter.innerHTML = tasks.length;
});

function deleteTask(id) {
  const index = tasks.findIndex((ele) => ele.id == id);
  tasks.splice(index, 1);
  renderTasks();
}

// // Crear un botón de eliminación y adjuntarlo a cada item de la lista
// const myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Hacer click sobre el botón de eliminación para eliminar la tarea seleccionada
// const close = document.getElementsByClassName("close");
// let i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// // Añadir un símbolo CHECK al marcar una tarea como hecha
// const list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "li") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// // Crear nuevo item en lista al hacer click sobre el botón AÑADIR
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("¡Debes escribir algo!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
