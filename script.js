/*
  ===<>===<>===<>===<>===<>===<>===
  ===<>===Encryption Engine===<>===
  ===<>===<>===<>===<>===<>===<>===
*/

// Declare All variables
var userInput,
  letter,
  number,
  sliceParam1,
  sliceParam2,
  passEncrypt,
  letterCheck;

// Assigning All variables value
userInput = prompt().toLowerCase();
letter = " abcdefghijklmnopqrstuvwxyz";
number = "000102030405060708091011121314151617181920212223242526";
passEncrypt = "";

// Encryption loop starts here
for (var x = 0; x < userInput.length; x++) {
  letterCheck = userInput.charAt(x);
  sliceParam1 = 0;
  sliceParam2 = 2;
  for (var i = 0; i < letter.length; i++) {
    switch (letterCheck) {
      case letter.charAt(i):
        passEncrypt += number.slice(sliceParam1, sliceParam2);
        break;
    }
    sliceParam1 += 2;
    sliceParam2 += 2;
  }
}

document.write("<div>" + passEncrypt + "</div>");

/*
  ===<>===<>===<>===<>===<>===<>===
  ===<>===Decryption Engine===<>===
  ===<>===<>===<>===<>===<>===<>===
*/

// Declare All variables
var passDecrypt, numberSlicePrm1, numberSlicePrm2;

// Assigning All variables value
passDecrypt = "";
sliceParam1 = 0;
sliceParam2 = 2;
//-> letter = " abcdefghijklmnopqrstuvwxyz";
//-> number = "000102030405060708091011121314151617181920212223242526";

// Decryption loop starts here
for (var x = 0; x < passEncrypt.length; x += 2) {
  letterCheck = passEncrypt.slice(sliceParam1, sliceParam2);
  numberSlicePrm1 = 0;
  numberSlicePrm2 = 2;
  for (var i = 0; i < letter.length; i++) {
    switch (letterCheck) {
      case number.slice(numberSlicePrm1, numberSlicePrm2):
        passDecrypt += letter.charAt(i);
    }
    numberSlicePrm1 += 2;
    numberSlicePrm2 += 2;
  }
  sliceParam1 += 2;
  sliceParam2 += 2;
}

document.write("<div>" + passDecrypt + "</div>");
