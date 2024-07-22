//Import products info  (enters data from JSON file)

const url = `./data/products.json`
const cardBox = document.querySelector('#product-data')

const displayProducts = (cards) => {
  cards.forEach((card) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
                <h2>${card.name}</h2>
                <p>SKU: ${card.number}<p>
                <p>Price: ${card.price}<p>
                <p>${card.type}<p>
                <img src="${card.imageURL}" alt="${card.name} image" loading="lazy" height="400">
                <a href="order.html?pid=${card.number}">Order Now</a>`
        cardBox.append(newsection)
  });

}


async function getProductData(){
    const response = await fetch(url) /*await is a blocking call, it waits until the data loads to continue running*/
    if (response.ok){
        const data= await response.json()
        // console.table(data)
        displayProducts(data.cards)
    }
    else{
        console.log("this doesn't work")
    }
}

getProductData()