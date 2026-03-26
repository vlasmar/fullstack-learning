const tasksList = document.querySelector('ul');
const submitBtn = document.querySelector('#submit');
const newTask = document.querySelector('#new-task');


submitBtn.addEventListener("click", () => {
    console.log('Task Added');
    let listItem = document.createElement('li');
    listItem.innerText = newTask.value;
    tasksList.appendChild(listItem);
    newTask.value = '';
});

