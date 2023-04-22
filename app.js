
// array for countdown.
const myArray = [];
for(let i=9; i>0; i-=2){
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