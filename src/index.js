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


