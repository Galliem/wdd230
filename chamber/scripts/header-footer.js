let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

//hamberger menu
let menubutton = document.getElementById("menu")
let nav = document.getElementById("nav ul")
menubutton.addEventListener("click", () =>{
    menubutton.classList.toggle("open")
    nav.classList.toggle("open")
})

//dark mode
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty(`--text-color`, `white`);
        document.documentElement.style.setProperty(`--background-color`, `#0D0221`);
        document.documentElement.style.setProperty(`--accent-color`, `#D36135`);
        document.documentElement.style.setProperty(`--header-color`, `#E6AA668`);
        document.documentElement.style.setProperty(`--nav-color`, `#717EC3`);
        document.documentElement.style.setProperty(`--inv-text-color`, `#0D0221`);
        document.documentElement.style.setProperty(`--card-color`, `#0D0221`);
    }
    else{
        document.documentElement.style.setProperty(`--text-color`, `#0D0221`);
        document.documentElement.style.setProperty(`--background-color`, `#ECE4B7`);
        document.documentElement.style.setProperty(`--accent-color`, `#D36135`);
        document.documentElement.style.setProperty(`--header-color`, `#E6AA68`);
        document.documentElement.style.setProperty(`--nav-color`, `#717EC3`);
        document.documentElement.style.setProperty(`--inv-text-color`, `white`);
        document.documentElement.style.setProperty(`--card-color`, `#0D0221`);
    }
})