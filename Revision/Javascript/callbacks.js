//What is a callback function in JS?
//Functions that are passed as arguements to any function are callback functions.
//Callback functions give access to async world in sync single threaded language.
setTimeout(function(){
    console.log("Timer");
}, 5000);

function x(y){
    console.log("x");
}
x(function y(){
    console.log("y");
});

//JS is a sync and single threaded language.


