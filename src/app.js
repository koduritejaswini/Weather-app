function displayTemperature(response) {
  console.log(response.data.main.temp);
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let cityWeatherDesc = document.querySelector("#weather-desc");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  cityWeatherDesc.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "f1e5044fce63dedfebf7bf6f1c98f16b";
let cityName = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
