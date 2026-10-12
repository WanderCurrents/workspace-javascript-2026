
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();
var hour = today.getHours();

// display the greeting message
var greetings = "Hi!";
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
if (hour <= 12) {
    greetings = "Good morning!";
}
else {
    greetings = "Good afternoon";
}



// write to the document 
document.write(greetings);