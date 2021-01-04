function binary(number){
    
    let num = []; // returns to start

    if (number == 0){
    return 0;
}

while (number > 0) {
    result = number % 2;
    number = Math.floor(number/2);
    console.log(number);
    console.log(result); 
    
    num.unshift(result) // unshift adds to the start of the array
}

console.log(num);
return(num.join(''))
}

console.log(binary(20)); 
console.log(binary(200));
console.log(binary(155));
console.log(binary(255));
console.log(binary(50));
console.log(binary(1000));
console.log(binary(1500));
