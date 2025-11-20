// about the dialog box

// alert box
alert("This is an alert box!");

// confirm box
let userResponse = confirm("Do you want to proceed?");
if (userResponse) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the action.");
}
// prompt box
let userName = prompt("Please enter your name:", "Guest");
if (userName !== null) {
    console.log("Hello, " + userName + "!");
}   else {
    console.log("User canceled the prompt.");
}   
