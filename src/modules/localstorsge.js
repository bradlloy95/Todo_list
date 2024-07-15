

// Function to add a ToDo object to localStorage
export function addToDoToLocalStorage(todo) {
    let allToDos = JSON.parse(localStorage.getItem('allToDos')) || {};
    allToDos[todo.name] = todo;
    localStorage.setItem('allToDos', JSON.stringify(allToDos));
}

// Function to retrieve all ToDo objects from localStorage
export function getAllToDosFromLocalStorage() {
    return JSON.parse(localStorage.getItem('allToDos')) || {};
}

// Function to delete a ToDo object from localStorage
export function deleteToDoFromLocalStorage(todoName) {
    console.log(todoName)
    let allToDos = JSON.parse(localStorage.getItem('allToDos')) || {};
    console.log(allToDos)
    delete allToDos[todoName];
    localStorage.setItem('allToDos', JSON.stringify(allToDos));
}

// Creating ToDo objects
// let todo1 = new ToDo('Buy groceries', 'Buy milk, bread, and eggs');
// let todo2 = new ToDo('Complete assignment', 'Finish the math assignment by Monday');

// // Adding ToDo objects to localStorage
// addToDoToLocalStorage(todo1);
// addToDoToLocalStorage(todo2);

// Retrieving and displaying all ToDo objects from localStorage
//console.log(getAllToDosFromLocalStorage());

// Deleting a ToDo object from localStorage
//deleteToDoFromLocalStorage('Buy groceries');

// Retrieving and displaying all ToDo objects after deletion
//console.log(getAllToDosFromLocalStorage())