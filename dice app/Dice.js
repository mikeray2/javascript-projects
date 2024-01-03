//import images from ('./images')

let randomNumber1 = 1;
let randomNumber2 = 1;

const rollButton = document.getElementById("roll");

const myImage = document.getElementById("myImage1");

// myImage.setAttribute("src", `./images/dice${randomNumber1}.png`);

const myImage2 = document.getElementById("myImage2");

function generateRandomNumber() {
  console.log("here");
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  myImage.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  myImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

rollButton.addEventListener("click", () => generateRandomNumber());
