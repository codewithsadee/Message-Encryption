var userInput, letterCollect, letters;
userInput = prompt("Enter your password").toLowerCase();
letterCollect = "";
for (x = 0; x < userInput.length; x++) {
  letters = userInput.charAt(x);
  if (letters == "a") {
    letterCollect += "01";
  } else if (letters == "b") {
    letterCollect += "02";
  } else if (letters == "c") {
    letterCollect += "03";
  }
  if (letters == "d") {
    letterCollect += "04";
  } else if (letters == "e") {
    letterCollect += "05";
  } else if (letters == "f") {
    letterCollect += "06";
  }
  if (letters == "g") {
    letterCollect += "07";
  } else if (letters == "h") {
    letterCollect += "08";
  } else if (letters == "i") {
    letterCollect += "09";
  }
  if (letters == "j") {
    letterCollect += "10";
  } else if (letters == "k") {
    letterCollect += "11";
  } else if (letters == "l") {
    letterCollect += "12";
  }
  if (letters == "m") {
    letterCollect += "13";
  } else if (letters == "n") {
    letterCollect += "14";
  } else if (letters == "o") {
    letterCollect += "15";
  }
  if (letters == "p") {
    letterCollect += "16";
  } else if (letters == "q") {
    letterCollect += "17";
  } else if (letters == "r") {
    letterCollect += "18";
  }
  if (letters == "s") {
    letterCollect += "19";
  } else if (letters == "t") {
    letterCollect += "20";
  } else if (letters == "u") {
    letterCollect += "21";
  }
  if (letters == "v") {
    letterCollect += "22";
  } else if (letters == "w") {
    letterCollect += "23";
  } else if (letters == "x") {
    letterCollect += "24";
  }
  if (letters == "y") {
    letterCollect += "25";
  } else if (letters == "z") {
    letterCollect += "26";
  }
}
document.write(
  '<div class ="message"> Your password Encrypt is </div>' +
    '<div class ="letterBox">' +
    letterCollect +
    "</div>"
);
