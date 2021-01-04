// Write a function that returns true if an object is empty, and false otherwise.
function myFunc4(obj){
    return !Object.keys(obj).length
}
console.log(myFunc4({icon: 'Hello'}))

// Write a function that converts an object into an array, where each element represents a key-value pair. Return an empty array if the object is empty.
function myFunc5(obj){
    return Object.entries(obj)
}
console.log(myFunc5({ utes: 25, boats: 15 }))

// Create a function that takes an object and returns the keys and values as separate arrays.
function myFunc6(obj) {
    let item = Object.keys(obj)
    return [item, item.map( item => obj[item])]
}
console.log(myFunc6({ c: 50, w: 25, i: 12.5 }))