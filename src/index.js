const defaultLocation = 'Toronto';
const apiKey = process.env.OPENWEATHER_API_KEY;

function _updateWeatherDisplay(locationValue, descriptionValue, tempValue, feelsLikeValue) {
    const location = document.getElementById('location-title');
    const description = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const feelsLike = document.getElementById('feels-like');

    location.textContent = locationValue;
    description.textContent = descriptionValue;
    temperature.textContent = tempValue;
    feelsLike.textContent = feelsLikeValue;
};

// subtract 273.15 to convert the kelvin value to celsius, and round it to the nearest integer:
function _convertResponseUnits(kelvinValue) {
    return Math.round(kelvinValue - 273.15);
}

async function getWeather(location, apiKey) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`, {mode: 'cors'});
    const weatherData = await response.json();
    const locationValue = weatherData.name;
    const descriptionValue = weatherData.weather[0].description;
    const weatherDataTemp = weatherData.main.temp;
    const weatherDataFeels = weatherData.main.feels_like;
    const tempValue = _convertResponseUnits(weatherDataTemp);
    const feelsLikeValue = _convertResponseUnits(weatherDataFeels);
    _updateWeatherDisplay(locationValue, descriptionValue, tempValue, feelsLikeValue);
};

// Setup input and button listener for changing the location:
const locationInputElement = document.getElementById('location-input');
const locationSetButton = document.getElementById('location-button');
locationSetButton.addEventListener('click', (e) => {
    const newLocation = locationInputElement.value;
    getWeather(newLocation, apiKey).catch(err => {alert('This is an invalid location!')});
});

// Load default location:
getWeather(defaultLocation, apiKey);