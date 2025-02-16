// Web APIs are some super powers of browsers that it gives access to the JS engine.

//setTimeout(), DOM APIs, fetch(), local storage, console, location - these are not a part of JS
//These are the web apis that js engine can get access through global object which is window in case of browsers.

//
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb(){
    console.log("Callback");
});

console.log("End");

