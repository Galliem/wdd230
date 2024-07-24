let orderURL = new URL(window.location);
let params  = orderURL.searchParams;
let ordered = params.get("pid");

document.getElementById("pid").value=ordered;

//Import products info  (enters data from JSON file)
const url = `./data/products.json`
const cardBox = document.querySelector('#product-data')

const displayProducts = (cards) => {
  cards.forEach((card) => {
    let newsection = document.createElement("section");
    let tax = (card.price * 0.05).toFixed(2);
    let totalprice = (tax + card.price).toFixed(2);
    newsection.innerHTML = `
                <h2>${card.name}</h2>
                <p>SKU: ${card.number}<p>
                <p>$${card.price} + $${tax} tax = total: $${totalprice}<p>
                <p>${card.type}<p>
                <img src="${card.imageURL}" alt="${card.name} image" loading="lazy" height="400">`
        cardBox.append(newsection)
  });
}


async function getProductData(){
    const response = await fetch(url) /*await is a blocking call, it waits until the data loads to continue running*/
    if (response.ok){
        const data= await response.json()
        // console.table(data)
        const f = data.cards.filter(x=> x.number == ordered) //filters through the json file and returns the ordered card
        displayProducts(f) //displays ordered card
    }
    else{
        console.log("this doesn't work")
    }
}

getProductData()