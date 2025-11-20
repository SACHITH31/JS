// The primitive data types in JAVA SCRIPT are:
// 1.Number (can have only 16 digits more than this will provide the wrong value)
// 2.string
// 3.boolean
// 4.undefined
// 5.null
// 6.bigint (for longer number which contains 16< and we have to add 'n' at the last of the number)
// 7.symbol


// console.log(typeof(1))

// console.log(typeof(true))

//strings:
let type1 = 'abc' //using single quote
let type2 = "abc" //using double quotes
let type3 = `abc` //using backtick

//string to number
// type 1: 
let myNum = '100'
console.log(typeof myNum) //string
console.log(typeof +myNum) // number
//**whenever non convertable numbers are tries to get converted into numbers then it returns Nan(Not a Number) but type is number only. 
//type2: 
console.log(parseInt('123abc')) // 123
console.log(parseInt('abc123')) // Nan
console.log(parseInt('1a2b33')) // 1

//number to string
console.log(typeof (100 + '')) // string


//Boolean: true or false
