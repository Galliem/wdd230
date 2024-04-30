
//sets the current year
let year = new Date().getFullYear();
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}`

//sets the last modified date
let lastModifiedParagraph = document.getElementById("lastModified") // could use querySelector or getElementById
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`
