
// array for countdown.
const myArray = [];
for(let i=19; i>0; i-=2){
    myArray.push(i);
}

// HTML element where the countdown will be displayed.
const countdownElement = document.getElementById("countdown");

// Create a function to display the next countdown value
function countdown() {
    //Get the next value from the array.
    const value = myArray.shift();
    //Display the value in the HTML element
    countdownElement.innerHTML = value;
    // Check if there are any more values in the array.
    if(myArray.length > 0) {
        // If there are, set a timeout to display the next value.
        setTimeout(countdown, 1000);
    } else {
        //IF there aren't, display a message that the countdown has fin.
        countdownElement.innerHTML = "Countdown finished!";
    }
}
// Start the countdown;
countdown();

alert("Hello, World!");

// New task = define contacts array for profile lookup
const contacts = [ {
    firstName:"Akira", 
    lastName:"Laini", 
    number:"0543236543",
    likes:["Pizza", "Coding", "Brownie cake"], },
    {
    firstName: "Sherlock",
    lastName:"Holmes",
    number:"0487345643",
    likes:["Intriguing cases", "violin"], },
    {
    firstName: "Kristian",
    lastName:"Vos",
    number:"unknown",
    likes:["JavaScript","Gaming","Foxes"],
    },
];
// Function to lookup a contact's profile information
function lookUpProfile(name, prop){
    for(let i=0;i<contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No scuh property";
            }
        }
    }
    return "No such contact";
}
// Display it ;
const resultElement = document.getElementById("result");
resultElement.innerHTML = lookUpProfile("Akira", "likes");

//====================================================================
function convertToInteger(str) {
    if(/[^01]/.test(str)) {
        return NaN;
    } else {
    return parseInt(str, 2);
    }
}
function convertToDecimal() {
    const binaryInput = document.getElementById("binary").value;
    const decimalOutput = convertToInteger(binaryInput);
    document.getElementById("risultato").innerHTML= decimalOutput;
}