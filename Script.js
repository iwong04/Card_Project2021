/*function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}*/


function generateShuffled(){
const colours = ["Black","Yellow","Red"]	// creates the array for the colours which are represented in R
const values =[ "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"] // creates the array for the values represented in C
let deck= [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]//blank array

    for (let i = 0; i <colours.length ; i++) { // For loop that creates the array
        for (let j = 0; j < values.length; j++) {
            deck[i][j] = colours[i]+" "+values[j];
        }

    }
    console.log(deck)
let rIndex = null
   let shuffled = new Array(30);
    for (let i = 0; i < colours.length; i++) { // For loop that shuffles the deck
        for (let j = 0; j < values.length; j++) {
            do {
                rIndex = Math.floor(Math.random()*30);
                // random number generator to keeps shuffling until it finds a new spot
            }while (shuffled[rIndex] != null)
            shuffled[rIndex]= deck[i][j];
        }

    }
console.log("shuffling complete")
    return shuffled;
}
function turn() {
let Player1Cards = []
let Player2Cards = []

    let shuffled1 = generateShuffled();
    console.log(shuffled1)
    let turns = 0

    while (turns < 30) {

       // sleep(500)

        document.getElementById("card1").innerText = "Card 1:" + shuffled1[turns]

        document.getElementById("card2").innerText = "Card 2:" + shuffled1[turns + 1]
        const [colour1, value1] = shuffled1[turns].split(" ")
        const [colour2, value2] = shuffled1[turns + 1].split(" ")
        console.log(colour1)


        if (colour1 === "Red" && colour2 === "Black" || colour1 === "Black" && colour2 === "Yellow" || colour1 === "Yellow" && colour2 === "Red") {
            console.log("Player 1 wins")

            Player1Cards.push(shuffled1[turns])
            Player1Cards.push(shuffled1[turns+1])

        } else if (colour1 === colour2) {
            if (value1 > value2) {

                console.log("Player 1 wins")
                Player1Cards.push(shuffled1[turns])
                Player1Cards.push(shuffled1[turns+1])

            } else {
                console.log("Player 2 wins")
                Player2Cards.push(shuffled1[turns])
                Player2Cards.push(shuffled1[turns+1])
            }


        } else {
            console.log("Player 2 wins")
            Player2Cards.push(shuffled1[turns])
            Player2Cards.push(shuffled1[turns+1])
        }
        turns += 2
        document.getElementById("p1Cards").innerText = "Total: " + Player1Cards.length

        document.getElementById("p2Cards").innerText = "Total: " + Player2Cards.length

    }




console.log(Player1Cards)
    console.log(Player2Cards)
    if(Player1Cards.length > Player2Cards.length){
        console.log("P1 Wins")
        document.getElementById("winner").innerText = "Winner: P1"
    }else{
        console.log("P2 Wins")
        document.getElementById("winner").innerText = "Winner: P2"
    }
}







