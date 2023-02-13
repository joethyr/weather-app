import * as weather from "./weather"

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
  const newSearch = weather.searchWeather(searchField.value)
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



export { }