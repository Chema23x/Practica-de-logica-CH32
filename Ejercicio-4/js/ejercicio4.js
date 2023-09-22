
/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */
function esPalindromo(str) {
    const palabra = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    const palindromo = palabra.split('').reverse().join('');
    return palabra === palindromo;
  }
  const userInput = prompt("Enter a word or sentence:");
  
  if (userInput) {
    if (esPalindromo(userInput)) {
      console.log(`"${userInput}" es un palindromo.`);
    } else {
      console.log(`"${userInput}" no es un palindromo.`);
    }
  } else {
    console.log("No hay información recibida.");
  }