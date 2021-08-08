const API_KEY = "026513e9450a3712b5a663678864804d";

function successFunction() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.1719&lon=129.1491&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city .city");
      const weather = document.querySelector("#weather .weather");
      const temp = document.querySelector("#weather .temp");
      const hum = document.querySelector("#weather .hum");
      const windSpeed = document.querySelector("#weather .wind_speed");
      const windDegree = document.querySelector("#weather .wind_degree");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      hum.innerText = `${data.main.humidity}%`;
      windSpeed.innerText = `${data.wind.speed}m/s`;
      windDegree.innerText = `${data.wind.deg}`;
    });
}

successFunction();
