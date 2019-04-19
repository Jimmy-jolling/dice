// store player names in variables
var playerOne = prompt("Player 1:");
var playerTwo = prompt("Player 2:");

//changes player names
document.querySelector(".player1").innerHTML = playerOne;
document.querySelector(".player2").innerHTML = playerTwo;

//function that starts the dice game
function dice() {

//store a random number between 1-6
  var RandomNumber1 = Math.floor(Math.random() * 6 + 1);
  var RandomNumber2 = Math.floor(Math.random() * 6 + 1);

//change the dice image to corrosponding number generated above
  document.querySelector(".img1").setAttribute("src", 'images/dice' + RandomNumber1 + '.png');
  document.querySelector(".img2").setAttribute("src", 'images/dice' + RandomNumber2 + '.png');

// check for draw or who won and change header accordingly
  if (RandomNumber1 === RandomNumber2) {
    document.querySelector(".outcome").innerHTML = "Draw!";
  }
  else if (RandomNumber1 > RandomNumber2) {
    document.querySelector(".outcome").innerHTML = "🚩" + playerOne + " Wins!";
  }
  else {
    document.querySelector(".outcome").innerHTML = playerTwo + " Wins 🚩!";
  }
}
