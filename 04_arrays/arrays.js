//arrays in js
const fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);
console.log("First fruit:", fruits[0]); //accessing first element
console.log("Last fruit:", fruits[fruits.length - 1]); //accessing last element

//to add a new element to an array we can use push() method
fruits.push("grape");
console.log("After adding grape:", fruits);

//to remove the last element from an array we can use pop() method
const removedFruit = fruits.pop();
console.log("After removing last fruit:", fruits);
console.log("Removed fruit:", removedFruit);
//can we give index to pop method to remove specific element? No, pop() always removes the last element.

//to remove the first element from an array we can use shift() method
const firstFruit = fruits.shift();
console.log("After removing first fruit:", fruits);
console.log("Removed first fruit:", firstFruit);    

//to add a new element to the beginning of an array we can use unshift() method
fruits.unshift("kiwi");
console.log("After adding kiwi to the beginning:", fruits); 

//to find the index of an element in an array we can use indexOf() method
const index = fruits.indexOf("banana");
console.log("Index of banana:", index); //if element not found it returns -1

//to check if an element exists in an array we can use includes() method
const hasMango = fruits.includes("mango");
console.log("Does the array include mango?", hasMango); //true or false

//to loop through an array we can use for loop or for...of loop
console.log("Looping through the array:");
for (let fruit of fruits) {
    console.log(fruit);
}
//to get a subarray from an array we can use slice() method
const citrusFruits = fruits.slice(1, 3); //from index 1 to index 3 (not including index 3)
console.log("Citrus fruits (slice):", citrusFruits); //output: [ 'banana', 'orange' ]

//to modify an array we can use splice() method
fruits.splice(2, 1, "peach", "plum"); //at index 2 remove 1 element and add "peach" and "plum"
console.log("After splice:", fruits); //output: [ 'kiwi', 'banana', 'peach', 'plum', 'mango', 'grape' ] 

//to concatenate two arrays we can use concat() method
const tropicalFruits = ["pineapple", "papaya"];
const allFruits = fruits.concat(tropicalFruits);
console.log("All fruits (concat):", allFruits);

//to convert an array to a string we can use join() method
const fruitString = allFruits.join(", "); //explanation: joins all elements of the array into a string, separated by ", "
console.log("Fruits as a string (join):", fruitString);

//to sort an array we can use sort() method
allFruits.sort();
console.log("Sorted fruits:", allFruits);       

//to reverse an array we can use reverse() method
allFruits.reverse();
console.log("Reversed fruits:", allFruits);

//summarize array methods
console.log("Array Methods Summary:");
console.log("push(): Add element to end"); 
console.log("pop(): Remove element from end");
console.log("shift(): Remove element from start");
console.log("unshift(): Add element to start");
console.log("indexOf(): Find index of element");
console.log("includes(): Check if element exists");
console.log("slice(): Get subarray");
console.log("splice(): Modify array");
console.log("concat(): Concatenate arrays");
console.log("join(): Convert array to string");
console.log("sort(): Sort array");
console.log("reverse(): Reverse array");
//end of arrays.js


//splice syntax: array.splice(start, deleteCount, item1, item2, ...)
//start: index to start changing the array
//deleteCount: number of elements to remove from start index
//item1, item2, ...: elements to add to the array starting from start index
//if deleteCount is 0, no elements are removed
//if deleteCount is greater than the number of elements from start index to end of array, all elements from start index to end of array are removed/ example below
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 10, 6, 7); //at index 2 remove 10 elements (but only 3 elements exist from index 2 to end) and add 6 and 7
console.log("After splice with large deleteCount:", arr); //output: [ 1, 2, 6, 7 ]


const anArray = [1, 2, 3, 4, 5];
console.log(anArray);
console.log(anArray.join(", ")) //join method converts array to string
console.log(Array(anArray.join(", "))) //Array() constructor converts string to array but each character becomes an element of the array
//the difference is that join method joins all elements of the array into a string, separated by ", "
//Array() constructor converts string to array but each character becomes an element of the array
