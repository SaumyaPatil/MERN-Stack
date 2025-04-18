
//JS for counter functionality
document.addEventListener("DOMContentLoaded", function(){

    //initialise count variable
    let count=0;

    //Get references to the display and button elements
    const counterDisplay = document.getElementById("counter-display");
    const counterButton = document.getElementById("counter-button");

    //Add an event listner to the button
    counterButton.addEventListener("click", function(){
        //Increment the count variable
        count++;

        //Update the display text with new count value
        counterDisplay.textContent = "You cliked ${count} times";
    });

});

