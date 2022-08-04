let randomRest = document.querySelector('#randomRest')
let randomPlace = document.querySelector('#randomPlace')

let restRecommend = ['The Ravenous Pig', 'Kabooki Sushi', 'Mamak Asian Street Food', "Fiddler's Green Irish Pub", 'Le Coq Au Vin']
let placeRecommend = ['Downtown Orlando', 'Lake Eola Park', 'Lou Gardens', 'Orlando City Stadium', 'Walt Disney World', 'Universal Studios Florida']

function restPick () {
    alert(restRecommend[Math.floor(Math.random()*restRecommend.length)])
}

function placePick () {
    alert(placeRecommend[Math.floor(Math.random()*placeRecommend.length)])
}

randomRest.addEventListener('click', restPick)
randomPlace.addEventListener('click', placePick)