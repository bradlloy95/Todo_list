import { deleteToDoFromLocalStorage } from "./localstorsge";
import { renderHomePage } from "./home";

const newTaskBTN = document.getElementById("new-task-btn");
const popUpForm = document.getElementById("popUpForm");
const closeFormButton = document.getElementById("closeFormButton");
const todocloseFormButton = document.getElementById("todo-closeFormButton");

const todoForm = document.getElementById("todoForm");
const todoPopup = document.getElementById("todoPopup");

newTaskBTN.addEventListener("click", () => {
  popUpForm.style.display = "block";
});

closeFormButton.addEventListener("click", () => {
  popUpForm.style.display = "none";
});
todocloseFormButton.addEventListener("click", () => {
  todoPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == popUpForm) {
    popUpForm.style.display = "none";
  }
});

export function resetForm() {
  todoForm.reset();
  popUpForm.style.display = "none";
}

export function todoModel(todo) {
  const todoModalContent = document.getElementById("todoModalContent");
  todoPopup.style.display = "block";
  const modelName = document.getElementById("todoModelName");
  modelName.innerText = todo.name;
  const modeldesc = document.getElementById("todoModelDesc");
  modeldesc.innerText = todo.description;

  const modelduedate = document.getElementById("todoModelDueDate");
  modelduedate.innerText = todo.dueDate;

  const modeliscomplete = document.getElementById("todoIsComplete");
  modeliscomplete.innerText = `Status: ${todo.isComplete}`;
  // console.log('inmodel')

  const button = document.getElementById("todoDelete");
  
  button.addEventListener("click", function () {
    deleteToDoFromLocalStorage(todo.name);
    todoPopup.style.display = "none";
    renderHomePage();
  });

  
}
