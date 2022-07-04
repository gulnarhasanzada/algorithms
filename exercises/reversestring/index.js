// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //******First */
    //return str.split('').reverse().join('');

    // //******Second */
    // let reversed ="";
    // for(let char of str){
    //     reversed = char + reversed;
    // }
    // return reversed;

    //******Third */
    return str.split('').reduce((newStr, char)=> char + newStr, '')
}


module.exports = reverse;
