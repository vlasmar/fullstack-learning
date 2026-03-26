const tasksList = document.querySelector('ul');
const submitBtn = document.querySelector('.submit-btn');


submitBtn.addEventListener("click", () => {
    console.log('Task Added');
});

let listItem = document.createElement('li');
tasksList.appendChild(listItem);