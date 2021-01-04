function myFunc(x){
    return x.replace(/[^\w- ]/gi, "")
// these parameters is what makes the code forget about all the extra symbols.
} //x.replaces the variable with what ever is written in the log.
console.log(myFunc("don't(-)y#u(-)agr$e"));

function myFunc2(arr){
    return arr.filter(item => {//arr.filter is what i want to get out of an array
        let placeholder = true
        for(let i = 1; i < item.length; item++) {
            if(item[i] !== item[0]) {
                placeholder =false
// this tells me that if the first one has got no repeating elements then it gets excluded from the list.
            }
        }
        return placeholder
    })
}

function myFunc3(arr){
    return arr.filter(item => item.match(/[0-9]/) !== null)
    // if anything that has a number from 0-9 then it gets extracted from the list in to a final array
}
console.log(myFunc3(["1a", "a", "2b", "b"]))