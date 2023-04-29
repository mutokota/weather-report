const button = document.querySelector(".button");
const cityInformation = document.getElementById("cityInformation");

button.addEventListener("click", () => {
  const APIkey = "c568b496fe4413cac89afabc4c798e86";
  let city = document.querySelector(".search input").value;
  cityInformation.classList.remove("information");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ja&appid=${APIkey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const Name = data.name;
      const Weather = data.weather[0].description;
      const Metric = Math.round(data.main.feels_like) + "℃";

      const cityName = document.querySelector(".cityName");
      cityName.innerText = "都市名：" + Name;

      const cityWeather = document.querySelector(".cityWeather");
      cityWeather.innerText = "天気：" + Weather;

      const cityMetric = document.querySelector(".cityMetric");
      cityMetric.innerText = "温度：" + Metric;

      console.log(data);

      const img = document.querySelector(".img img");
      switch (data.weather[0].main) {
        case "Clear":
          img.src = "/imges/clear.png";
          break;

        case "Clouds":
          img.src = "/imges/cloud.png";
          break;

        case "Mist":
          img.src = "/imges/mist.png";
          break;

        case "Rain":
          img.src = "/imges/rain.png";
          break;

        case "Snow":
          img.src = "/imges/snow.png";
          break;

        default:
          img.src = "";
          break;
      }
      cityInformation.classList.add("information");
    });

  city = document.querySelector(".search input").value = "";
});
