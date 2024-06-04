//In your js file, declare three const variables that hold references to the input, button, and list elements.

const favchap = document.querySelector("#favchap") // stores input
const addbutton =document.querySelector("#addbutton")
const mylist = document.querySelector("#list") //list
const CHAPTER_KEY = "chapters"

let chapterList = getChapterListFromStorage()
chapterList.forEach(addItem)

function getChapterListFromStorage(){
    let chapterString = localStorage.getItem(CHAPTER_KEY)
    if (chapterString == null){
        return []
    }
    return JSON.parse(chapterString)
}

function updateLocalStorage(){
    localStorage.setItem(CHAPTER_KEY, JSON.stringify(chapterList))
}

function addItem(item){
        // create a li element
        let newitem = document.createElement("li")

        // create a delete button
        let deletebutton = document.createElement("button")
    
        // populate the li elements textContent or innerHTML with the input value
        newitem.innerText = item  //item was favchap.value
        newitem.setAttribute("chapter", item)
    
        // populate the button textContent with a ❌
        deletebutton.innertext = "❌"
    
        // append the li element with the delete button
        newitem.append(deletebutton)
        // append the li element to the unordered list in your HTML
        mylist.append(newitem)
        // add an event listener to the delete button that removes the li element when clicked
        deletebutton.addEventListener("click", () => {
            let chapter = newitem.getAttribute("chapter")
            chapterList = chapterList.filter( x => x != chapter)
            updateLocalStorage()
            newitem.remove()
            // send the focus to the input element
            favchap.focus() //sends cursor to favchap textbox
        })
}
    //getElementById makes it so you dont have a #   use -> ("list")

//Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.
addbutton.addEventListener("click", () => {

    // In the click event function block {...}, do the following:
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block, 
    //otherwise provide a message or at least do nothing and return the .focus() to the input field.
    if (favchap.value == ""){
        console.log("You didn't type anything!") // do this instead of alerts
        favchap.focus();
        return;
    }

    //add item from user
    addItem(favchap.value)
    //update the internal list
    chapterList.push(favchap.value) //.push adds item to the end of the list
    //save to local storage
    updateLocalStorage()
    
    // change the input value to nothing or the empty string to clean up the interface for the user
    favchap.value = ""
})
