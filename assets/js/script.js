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
  let newPassword = "";
  let options = [];
  let upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const special = ["!", "@", "#", "$", "%", "^", "&", "*", "?",];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //const pwLength = ["0", "1"];

  const length = prompt("How many characters do you want in your password?");
  //if(length) options = options.concat(pwLength);
  //console.log(numChars);

  const specialChars = confirm("Do you want special characters in your password?");
  if(specialChars) options = options.concat(special);
  //console.log(specialChars);

  const lowerCase = confirm("Do you want lowercase characters in your password??");
  if(lowerCase) options = options.concat(lowerLetters);
  //console.log(lowerCase);

  const upperCase = confirm("Do you want uppercase characters in your password?");
  if(upperCase) options = options.concat(upperLetters);
  //console.log(upperCase);

  const nums = confirm("Do you want numbers in your password?");
  if(nums) options = options.concat(nums);

  for (let i = 0; i < length; i++){
    const character = Math.floor(Math.random() * options.length);
    newPassword += options[character];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);