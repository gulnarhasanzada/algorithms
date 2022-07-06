// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let mapA = {};
    let mapB = {};
    let strA = stringA.replace(/[^\w]/g,"").toLowerCase()
    let strB = stringB.replace(/[^\w]/g,"").toLowerCase()
    for(let char of strA){
        mapA[char] = mapA[char]+1 || 1;
    }

    for(let char of strB){
        mapB[char] = mapB[char]+1 || 1;
    }

    if(Object.keys(mapA).length != Object.keys(mapB).length){
        return false;
    }

    for(let el in mapA){
        if(mapA[el] != mapB[el]){
            return false;
        }
    }

    return true;
}

module.exports = anagrams;
