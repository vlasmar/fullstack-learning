const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('color-value');
const changeColorButton = document.getElementById('changeColorBtn');

changeColorButton.addEventListener('click', () => {
    const redColor = Math.floor(Math.random() * 256);
    const greenColor = Math.floor(Math.random() * 256);
    const blueColor = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    colorDisplay.style.backgroundColor = randomColor;
    colorValue.textContent = randomColor;
});


