// Function to add a ToDo object to localStorage
export function addToDoToLocalStorage(todo) {
  try {
    let allToDos = JSON.parse(localStorage.getItem("allToDos")) || {};
    allToDos[todo.name] = todo;
    localStorage.setItem("allToDos", JSON.stringify(allToDos));
  } catch (error) {
    console.error("Error adding ToDo to localStorage:", error);
  }
}

// Function to retrieve all ToDo objects from localStorage
export function getAllToDosFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("allToDos")) || {};
  } catch (error) {
    console.error("Error retrieving ToDos from localStorage:", error);
    return {};
  }
}

// Function to delete a ToDo object from localStorage
export function deleteToDoFromLocalStorage(todoName) {
  try {
    let allToDos = JSON.parse(localStorage.getItem("allToDos")) || {};
    delete allToDos[todoName];
    localStorage.setItem("allToDos", JSON.stringify(allToDos));
  } catch (error) {
    console.error("Error deleting ToDo from localStorage:", error);
  }
}

// Function to retrieve a single item from localStorage
export function getSingleItem(todoName) {
  try {
    // Retrieve the entire 'allToDos' object from localStorage
    const allToDos = localStorage.getItem("allToDos");

    // Check if 'allToDos' is not null and parse it
    if (allToDos) {
      const todosObject = JSON.parse(allToDos);

      // Retrieve the specific ToDo item by its name
      return todosObject[todoName] || null;
    } else {
      // If 'allToDos' is null, return null
      return null;
    }
  } catch (error) {
    console.error("Error retrieving item from localStorage:", error);
    return null;
  }
}

// Example usage
// let todo1 = new ToDo('Buy groceries', 'Buy milk, bread, and eggs');
// let todo2 = new ToDo('Complete assignment', 'Finish the math assignment by Monday');

// addToDoToLocalStorage(todo1);
// addToDoToLocalStorage(todo2);

// console.log(getAllToDosFromLocalStorage());

// deleteToDoFromLocalStorage('Buy groceries');

// console.log(getAllToDosFromLocalStorage());
