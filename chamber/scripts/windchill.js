//Windchill.js
let tempSpan = document.getElementById("temperature")
let windSpan= document.getElementById("windspeed")
let chillSpan = document.getElementById("windchill")

function showWindChill(temp, wind){

    if(temp > 50 || wind <= 3){
        chillSpan.innerText=`N/A`
        return
    }

    chillfactor = wind ** 0.16
    chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor)
    chillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`

}

//Weather.js
const WEATHER_URL= "https://api.openweathermap.org/data/2.5/weather?lat=32.9729017&lon=-97.8654444&appid=64e33ff0d34052fad14e2052b396d978&units=imperial";

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature'); //temp
const weatherIcon = document.querySelector('#weather-icon'); //image
const currentWind = document.querySelector('#windspeed'); //wind
const captionDesc = document.querySelector('#current-conditions'); //conditions

function displayResults(data){
    currentTemp.innerHTML= `${data.main.temp.toFixed(0)}`;
    captionDesc.innerText= data.weather[0].main;
    currentWind.innerText= data.wind.speed.toFixed(0);
    weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
    showWindChill(data.main.temp, data.wind.speed)

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


//Forecast.js
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=32.9729017&lon=-97.8654444&appid=64e33ff0d34052fad14e2052b396d978&units=imperial";
const ONE_DAY = 24*60*60*1000

function showCurrentTimeForecast(forecasts){
    const weatherElt = document.querySelector("#forecast")
    //get current time from the first element
    const timenow = forecasts[0].dt_txt.slice(11, 19)

    //build a new list of temp forecasts witht the same time
    let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

    //output the next three days temperature
    for(let i=1; i <= 3; i++){
        let newsection = document.createElement("section");
        let mydate = temps[i].dt_txt.slice(0, 10)
        let icon = temps[i].weather[0].icon
        newsection.innerHTML = `<h2>${mydate}</h2>
        <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon"></p>
        <p>${temps[i].main.temp.toFixed(0)}&deg;F @ ${timenow}</p>`
        weatherElt.append(newsection)
    }
}

async function fetchForecast(){
    try {
        const response = await fetch(weatherURL);
        if (response.ok){
            const data = await response.json();
            //showHighLowForecast(data.list);
            showCurrentTimeForecast(data.list);
        }
        else{
            throw Error(await response.text());
        }
        } catch (error){
            console.log(error);
        }
    }

    fetchForecast()