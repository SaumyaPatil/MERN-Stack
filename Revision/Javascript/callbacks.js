//What is a callback function in JS?
//Functions that are passed as arguements to any function are callback functions.
//Callback functions give access to async world in sync single threaded language.
//Functions have this call stack where the JS code is executed.
setTimeout(function(){
    console.log("Timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

//This event listner will get stored somewhere and when the event occurs, the callback function is automatically called in the call stack.
document.getElementById("clickMe")
.addEventListener("click", function xyz(){
    console.log("Button Clicked!");
});

//JS is a sync and single threaded language.

//Closures demo along with event listners
//We use closures for data hiding - 
function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked!", ++count);
    });
}
attachEventListeners();

//Garbage collection and remove event listners - 
//We need to remove event listners cause they are heavy as they form closure with its outer environment.
//Page can go slow if there are many event listners attached to it due to all these closures sitting in our memory and consuming space.
//We need to remove event listners if not in use as the space consumed by its scope will be garbage collected.



//What is difference between event listners and event handlers?
