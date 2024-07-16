//View Products button
function openProductPage(){
    window.open("products.html")
}
document.querySelector(".view-button").addEventListener("click", openProductPage)

//hamberger menu
let menubutton = document.getElementById("menu-burger")
let nav = document.getElementById(".nav ul")
menubutton.addEventListener("click", () =>{
    menubutton.classList.toggle("open")
    nav.classList.toggle("open")
})

//footer
let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified