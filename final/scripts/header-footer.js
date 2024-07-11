//footer
let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

//hamberger menu
let menubutton = document.getElementById("menu-burger")
let nav = document.getElementById("nav ul")
menubutton.addEventListener("click", () =>{
    menubutton.classList.toggle("open")
    nav.classList.toggle("open")
})

//View Products button
function openJoinPage(){
    window.open("products.html")
}
document.querySelector(".hero button").addEventListener("click", openJoinPage)

//card buttons
function openOrderPage(){
    window.open("order.html?pid=2")
}
document.querySelector(".featured2 button").addEventListener("click", openOrderPage)

function openOrderPage(){
    window.open("order.html?pid=3")
}
document.querySelector(".featured3 button").addEventListener("click", openOrderPage)

function openOrderPage(){
    window.open("order.html?pid=1")
}

document.querySelector(".featured1 button").addEventListener("click", openOrderPage)

//Import products info  (enters data from JSON file)

const url = `./data/products.json`
const cards = document.querySelector('#data')

const displayProducts = (cards) => {
  cards.forEach((card) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
                <h2>${card.name}</h2>
                <p>${card.number}<p>
                <p>${card.season}<p>
                <p>${card.type}<p>
                <img src="${card.imageURL}" alt="${card.name} image" loading="lazy" height="400">`
        cards.append(newsection)
  });

}

displayProducts()