// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, str="") {
    // for (let i = 0; i < n; i++) {
    //     let str ="";
    //     for (let j = 0; j < 2*n-1; j++) {
    //         if(j <= Math.floor((2*n-1)/2) +i && j >= Math.floor((2*n-1)/2)-i){
    //             str+="#";
    //         }else{
    //             str+=" ";
    //         }
    //     } 
    //     console.log(str)   
    // }
    
    if(row === n){
        return;
    }

    if(str.length === 2*n -1){
        console.log(str)
        return pyramid(n, row+1)
    }

    if(str.length <= Math.floor((2*n-1)/2) +row && str.length >= Math.floor((2*n-1)/2)-row){
        str+="#";
    }else{
        str+=" ";
    }

    pyramid(n, row, str)
}

module.exports = pyramid;
