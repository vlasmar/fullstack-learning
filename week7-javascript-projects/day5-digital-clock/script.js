const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const updateClock = () => {
    const now = new Date();

    timeDisplay.innerHTML = `<p>${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}</p>`;

    dateDisplay.innerHTML = `<p>${days[now.getDay()]}</p>
    <p>${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}</p>`;
}

setInterval(updateClock, 1000);

updateClock();