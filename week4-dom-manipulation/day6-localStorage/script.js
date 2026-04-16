const tasksList = document.querySelector('ul');
const submitBtn = document.querySelector('#submit');
const newTask = document.querySelector('#new-task');

let tasks = [];
renderTodoList();

// Check if todos exist in local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTodoList();
}

// Add new task clicking the button
submitBtn.addEventListener("click", () => {
    const taskText = newTask.value;
    if (taskText === "") return;

    console.log('Task Added');
    
    const newTodoItem = {
      id: `${taskText.toLowerCase().split(" ").join("-")}-${Date.now()}`,
      text: taskText,
      isComplete: false,
    };

    tasks.push(newTodoItem);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTodoList();
    newTask.value = '';
    
});

// Rendering the list to ul
function renderTodoList() {
    tasksList.innerHTML = '';

    tasks.forEach((item) => {
        const listItem = document.createElement('li');

        const taskContent = `
        <div class="todo">
            <input type="checkbox" id="checkbox-${item.id}" ${item.isComplete ? "checked" : ""}>
            <label for="checkbox-${item.id}"></label>
            <p>${item.text}</p>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
        </div>
        `;

    listItem.innerHTML = taskContent;
    tasksList.appendChild(listItem);
    });
}

// Updating Todo Completion Status using the id of the task
const toggleTodoCompletion = (checkboxId) => {
    const taskId = checkboxId.replace("checkbox-", "");
    tasks = tasks.map((task) => {
        if (task.id === taskId) {
            task.isComplete = !task.isComplete;
        }
    return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTodoList();
};

//Get the id of the checkbox
tasksList.addEventListener("change", (event) => {
    const checkbox = event.target;
    toggleTodoCompletion(checkbox.id);
});

//Delete task
const deleteTask = (button) => {
    const checkboxId = button.parentElement.querySelector("input[type='checkbox']").id;
    const taskId = checkboxId.replace("checkbox-", "");
    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTodoList();
};

tasksList.addEventListener("click", (event) => {
    deleteTask(taskId);
});