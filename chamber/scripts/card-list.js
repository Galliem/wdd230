document.querySelector("button").addEventListener("click", () => {
    const data = document.querySelector(`#data`)
    data.classList.toggle("cards")
    data.classList.toggle("list")
})

/*enters data from JSON file*/

const url = `./data/members.json`
const cards = document.querySelector('#data')

const displayProphets = (members) => {
  members.forEach((member) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address1}<p>
                <p>${member.address2}<p>
                <p>${member.phone}<p>
                <p>${member.websiteURL}<p>
                <p>${member.membership}<p>
                <img src="${member.imageurl}" alt="${member.name} image" loading="lazy" height="400">`
        cards.append(newsection)
  });

}

async function getProphetData(){
    const response = await fetch(url) /*await is a blocking call, it waits until the data loads to continue running*/
    if (response.ok){
        const data= await response.json()
        // console.table(data)
        displayProphets(data.members)
    }
    else{
        console.log("this doesn't work")
    }
}

getProphetData()