let passwordBox = document.getElementById("password-el");

let passwordArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "$",
  "@",
  "#",
  "&",
  "%",
];

const button = document.querySelector("button");

// console.log(passwordArray);
let password = [];

function generatePassword() {
  button.disabled = false;
  let randomNumber = 0;
  let i = 0;
  while (i < 10) {
    randomNumber = Math.floor(Math.random() * 67);
    password.push(passwordArray[randomNumber]);
    i++;
  }
  let passwordString = password.join("");
  //console.log(passwordString);
  passwordBox.textContent = "Password: " + passwordString;
  button.disabled = true;
}
