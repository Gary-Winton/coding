function myFunc7(subarr, numitem, item){
    return Array(subarr).fill(Array(numitem).fill(item))
}

console.log(myFunc7(5, 1, 6))



function myFunc8(str){
    return {
        'letter' : (str.match(/[a-z]/gi) || []).length,
        'numbers' : (str.match(/\d/g) || []).length
    }
}
console.log(myFunc8("Hello World!"));
console.log(myFunc8("SDV503"));

