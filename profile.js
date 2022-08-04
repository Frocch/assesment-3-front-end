let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

function favColor () {
    alert('My favorite color is Blue!')
}

function favPlace () {
    alert('My favorite place is Argentina.')
}
function favRitual () {
    alert('My favorite ritual is for sure my morning ritual, because coffee.')
}

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)