const WEATHER_URL= "https://api.openweathermap.org/data/2.5/weather?lat=32.9729017&lon=-97.8654444&appid=64e33ff0d34052fad14e2052b396d978&units=imperial";

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data){
    currentTemp.innerHTML= `${data.main.temp}&deg;F`;
    captionDesc.innerText= data.weather[0].main;
    weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
}

async function apiFetch() {
    try {
      const response = await fetch(WEATHER_URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();