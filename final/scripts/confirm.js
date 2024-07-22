let shipDate = new Date();
shipDate.setTime(shipDate.getTime()+(5*24*60*60*1000))
let orderURL = new URL(window.location);
let params  = orderURL.searchParams;
let ordered = params.get("pid");

document.querySelector('#firstname').textContent = params.get("firstname");
document.querySelector('#lastname').textContent = params.get("lastname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#street').textContent = params.get("street");
document.querySelector('#city').textContent = params.get("city");
document.querySelector('#state').textContent = params.get("state");
document.querySelector('#zip').textContent = params.get("zip");
document.querySelector('#gift').textContent = params.get("gift");

document.getElementById('ship').textContent = shipDate;

//Import products info  (enters data from JSON file)

const url = `./data/products.json`
const cardBox = document.querySelector('#product-data')

const displayProducts = (cards) => {
  cards.forEach((card) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
                <h2>${card.name}</h2>
                <p>${card.number}<p>
                <p>${card.season}<p>
                <p>${card.type}<p>
                <img src="${card.imageURL}" alt="${card.name} image" loading="lazy" height="400">`
        cardBox.append(newsection)
  });
}


async function getProductData(){
    const response = await fetch(url) /*await is a blocking call, it waits until the data loads to continue running*/
    if (response.ok){
        const data= await response.json()

        const f = data.cards.filter(x=> x.number == ordered) //filters through the json file and returns the ordered card
        console.table(f)
        displayProducts(f) //displays ordered card
    }
    else{
        console.log("this doesn't work")
    }
}

getProductData()