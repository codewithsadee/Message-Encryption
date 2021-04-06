/*=========================================================
===========================================================
=============== Encryption Engine Code ====================
===============================================6/4/2021====
=========================================================*/

// Declare All variables ================================= {
var pass, letterCheck, passDecrypt, passEncrypt, sliceParam;
// }

// Assign All variables value ============================ {
pass = prompt().toLowerCase();
sliceParam = 0;
passEncrypt = "";
passDecrypt = "";
// }

// Encryption Loop Starts here ===================================== {
for (var letterTrans = 0; letterTrans < pass.length; letterTrans++) {
  letterCheck = pass.charAt(letterTrans);
  switch (letterCheck) {
    case " ":
      passEncrypt += "00";
      break;
    case "a":
      passEncrypt += "01";
      break;
    case "b":
      passEncrypt += "02";
      break;
    case "c":
      passEncrypt += "03";
      break;
    case "d":
      passEncrypt += "04";
      break;
    case "e":
      passEncrypt += "05";
      break;
    case "f":
      passEncrypt += "06";
      break;
    case "g":
      passEncrypt += "07";
      break;
    case "h":
      passEncrypt += "08";
      break;
    case "i":
      passEncrypt += "09";
      break;
    case "j":
      passEncrypt += "10";
      break;
    case "k":
      passEncrypt += "11";
      break;
    case "l":
      passEncrypt += "12";
      break;
    case "m":
      passEncrypt += "13";
      break;
    case "n":
      passEncrypt += "14";
      break;
    case "o":
      passEncrypt += "15";
      break;
    case "p":
      passEncrypt += "16";
      break;
    case "q":
      passEncrypt += "17";
      break;
    case "r":
      passEncrypt += "18";
      break;
    case "s":
      passEncrypt += "19";
      break;
    case "t":
      passEncrypt += "20";
      break;
    case "u":
      passEncrypt += "21";
      break;
    case "v":
      passEncrypt += "22";
      break;
    case "w":
      passEncrypt += "23";
      break;
    case "x":
      passEncrypt += "24";
      break;
    case "y":
      passEncrypt += "25";
      break;
    case "z":
      passEncrypt += "26";
      break;
  }
}
// }

document.write("<div>" + passEncrypt + "</div>");

/*=========================================================
===========================================================
=============== Decryption Engine Code ====================
===============================================6/4/2021====
=========================================================*/

letterCheck = "";

// Decryption Loop start ================================= {
for (letterTrans = 2; letterTrans <= passEncrypt.length; letterTrans += 2) {
  letterCheck = passEncrypt.slice(sliceParam, letterTrans);
  switch (letterCheck) {
    case "00":
      passDecrypt += " ";
      break;
    case "01":
      passDecrypt += "a";
      break;
    case "02":
      passDecrypt += "b";
      break;
    case "03":
      passDecrypt += "c";
      break;
    case "04":
      passDecrypt += "d";
      break;
    case "05":
      passDecrypt += "e";
      break;
    case "06":
      passDecrypt += "f";
      break;
    case "07":
      passDecrypt += "g";
      break;
    case "08":
      passDecrypt += "h";
      break;
    case "09":
      passDecrypt += "i";
      break;
    case "10":
      passDecrypt += "j";
      break;
    case "11":
      passDecrypt += "k";
      break;
    case "12":
      passDecrypt += "l";
      break;
    case "13":
      passDecrypt += "m";
      break;
    case "14":
      passDecrypt += "n";
      break;
    case "15":
      passDecrypt += "o";
      break;
    case "16":
      passDecrypt += "p";
      break;
    case "17":
      passDecrypt += "q";
      break;
    case "18":
      passDecrypt += "r";
      break;
    case "19":
      passDecrypt += "s";
      break;
    case "20":
      passDecrypt += "t";
      break;
    case "21":
      passDecrypt += "u";
      break;
    case "22":
      passDecrypt += "v";
      break;
    case "23":
      passDecrypt += "w";
      break;
    case "24":
      passDecrypt += "x";
      break;
    case "25":
      passDecrypt += "y";
      break;
    case "26":
      passDecrypt += "z";
      break;
  }
  sliceParam += 2;
}
// }

document.write("<div>" + passDecrypt + "</div>");
