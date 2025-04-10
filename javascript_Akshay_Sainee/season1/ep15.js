//This uses console API and it internally makes a call to log something inside console
//Console API is plugged through window to the code
console.log("Start");

//It registers a callback with the given delay
setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");
 