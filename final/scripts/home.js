//View Products button
function openProductPage(){
    window.open("products.html")
}
document.querySelector(".view-button").addEventListener("click", openProductPage)

//Your orders message
let visits = getNumberOfVisitsMessage()
let visitsSpan = document.getElementById("visits")
visitsSpan.innerText = visits

function getNumberOfVisitsMessage(){
    let visitcount = localStorage.getItem("orders")
    let message = ""
    if (visitcount == null){
        message = "We look forward to your first order."
    }
    else{
        message = `You've ordered ${visitcount} amount of times`
    }
    return message
}