const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const APIkey = "c568b496fe4413cac89afabc4c798e86";
  const city = document.querySelector(".search input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ja&appid=${APIkey}&units=metric`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const Name = data.name;
      const Weather = data.weather[0].description;
      const Metric = Math.round(data.main.feels_like) + "度";

      const cityInformation = document.querySelector("#cityInformation");
      const li1 = document.createElement("li");
      li1.innerText = "都市名：" + Name;
      cityInformation.appendChild(li1);

      const li2 = document.createElement("li");
      li2.innerText = "天気：" + Weather;
      cityInformation.appendChild(li2);

      const li3 = document.createElement("li");
      li3.innerText = "温度：" + Metric;
      cityInformation.appendChild(li3);
    });
});
