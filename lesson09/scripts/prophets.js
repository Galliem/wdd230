const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards')

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
                <h2>${prophet.name} ${prophet.lastname}</h2>
                <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname} image" loading="lazy" height="400">`
        cards.append(newsection)
  });

}

async function getProphetData(){
    const response = await fetch(url) /*await is a blocking call, it waits until the data loads to continue running*/
    if (response.ok){
        const data= await response.json()
        // console.table(data)
        displayProphets(data.prophets)
    }
    else{
        console.log("this doesn't work")
    }
}

getProphetData()