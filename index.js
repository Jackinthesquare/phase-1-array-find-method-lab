// code your solution here
const superbowlWin = (arr) => {
    const hasWon2 = arr.find(el => el.result === 'W')



    // function hasWin (ob) {
    //     return ob.result === 'W'
    // }
    // const hasWon = arr.find(hasWin)
    return hasWon2 ? hasWon2.year : hasWon2


    // if (hasWon){
    //     return hasWon.year
    // }
    // else{
    //     return hasWon
    // }



    // if (record.result === 'W') {
    //     return record.year
    // }
    // else {
    //     return undefined
    // }
}

// record.find(superbowlWin)