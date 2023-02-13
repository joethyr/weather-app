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

export { searchWeather }