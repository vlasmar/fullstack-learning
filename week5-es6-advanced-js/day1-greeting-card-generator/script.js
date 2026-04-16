const nameInput = document.getElementById('name');
const colorInput = document.getElementById('color');
const generateButton = document.getElementById('button-submit');
const output = document.querySelector(".output");

generateButton.addEventListener("click", () => {
    const name = nameInput.value;
    const color = colorInput.value;

    if (!name || !color) {
        return;
    }

    output.innerHTML = `<p class="greeting-message">Hello ${name}! Your favorite color is ${color}!</p>`;

    output.style.backgroundColor = color;
    output.classList.remove('hidden');

    nameInput.value = "";

    form.reset();
});