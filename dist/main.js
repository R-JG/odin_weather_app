/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const defaultLocation = 'Toronto';\nconst apiKey = \"174317573e2dbb20e5c0f5a508fb0c9d\";\n\nfunction _updateWeatherDisplay(locationValue, descriptionValue, tempValue, feelsLikeValue) {\n    const location = document.getElementById('location-title');\n    const description = document.getElementById('weather-description');\n    const temperature = document.getElementById('temperature');\n    const feelsLike = document.getElementById('feels-like');\n\n    location.textContent = locationValue;\n    description.textContent = descriptionValue;\n    temperature.textContent = tempValue;\n    feelsLike.textContent = feelsLikeValue;\n};\n\n// subtract 273.15 to convert the kelvin value to celsius, and round it to the nearest integer:\nfunction _convertResponseUnits(kelvinValue) {\n    return Math.round(kelvinValue - 273.15);\n}\n\nasync function getWeather(location, apiKey) {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`, {mode: 'cors'});\n    const weatherData = await response.json();\n    const locationValue = weatherData.name;\n    const descriptionValue = weatherData.weather[0].description;\n    const weatherDataTemp = weatherData.main.temp;\n    const weatherDataFeels = weatherData.main.feels_like;\n    const tempValue = _convertResponseUnits(weatherDataTemp);\n    const feelsLikeValue = _convertResponseUnits(weatherDataFeels);\n    _updateWeatherDisplay(locationValue, descriptionValue, tempValue, feelsLikeValue);\n};\n\n// Setup input and button listener for changing the location:\nconst locationInputElement = document.getElementById('location-input');\nconst locationSetButton = document.getElementById('location-button');\nlocationSetButton.addEventListener('click', (e) => {\n    const newLocation = locationInputElement.value;\n    getWeather(newLocation, apiKey).catch(err => {alert('This is an invalid location!')});\n});\n\n// Load default location:\ngetWeather(defaultLocation, apiKey);\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;