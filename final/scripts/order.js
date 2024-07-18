let url = new URL(window.location);
let params  = url.searchParams;
let ship = new Date(year, month, (day + 5))

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

document.querySelector('#firstname').textContent = params.get("firstname");
document.querySelector('#lastname').textContent = params.get("lastname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#street').textContent = params.get("street");
document.querySelector('#city').textContent = params.get("city");
document.querySelector('#state').textContent = params.get("state");
document.querySelector('#zip').textContent = params.get("zip");
document.querySelector('#gift').textContent = params.get("gift");

document.getElementById('ship').textContent = ship;