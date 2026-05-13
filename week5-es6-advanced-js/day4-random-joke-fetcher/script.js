const jokeContainer = document.getElementById('jokeContainer');
const newJokeButton = document.getElementById('new-joke');

async function loadData() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    let data = await response.json();
    jokeContainer.innerHTML = `<p id="setup">${data.setup}</p>`;
    setTimeout(() => { jokeContainer.innerHTML += `<p id="punchline">${data.punchline}</p>` }, 5000);
    console.log(data);
  } catch (error) {
    console.log("Network error");
  }
}

newJokeButton.addEventListener('click', () => {
    loadData();
})