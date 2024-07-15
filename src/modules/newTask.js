import { addToDoToLocalStorage } from "./localstorsge";
import { renderToDos } from "./loadTask";
import { resetForm } from "./model";

// Define the ToDo class
export class ToDo {
    constructor(name, description, dueDate = null) {
        this.name = name;
        this.dayMade = new Date().toLocaleDateString(); // Stores the current date
        this.description = description;
        this.dueDate = dueDate;
    }
}



document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Extract form data
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;

    // Display the form data in the console (or process it as needed)
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Due Date:', dueDate);

    // Example: Save the form data to localStorage
    let todo = new ToDo(name, description, dueDate);
    addToDoToLocalStorage(todo);
    resetForm()
    renderToDos()
    
});

