function cool(fun){
    return fun.map(x => Math.max(...x)) //math.max is pulling the max number
}
console.log(cool([[1,2,3,4,5,], [6,7,8,9], [20, 55, 11]]))



function aaronIsJoiningUs(wood){
    return wood.concat(wood.concat().reverse().slice(1)) //concat = merges, reverse = mirrors, slice = cuts in half
}
console.log(aaronIsJoiningUs([1,2,3,4,5]))  //prints to the console