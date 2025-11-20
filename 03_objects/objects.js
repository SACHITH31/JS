// //objects are created with using {}

// const aPerson = {
//     name: "John",
//     age: 30,
//     isMarried: false,
//     hobbies: ["reading", "traveling", "swimming"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     },
// }
// console.log(aPerson);

// //to access the data from object we can use dot notation or bracket notation
// console.log(aPerson.name);
// console.log(aPerson["age"]);

// //to add a new property to an object
// aPerson.email = "john@gmail.com"
// console.log(aPerson);

// //to delete a property from an object
// delete aPerson.isMarried;
// console.log(aPerson);

// //to loop through an object we can use for in loop
// for (let key in aPerson) {
//     console.log(key, ":", aPerson[key]);
// }

// //to get all the keys of an object we can use Object.keys() method
// const keys = Object.keys(aPerson);
// console.log(keys);

// //to get all the values of an object we can use Object.values() method
// const values = Object.values(aPerson);
// console.log(values);

// //to get all the entries of an object we can use Object.entries() method
// //we use this entries method to convert object into array of arrays and access both key and value at the same time.
// const entries = Object.entries(aPerson);
// console.log("Entries:");
// console.log(entries);

// //to check if a property exists in an object we can use hasOwnProperty() method
// console.log(aPerson.hasOwnProperty("name")); //true

// //to merge two objects we can use Object.assign() method
// const anotherPerson = {
//     name: "Jane",  
//     age: 25,
//     isMarried: true,
//     hobbies: ["dancing", "singing"],   
//     address: {
//         street: "456 Main St",
//         city: "Los Angeles",   
//         state: "CA"
//     },
// }
// const mergedPerson = Object.assign({}, aPerson, anotherPerson);
// // console.log(mergedPerson);  


// console.log("Another Person:");

// //to get the number of properties in an object we can use Object.keys() method and length property
// console.log(Object.keys(anotherPerson).length);
// //console.log(anotherPerson.length); //undefined
// //because object doesn't have length property
// //array has length property


const myObj = {
    'name': 'sachith',
    'age': 19
}

myObj.study = 'Btech'

console.log(myObj)

const keys = Object.keys(myObj)
console.log(`My keys are: ${keys}`)

const values = Object.values(myObj)
console.log(`My values are: ${values}`)

const entries = Object.entries(myObj)
console.log(`My entries are: ${entries}`)

entries.forEach((obj) => {
    console.log(obj)
})
// for (let obj in myObj) {
//     console.log(obj, myObj[obj])
// }