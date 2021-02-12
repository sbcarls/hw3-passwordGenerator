// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let newPassword = "";
  let options = [];
  const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const special = ["!", "@", "#", "$", "%", "^", "&", "*", "?",];
  const numberChars = ["0", "1"];

  const numChars = prompt("How many characters do you want in your password?");
  if(numChars) options = options.concat(numberChars);
  //console.log(numChars);

  const specialChars = confirm("DO you want special characters in your password?");
  if(specialChars) options = options.concat(special);
  //console.log(specialChars);

  const lowerCase = confirm("Do you want lowercase characters in your password??");
  if(lowerCase) options = options.concat(lowerLetters);
  //console.log(lowerCase);

  const upperCase = confirm("Do you want uppercase characters in your password?");
  if(upperCase) options = options.concat(upperLetters);
  //console.log(upperCase);

  for (let i = 0; i < numChars; i++){
    const character = Math.floor(Math.random()*);
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);