const API_KEY = "026513e9450a3712b5a663678864804d";

function successFunction() {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=35.1719&lon=129.1491&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .city");
      const weather = document.querySelector("#weather .weather");
      const temp = document.querySelector("#weather .temp");
      const hum = document.querySelector("#weather .hum");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      hum.innerText = `${data.main.humidity}%`;
    });
}

successFunction();
