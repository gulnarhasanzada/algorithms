// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //**First */
   // return str === str.split('').reverse().join('')

   //**Second  - not an ideal solution, because of double checking*/
   return str.split('').every((char, i)=> char === str[str.length - i - 1])
}

module.exports = palindrome;
