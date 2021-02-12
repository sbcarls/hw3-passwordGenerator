// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  const newPassword = "";
  const options = [];
  const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const special = ["!", "@", "#", "$", "%", "^", "&", "*", "?",];
  const pwLength = ["0", "1"];

  const length = prompt("How many characters do you want in your password?");
  if(length) options = options.concat(pwLength);
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
    const character = Math.floor(Math.random() * options.length);
    newPassword += options[character];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);