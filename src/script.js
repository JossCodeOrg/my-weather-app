let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let p = document.querySelector("#current-info");
p.innerHTML = `${day} ${hour}:${minute}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text");
  let city = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "628atfa04eb144c5fo14f703eb967e76";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let span = document.querySelector(".temperature-number");
  span.innerHTML = temperature;
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", search);
