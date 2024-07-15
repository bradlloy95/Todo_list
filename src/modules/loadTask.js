import { addToDoToLocalStorage, getAllToDosFromLocalStorage, deleteToDoFromLocalStorage } from "./localstorsge";
import { ToDo } from "./newTask";
const content = document.getElementById('content');


export function renderToDos() {
    // get all todos from local storage
    const allTasks = getAllToDosFromLocalStorage();
    // clear inner html
    content.innerHTML = '';
    // loop through todos to add to div
    for (let key in allTasks ){
        const task = allTasks[key]
        // create container 
        const todoCTR = document.createElement('div');
        todoCTR.classList.add('todos')
        todoCTR.innerHTML = `
            <h3>${task['name']} </h3>
            <h3>${task['dayMade']} </h3>
            <h3>${task['description']} </h3>
            <h3>${task['dueDate']} </h3>
            `;
        //create delete button
        const delBTN = document.createElement('button');
        delBTN.innerText = 'Delete';

        delBTN.addEventListener('click', function() {
            deleteToDoFromLocalStorage(task['name']);
            renderToDos()
        })
        todoCTR.appendChild(delBTN);
        content.appendChild(todoCTR);
    };
};