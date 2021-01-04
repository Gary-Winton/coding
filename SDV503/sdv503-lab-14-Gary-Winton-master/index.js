//Create a function that takes two dates and returns the number of days between the first and second date.

// myFunction(
//     new Date("June 15, 2020"),
//     new Date("June 20, 2020")
//   ) ➞ 5
//     MyFunction(
//     new Date("December 28, 2019"),
//     new Date("January 1, 2020")
//   ) ➞ 4

function dateDiff(date1, date2){

    var dt1 = new Date(date1)
    var dt2 = new Date(date2)

    var Difference_In_Time = dt2.getTime() - dt1.getTime() // getTime converts date to a time number thus allowing us to subtract
    var dateDiffDays = Difference_In_Time / (1000 * 3600 * 24) // math to convert time back to a date format

    return dateDiffDays

}
console.log(dateDiff("June 15, 2020", "June 20, 2020"))
console.log(dateDiff("December 28, 2019", "January 1, 2020"))