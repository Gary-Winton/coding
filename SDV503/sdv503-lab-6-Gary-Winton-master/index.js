

const numbers = [515, 341, 98, 44, 211] //const is a read only variable
let ascending = [] // let can allow changes to a variable
   console.log(numbers)
function object(array, sort) {
    for(let i = 0; i < array.length; i++){
    console.log(array[i]);
    let arr = (Array.from(String(array[i])));
    console.log(arr.sort());
    
if (sort === 'desc'){
    arr.reverse()
}
    let str = '' 
    for(let i = 0; i < arr.length; i++){
        str += arr[i]
    }
ascending.push(str)
    console.log(str);   
}
console.log(ascending);
}
console.log(object(numbers, 'desc'));

  
  
  

