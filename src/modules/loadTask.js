import {
  addToDoToLocalStorage,
  getAllToDosFromLocalStorage,
  deleteToDoFromLocalStorage,
  getSingleItem,
} from "./localstorsge";
import { todoModel } from "./model";
import { ToDo } from "./newTask";
const content = document.getElementById("content");

export function renderToDos() {
  content.innerHTML = "";
  // get all todos from local storage
  const allTasks = getAllToDosFromLocalStorage();
  if (Object.keys(allTasks).length == 0) {
    const messageBox = document.createElement("h4");
    messageBox.innerText = "No Tasks";
    content.appendChild(messageBox);
  } else {
    const head = todoDiv(true);
    content.appendChild(head);
    renderTodos(allTasks);
  }
}

// Function to create a to-do item element
function createTodoElement(todo) {
  const todoItem = todoDiv(false, todo);

  return todoItem;
}

function renderTodos(todos) {
  for (const key in todos) {
    if (todos.hasOwnProperty(key)) {
      const todoElement = createTodoElement(todos[key]);
      content.appendChild(todoElement);
    }
  }
}

function todoDiv(forHead, todo = null) {
  const item = document.createElement("div");
  item.classList.add("todosHead");

  const completeCTR = document.createElement("div");
  completeCTR.classList.add("complete");

  const nameCTR = document.createElement("div");
  nameCTR.classList.add("name");

  const descriptionCTR = document.createElement("div");
  descriptionCTR.classList.add("description");

  const dueDateCTR = document.createElement("div");
  dueDateCTR.classList.add("dueDate");

  if (forHead === true) {
    completeCTR.innerText = "Complete";

    nameCTR.innerText = "Task Name";

    descriptionCTR.innerText = "Task Description";

    dueDateCTR.innerText = "Due Date";
  } else {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isComplete;
    checkbox.classList.add("circle-checkbox");
    const label = document.createElement("label");
    completeCTR.appendChild(checkbox);
    completeCTR.appendChild(label);
    if (todo.isComplete) {
      // Set the checkbox state based on the isComplete property
      checkbox.checked = todo.isComplete;
    }

    checkbox.addEventListener("click", function () {
      //checkbox.checked = !checkbox.checked;
      let item = getSingleItem(todo.name);
      if (item.isComplete === false) {
        item.isComplete = true;
      } else {
        item.isComplete = false;
      }

      addToDoToLocalStorage(item);
      renderToDos()
    });
    nameCTR.innerText = todo.name;

    descriptionCTR.innerText = todo.description;

    if (todo.dueDate === "") {
      dueDateCTR.innerText = "No due date!";
    } else {
      dueDateCTR.innerText = todo.dueDate;
    }
  }
  item.appendChild(completeCTR);
  item.appendChild(nameCTR);
  item.appendChild(descriptionCTR);
  item.appendChild(dueDateCTR);

  // Add event listener to the item
item.addEventListener('click', function(event) {
    // Check if the click target is not the completeCTR
    if (event.target !== completeCTR && !completeCTR.contains(event.target)) {
        console.log('item clicked');
        todoModel(todo)
    }
  })

  return item;
}
