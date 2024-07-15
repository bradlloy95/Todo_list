const newTaskBTN = document.getElementById('new-task-btn');
const popUpForm = document.getElementById('popUpForm');
const closeFormButton = document.getElementById('closeFormButton');
const todoForm = document.getElementById('todoForm');


newTaskBTN.addEventListener('click', () => {
    popUpForm.style.display = 'block';
});

closeFormButton.addEventListener('click', () => {
    popUpForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == popUpForm) {
        popUpForm.style.display = 'none';
    }
});

export function resetForm(){
    todoForm.reset()
    popUpForm.style.display = 'none'
}