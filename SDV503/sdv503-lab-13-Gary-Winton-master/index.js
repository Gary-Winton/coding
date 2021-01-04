function myFunc(myArr, arrLen){
    var newArr = []
    while (myArr.length > 0){
        newArr.push(myArr.splice(0,arrLen))
    }
    return newArr
}
console.log(myFunc([1, 2, 3, 4, 5, 6, 7], 5));


function reverseArray(myRevArray){
    for (var i=0; i < myRevArray.length; i++){
        for (var x =0; x < myRevArray[i].length; x++){
            if (myRevArray[i][x] == 0){
                myRevArray[i][x] = 1
            }
            else{
                myRevArray[i][x] = 0
            }
        }
    }
    return myRevArray

}
console.log(reverseArray([[1, 0, 0],[0, 1, 0],[0, 0, 1]]))