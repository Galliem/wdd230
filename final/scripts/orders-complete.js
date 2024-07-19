//In your js file, declare three const variables that hold references to the input, button, and list elements.

const favorder = document.querySelector("#firstname") // stores input
const addbutton =document.querySelector("#send") //submit button in order.html
const mylist = document.querySelector("#list") //list
const ORDER_KEY = "orders"

let orderList = getListFromStorage()
orderList.forEach(addItem)

function getListFromStorage(){
    let orderString = localStorage.getItem(ORDER_KEY)
    if (orderString == null){
        orderString = 1
    }
    return JSON.parse(orderString)
}

function updateLocalStorage(){
    localStorage.setItem(ORDER_KEY, JSON.stringify(orderList))
}

function addItem(item){
        // create a li element
        let newitem = document.createElement("li")
    
        // populate the li elements textContent or innerHTML with the input value
        newitem.innerText = item  //item was favorder.value
        newitem.setAttribute("order", item)
    
        // append the li element to the unordered list in your HTML
        mylist.append(newitem)
        }
    //getElementById makes it so you dont have a #   use -> ("list")

//Create a click event listener for the Add order button using addEventListener and an anonymous function or arrow function.
addbutton.addEventListener("click", () => {

    //add item from user
    addItem(favorder.value)
    //update the internal list
    orderList.push(favorder.value) //.push adds item to the end of the list
    //save to local storage
    updateLocalStorage()
    
    // change the input value to nothing or the empty string to clean up the interface for the user
    favorder.value = ""
})

