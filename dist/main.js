/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const weather = () => {
  const apiKey = "5b6bb4615477367bc7a0a572cdcaa407";

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        renderWeather(response)
      })
  }

  const renderWeather = (data) => {
    const { name } = data;
    const { country } = data.sys
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, country, description, icon, temp, humidity, speed)
  }

  return { fetchWeather }
}

const test = weather()
test.fetchWeather("Colorado")



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsS0FBSyxTQUFTLE9BQU8sS0FBSyxjQUFjO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFVBQVU7QUFDdEIsWUFBWSxvQkFBb0I7QUFDaEMsWUFBWSxpQkFBaUI7QUFDN0IsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBcIjViNmJiNDYxNTQ3NzM2N2JjN2EwYTU3MmNkY2FhNDA3XCI7XG5cbiAgY29uc3QgZmV0Y2hXZWF0aGVyID0gKGNpdHkpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlbmRlcldlYXRoZXIocmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVuZGVyV2VhdGhlciA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgY291bnRyeSB9ID0gZGF0YS5zeXNcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBpY29uIH0gPSBkYXRhLndlYXRoZXJbMF07XG4gICAgY29uc3QgeyB0ZW1wLCBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICAgIGNvbnN0IHsgc3BlZWQgfSA9IGRhdGEud2luZDtcbiAgICBjb25zb2xlLmxvZyhuYW1lLCBjb3VudHJ5LCBkZXNjcmlwdGlvbiwgaWNvbiwgdGVtcCwgaHVtaWRpdHksIHNwZWVkKVxuICB9XG5cbiAgcmV0dXJuIHsgZmV0Y2hXZWF0aGVyIH1cbn1cblxuY29uc3QgdGVzdCA9IHdlYXRoZXIoKVxudGVzdC5mZXRjaFdlYXRoZXIoXCJDb2xvcmFkb1wiKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==