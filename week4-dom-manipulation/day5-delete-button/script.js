const tasksList = document.querySelector('ul');
const submitBtn = document.querySelector('#submit');
const newTask = document.querySelector('#new-task');



submitBtn.addEventListener("click", () => {
    if (newTask.value === "") return;
    console.log('Task Added');
    let listItem = document.createElement('li');
    let deleteButton = document.createElement('button');

    listItem.textContent = newTask.value + " ";
    deleteButton.textContent = ' Delete';
    deleteButton.style.border = "1px solid red";
    
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    tasksList.appendChild(listItem);
    
    newTask.value = '';
});

