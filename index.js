const button = document.querySelector(".button");
const cityInformation = document.getElementById("cityInformation");

//クリックイベントを付与
button.addEventListener("click", () => {
  const APIkey = "c568b496fe4413cac89afabc4c798e86";
  let city = document.querySelector(".search input").value;
  //アニメーションのクラスを削除
  cityInformation.classList.remove("information");
  //$cityにはinputタグに入力された値と同じ都市を取得するよう設定
  //言語は日本語に設定
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ja&appid=${APIkey}&units=metric`;

  //非同期通信でリクエストを送信
  fetch(url)
    //APIからのデータをjson形式で受け取る
    .then((response) => {
      return response.json();
    })
    //受け取ったデータを引数dataに渡す
    .then((data) => {
      //dataに格納されているデータ（都市名、天気、気温）を一つずつ変数に入れ定義
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

      //switch文使用し、jsonファイル内にある天気名と画像が一致場合その天気にあった画像を出力
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
      //アニメーションのクラスを付与する
      cityInformation.classList.add("information");
    });
  //inputタグの中身をリセットする
  city = document.querySelector(".search input").value = "";
});
