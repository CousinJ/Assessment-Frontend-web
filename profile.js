let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")


function colorFn() {
    alert("My favorite color is Red.")
}

function placeFn() {
    alert("My favorite place is a tropical island with nobody around.")
}

function ritualFn() {
    alert("My favorite ritual is watching youtube videos before sleeping.")
}

colorBtn.addEventListener('click', colorFn)
placeBtn.addEventListener('click', placeFn)
ritualBtn.addEventListener('click', ritualFn)