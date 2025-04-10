//Callback functions

// setTimeout(function(){
//     console.log("timer");
// }, 2000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });


//How do event listners look inside the dev tools
//Everytime you click the button, the callback function that is stored somewhere is pushed in the callstack and executed.

//Here, an eventlistner is added to the button with id clickme.
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button Clicked!");
// });


//Closures along with event listners

function closureDemo(){
    var count = 0;
    window.document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked!", ++count);
    })
}

closureDemo();

//You will find event listners in the elements tab. There you will find scope of the handler which is the callback function. 

//Garbage collection and remove event listners
//Why do we need to remove event listners?
//They are heavy meaning it takes memory. In the above code, the function forms closure with variable count. And even if the call stack is empty, the value of count is not freed up cause you never know when the user will click the button.

//If there are many event listners there consuming memory then the page goes very slow due to scopes and closures.
//When you remove event listners the variables are garbage collected. 
