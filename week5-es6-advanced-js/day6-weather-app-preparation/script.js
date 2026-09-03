const weatherData = {
    Berlin: {
        temperature: 18,
        description: "Partly cloudy",
        humidity: 65,
        wind: 12
    },

    London: {
        temperature: 15,
        description: "Rainy",
        humidity: 80,
        wind: 20
    },

    Athens: {
        temperature: 28,
        description: "Sunny",
        humidity: 45,
        wind: 10
    }
}

const cityInput = document.getElementById('city');
const searchButton = document.getElementById('search-button');

const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const showWeather = (city) => {
    const weather = weatherData[city];
    if (weather) {
        cityName.textContent = city;
        temperature.textContent = `${weather.temperature}°C`;
        condition.textContent = weather.description;
        humidity.textContent = `${weather.humidity}%`;
        wind.textContent = weather.wind;
    } else {
        cityName.textContent = 'City not found';
        temperature.textContent = '';
        condition.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
    }
}

searchButton.addEventListener('click', () => {
    if (!cityInput.value) {
        alert('Please enter a city name');
        return;
    }
    const city = cityInput.value.trim();
    showWeather(city);
});