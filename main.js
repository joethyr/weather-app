/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const searchForm = document.querySelector("form")
const searchField = document.querySelector(".search-bar")
const location = document.querySelector(".location")
const tempCelsius = document.querySelector(".tempCelsius")
const tempFahrenheit = document.querySelector(".tempFahrenheit")
const description = document.querySelector(".description")
const image = document.querySelector("img")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const temperature = document.querySelectorAll(".temperature")

searchForm.addEventListener("submit", e => {
  e.preventDefault()
  if (searchField.value == null || searchField.value === "") return
  const newSearch = _weather__WEBPACK_IMPORTED_MODULE_0__.searchWeather(searchField.value)
  const data = newSearch.fetchWeather()
  renderResult(data)
  searchField.value = null
})

function renderResult(data) {
  data.then((result) => {
    location.innerHTML = `${result.name}, ${result.country}`
    image.src = `https://openweathermap.org/img/wn/${result.icon}@2x.png`
    description.innerHTML = result.description
    humidity.innerHTML = `Humidity: ${result.humidity}%`
    wind.innerHTML = `Wind: ${result.speed} km/h`
    tempCelsius.innerHTML = `${Math.round(result.temp)} °C`
    tempFahrenheit.innerHTML = `${(Math.round(result.temp * 9 / 5) + 32)} °F`
  })
}

temperature.forEach((temp) => {
  temp.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.dataset.tempUnit === "celsius") {
      tempCelsius.style.display = "none"
      tempFahrenheit.style.display = "block"
    } else if (e.target.dataset.tempUnit === "fahrenheit") {
      tempCelsius.style.display = "block"
      tempFahrenheit.style.display = "none"
    }
  })
})





/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchWeather": () => (/* binding */ searchWeather)
/* harmony export */ });
const createWeather = (data) => {
  const { name } = data;
  const { country } = data.sys
  const { description, icon } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  const printData = () => (
    console.log(name, country, description, icon, temp, humidity, speed)
  )

  return { printData, name, country, description, icon, temp, humidity, speed }
}

const searchWeather = (search) => {
  const apiKey = "5b6bb4615477367bc7a0a572cdcaa407";

  async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`, { mode: "cors" })
    const weatherData = await response.json()
    const dataWeather = await createWeather(weatherData)
    console.log(dataWeather)
    dataWeather.printData()
    return dataWeather
  }

  return { fetchWeather }

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNEJBQTRCLFlBQVksSUFBSSxlQUFlO0FBQzNELHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0Esc0NBQXNDLGdCQUFnQjtBQUN0RCw4QkFBOEIsY0FBYztBQUM1QywrQkFBK0IseUJBQXlCO0FBQ3hELGtDQUFrQyx3Q0FBd0M7QUFDMUUsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsVUFBVTtBQUNwQixVQUFVLG9CQUFvQjtBQUM5QixVQUFVLGlCQUFpQjtBQUMzQixVQUFVLFFBQVE7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNGQUFzRixPQUFPLFNBQVMsT0FBTyxvQkFBb0IsY0FBYztBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDs7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiXG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJcIilcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKVxuY29uc3QgdGVtcENlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBDZWxzaXVzXCIpXG5jb25zdCB0ZW1wRmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcEZhaHJlbmhlaXRcIilcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKVxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIilcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIilcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wZXJhdHVyZVwiKVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBpZiAoc2VhcmNoRmllbGQudmFsdWUgPT0gbnVsbCB8fCBzZWFyY2hGaWVsZC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gIGNvbnN0IG5ld1NlYXJjaCA9IHdlYXRoZXIuc2VhcmNoV2VhdGhlcihzZWFyY2hGaWVsZC52YWx1ZSlcbiAgY29uc3QgZGF0YSA9IG5ld1NlYXJjaC5mZXRjaFdlYXRoZXIoKVxuICByZW5kZXJSZXN1bHQoZGF0YSlcbiAgc2VhcmNoRmllbGQudmFsdWUgPSBudWxsXG59KVxuXG5mdW5jdGlvbiByZW5kZXJSZXN1bHQoZGF0YSkge1xuICBkYXRhLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IGAke3Jlc3VsdC5uYW1lfSwgJHtyZXN1bHQuY291bnRyeX1gXG4gICAgaW1hZ2Uuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3Jlc3VsdC5pY29ufUAyeC5wbmdgXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcmVzdWx0LmRlc2NyaXB0aW9uXG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYEh1bWlkaXR5OiAke3Jlc3VsdC5odW1pZGl0eX0lYFxuICAgIHdpbmQuaW5uZXJIVE1MID0gYFdpbmQ6ICR7cmVzdWx0LnNwZWVkfSBrbS9oYFxuICAgIHRlbXBDZWxzaXVzLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocmVzdWx0LnRlbXApfSDCsENgXG4gICAgdGVtcEZhaHJlbmhlaXQuaW5uZXJIVE1MID0gYCR7KE1hdGgucm91bmQocmVzdWx0LnRlbXAgKiA5IC8gNSkgKyAzMil9IMKwRmBcbiAgfSlcbn1cblxudGVtcGVyYXR1cmUuZm9yRWFjaCgodGVtcCkgPT4ge1xuICB0ZW1wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnRlbXBVbml0ID09PSBcImNlbHNpdXNcIikge1xuICAgICAgdGVtcENlbHNpdXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB0ZW1wRmFocmVuaGVpdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnRlbXBVbml0ID09PSBcImZhaHJlbmhlaXRcIikge1xuICAgICAgdGVtcENlbHNpdXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgdGVtcEZhaHJlbmhlaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfVxuICB9KVxufSlcblxuXG5cbmV4cG9ydCB7IH0iLCJjb25zdCBjcmVhdGVXZWF0aGVyID0gKGRhdGEpID0+IHtcbiAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIGljb24gfSA9IGRhdGEud2VhdGhlclswXTtcbiAgY29uc3QgeyB0ZW1wLCBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICBjb25zdCB7IHNwZWVkIH0gPSBkYXRhLndpbmQ7XG5cbiAgY29uc3QgcHJpbnREYXRhID0gKCkgPT4gKFxuICAgIGNvbnNvbGUubG9nKG5hbWUsIGNvdW50cnksIGRlc2NyaXB0aW9uLCBpY29uLCB0ZW1wLCBodW1pZGl0eSwgc3BlZWQpXG4gIClcblxuICByZXR1cm4geyBwcmludERhdGEsIG5hbWUsIGNvdW50cnksIGRlc2NyaXB0aW9uLCBpY29uLCB0ZW1wLCBodW1pZGl0eSwgc3BlZWQgfVxufVxuXG5jb25zdCBzZWFyY2hXZWF0aGVyID0gKHNlYXJjaCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBcIjViNmJiNDYxNTQ3NzM2N2JjN2EwYTU3MmNkY2FhNDA3XCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtzZWFyY2h9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1pbXBlcmlhbGAsIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnN0IGRhdGFXZWF0aGVyID0gYXdhaXQgY3JlYXRlV2VhdGhlcih3ZWF0aGVyRGF0YSlcbiAgICBjb25zb2xlLmxvZyhkYXRhV2VhdGhlcilcbiAgICBkYXRhV2VhdGhlci5wcmludERhdGEoKVxuICAgIHJldHVybiBkYXRhV2VhdGhlclxuICB9XG5cbiAgcmV0dXJuIHsgZmV0Y2hXZWF0aGVyIH1cblxufVxuXG5leHBvcnQgeyBzZWFyY2hXZWF0aGVyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlclwiXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=