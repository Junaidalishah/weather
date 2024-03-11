const cityNameInput = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const API_KEY = "06b44aa3e5d5e49266ec8a78175340e9";

const getWeatherDataBy = async () => {
  const cityName = cityNameInput.value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);

  temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  description.innerHTML = `${data.weather[0].description}`;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind_speed.innerHTML = `${data.wind.speed}Km/H`;
  switch (data.weather[0].main) {
    case "Clouds":
      weather_img.src = "images/cloud.png";
      break;
    case "Clear":
      weather_img.src = "images/clear.png";
      break;
    case "Rain":
      weather_img.src = "images/rain.png";
      break;
    case "Mist":
      weather_img.src = "images/mist.png";
      break;
    case "Snow":
      weather_img.src = " images/snow.png";
      break;
    default:
      console.log("No match for weather condition:", data.weather[0].main);
      break;
  }
};

searchBtn.addEventListener("click", getWeatherDataBy);
