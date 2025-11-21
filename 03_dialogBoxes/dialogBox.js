// about the dialog box

// alert box: which only shows a message
alert("This is an alert box!");

// confirm box: which returns true or false
let userResponse = confirm("Do you want to proceed?");
if (userResponse) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the action.");
}

// prompt box: which asks for user input and returns the input value which is a string
let userName = prompt("Please enter your name:", "Guest");
if (userName !== null) {
    console.log("Hello, " + userName + "!");
}   else {
    console.log("User canceled the prompt.");
}