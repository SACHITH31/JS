var firstName = "uchiha"
let lastName = "obito"
let age = 19
const yearOfBirth = 2006

let userIntro = "My name is " + firstName + ' ' + lastName

//code execution has 2 phases they are: Memory allocation phase, and Execution phase
// First in memory phase is allocated with undefined value and in this phase it only checks for let, var, const only if other than this is there then it will skip that particular line
// Second is execution phase where in this phase the undefined value gets allocated with actual values.

let a;
let b;
console.log(a, b) //undefined undefined

//EXPLANATION: 
//Here we did not initialized any values to the a and b, so in memory allocation phase this values get allocated with value undefined, and after this phase in execution phase the values gets allocated to the variables so here a and b values don't have any values so the first value which is undefined gets displayed.