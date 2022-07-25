// const tasks = [
//   { id: 1, description: "Ir al gym", done: false },
//   { id: 2, description: "Leer", done: false },
//   { id: 3, description: "Programar", done: false },
// ];
const taskList = document.querySelector(".tasks");
const taskInput = document.querySelector("#taskDesc");
const addTask = document.querySelector("#addTask");
const tasks = [];
const taskHeader = "<tr><th>ID</th><th>Tarea</th></tr>";

addTask.addEventListener("click", () => {
  const newTask = taskInput.value;
  console.log(newTask);
  tasks.push(newTask);
  taskInput.value = "";

  let htmlCode = "";
  for (let task of tasks) {
    htmlCode += ` <tr>
    <td>${Date.now()}</td>
    <td>${task}</td>
    <td><input type="checkbox" id="cbox" /></td>
    <td class="deleteTaskIcon">
      <i class="fa-solid fa-x deleteTaskIcon"></i>
    </td>
  </tr>`;
  }
  taskList.innerHTML = taskHeader + htmlCode;
});

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
