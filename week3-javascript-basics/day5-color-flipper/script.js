const button = document.querySelector('.button');
const colors = ['red', 'green', 'blue', 'purple'];

function getRandomColor(array){
    let randomIndex = Math.floor(Math.random() * 4);
    return array[randomIndex];
}

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor(colors);
});