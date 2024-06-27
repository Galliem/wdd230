function showCurrentTimeForecast(forecasts){
    const weatherElt = document.querySelector("body section")
    const timenow = forecasts[0].dt_txt.slice(11, 19)

    //build a new list of temp forecasts witht the same time
    let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

    //output the next three days temperature
    for(let i=1; i <= 3; i++){
        let newsection = document.createElement("section");
        let mydate = temps[i].dt_txt.slicce(0, 10)
        newsection.innerHTML = `<h2>${mydate}</h2><p>${temps[i].main.temp}&deg;F @ ${timenow}</p>`
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