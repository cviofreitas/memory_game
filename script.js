const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

const PRESIDENTS = [
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/42_bill_clinton.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/43_george_w_bush.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=1270,953",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/42_bill_clinton.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/43_george_w_bush.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg",
  "https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=1270,953"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
//               COLORS
function shuffle(array) {
  //                9
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    //    7
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    //                  9 or purple
    let temp = array[counter];
//        @index9  = @indexRandomNumber
//           9     =   green
    array[counter] = array[index];
//        green  = purple
    array[index] = temp;
  }

  return array;
  console.log(array)
}
// establishing the new array
let shuffledPresidents = shuffle(PRESIDENTS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForPresidents(presidentArray) {
  for (let president of presidentArray) {
    // create a new div
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const flipped = document.createElement("div");
 // give it a class attribute for the value we are looping over
    newImg.src = president;
    newImg.onselect
    newImg.classList.add('president');
    flipped.classList.add('flipped')
    flipped.innerText = 'FLIP'
    newDiv.classList.add('theCard')

    newDiv.appendChild(newImg);
    newDiv.append(flipped);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  let currentCard = event.target.parentElement;
  if (event.target.className === 'flipped'){
  if (!card1 || !card2){
    currentCard.classList.add("clicked");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }
  if (card1 && card2){
    noClicking = true;
    let image1 =card1.innerHTML;
    let image2 =card2.innerHTML;
    if (image1 === image2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false
  } else {
    setTimeout(function(){
      card1.classList.remove("clicked")
      card2.classList.remove("clicked")
      card1 = null;
      card2 = null;
      noClicking = false;
    }, 1200);
  }


}
}
  // you can use event.target to see which element was clicked

  
}

// when the DOM loads
createDivsForPresidents(shuffledPresidents);

/* */