// // function slowHash(key) {
// //     for (var i = 0; i < 1000; i++){
// //         console.log("everyday i'm hashing");
// //     }
// //     return(0).
// // }


// let a = 3
// //gives the variable(a) a value
// function addTwo(x) {
//   //gives the function a variable
// let ret = x + 2
// //combines the 2 variables together
// return ret
// //
// }
// let b = addTwo(a)
// //comines the function with the variable as this function is undefined
// console.log(b)
// //gives you the end result

//  let val = 7
//  //
//  function createAdder() {
//    //
//    function addNumbers(a, b) {
//      //
//      let ret = a + b
//      //
//      return ret
//      //
//    }
//    return addNumbers
//    //
//  }
//  let adder = createAdder()
//  //
//  let sum = adder(val, 8)
//  //
//  console.log('example of function returning a function: ', sum)
//  //


//   function createCounter() {
//     // creates a function called createCounter
//      let counter = 0
//      // declares variable with value 0
//      const myFunction = function() {
//        counter = counter + 1
//        return counter
//      }
//      return myFunction
//    }
//    const increment = createCounter()
//    // declaring a new variable
//   const c1 = increment()
//   // makes 1
//   const c2 = increment()
//   // makes 2
//   const c3 = increment()
//   // makes 3
//   console.log('example increment', c1, c2, c3)
//   // puts them all together in an increment order


  function genFunc() {
    yeild 'Bye'
    console.log('First Log!')
    yeild "hi"
    console.log('Second Log!')
    return 'Done!'
  }

  function genOb = genFunc() {
  genOb.next(){
    value: '', done: false
  }
  genOb.next()
  First log! {
    value: '', done: false
  }

  Second log!{
    value: '', done: true
  }
  }

  const genOb = genFunc()
  [...genOb]

  const genOb = genemojis()
  for(let item of genOb){
    console.log(item)
  }