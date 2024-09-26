var randomNumber_1 = Math.floor(Math.random() * 6 + 1); // 1-6
var randomImage_1 = "dice" + randomNumber_1 + ".png"; // dice1.png - dice6.png
var randomImageSource_1 = "img/" + randomImage_1; // img/dice1.png - img/dice6.png
var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src", randomImageSource_1);

var randomNumber_2 = Math.floor(Math.random() * 6 + 1);
var randomImage_2 = "dice" + randomNumber_2 + ".png";
var randomImageSource_2 = "img/" + randomImage_2;
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src", randomImageSource_2);

if (randomNumber_1 > randomNumber_2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber_2 > randomNumber_1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
