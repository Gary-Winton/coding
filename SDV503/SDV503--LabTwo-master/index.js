
function square(a) {
    var sum = 0 // giving the variable a number
    for(let i =0; i < a.length; i++) { //runs once at the first loop; .length starts at 1; i++ adds 1 number
        sum += Math.pow(a[i], 3)
        console.log(a[i])
    }
    return sum
}
console.log(square([5, 10, 20, 10]))
