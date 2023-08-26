// let homeCount = document.getElementById("home-count")
let homeScore = 0
let homeOne = homeScore + 1
let homeTwo = homeScore + 2
let homeThree = homeScore + 3

let homeCount = document.getElementById("home-count")

function add1() {
   homeScore = homeScore + 1
   homeCount.innerText = homeScore
   console.log(homeScore)
}
add1()


function add2() {
    homeScore = homeScore + 2
    homeCount.innerText = homeScore
    console.log(homeScore)
}



function add3() {
    homeScore = homeScore + 3
    homeCount.innerText = homeScore
    console.log(homeScore)     
}

let guestScore = 0
let guestOne = guestScore + 1
let guestTwo = guestScore + 2
let guestThree = guestScore + 3

let guestCount = document.getElementById("guest-count")

function plus1() {
   guestScore = guestScore + 1
   guestCount.innerText = guestScore
   console.log(guestScore)
}



function plus2() {
    guestScore = guestScore + 2
    guestCount.innerText = guestScore
    console.log(guestScore)
}



function plus3() {
    guestScore = guestScore + 3
    guestCount.innerText = guestScore
    console.log(guestScore)     
}


