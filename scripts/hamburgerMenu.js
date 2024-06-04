let menu_button = document.getElementById("menu-button")
let navlist = document.querySelector(`.navigation`)
menu_button.addEventListener('click', () =>{
    menu_button.classList.toggle("open")
    navlist.classList.toggle("open")
})