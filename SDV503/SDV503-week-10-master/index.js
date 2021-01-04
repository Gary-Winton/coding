// Number
/*
32-bit floating-point

0.2345 float c++
0.2345 var js

*/

//Math.floor - check MDN

Math.floor(11.07)

//math.round -

Math.round(1.38)

//math.ceil

Math.ceil(0.38)

//math.random()

console.log(Math.random(357) * 100)

//math.floor
//math.round
//math.random
//math.ceil

//call an API for google maps and you want to show some dummy data
// for your lats and longs on the map you can use math.random() in this case

// strings 

'Gary'.charAt(1) 
//.charAT(index) 
'YouTube'.substring(3,5)
 //.substring(startIndex, endIndex)
'Celeste'.substring(4) 
// Is returning all values for the specified
//start position until the end.

var a = 'aaa'
var b = 'bb'

console.log(a < b)
console.log(a.length)

// whats the outcome of a < b 

//indexOf('string')
'Gary SDV'.indexOf('Gary')
// the first word is a string but is case sensitive

function findInString(x, y) {
    return x.indexOf(y)
}

findInString('Gary', 'z')

// find a certain letter in large string

const string = 'Hello World is an old way to print stings in your console'

var count = 0

var find = str.indexOf('a')

while (find !== -1) {
count++
find = str.indexOf('a', find+1)
}

console.log(count)// refactor with methods

// startsWith  endsWith() 

// 'SDV NMIT'startsWith ('SDV')
// 'SDV NMIT'.endsWith('NMIT')








