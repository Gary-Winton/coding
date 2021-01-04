var mark = 57;
var grade

if (mark >= 85 && mark <= 100) {
    grade = "A+"
} else if (mark >= 80 && mark <= 84) {
    grade = "A"
}else if (mark >= 75 && mark <= 79) {
    grade  = "A-"
}else if (mark >= 70 && mark <= 74) {
    grade = "D"
}else if (mark >= 65 && mark <= 69) {
    grade = "B"
}else if (mark >= 50 && mark <= 64) {
    grade = "B-"
}else if (mark >= 55 && mark <= 59) {
    grade = "C+"
}else if (mark >= 50 && mark <= 54) {
    grade = "C"
}else if (mark >= 40 && mark <= 49) {
    grade = "D"
}else if (mark >= 0 && mark <= 39) {
    grade = "E"
}

// A+ A A-

switch (grade){
    case 'A+':
    case 'A':
    case 'A-':
    console.log("Pass with Distinction")
    break;
    // B+ B B-
    case 'B+':
    case 'B':
    case 'B-':
    console.log("Pass with Merit")
    break;
    //C+ C
    case 'B+':
    case 'C+':
    case 'C':
    console.log("Pass")
    break;
    //D E
    case 'D':
    case 'E':
    console.log("Fail")
    break;
}