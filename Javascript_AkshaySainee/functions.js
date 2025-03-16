
// a();
// b();

//Hoisting is the major difference between the two below.
//function statement aka function declaration
// function a(){
//     console.log("a called");
// }
// a();

// //function expression
// var b = function (){
//     console.log("b called");
// }
// b();

//anonymous function - It has no identity of its own. It results out to be syntax error. 
//As per ES6 spec, function should have name of its own.
// function (){
//     console.log("Hii");
// }

//named function expression
var b = function xyz(){
    console.log("Hii");
}
xyz(); //This results out to be an error since xyz is not defined in global scope but is local to the variable 'b'.

//difference between parameters and arguements
//The identifiers or the values that the function gets are parameters and those passed are arguements.


//first class functions - Ability of functions to be used as values and passed as arguements or returned returned value is known is first class functions.
//Functions are the heart of JS and can be passed as arguements to any function. 
var b = function (param1){    //if you use let or const in place of var, these are treated same as any let or const variables
    return function xyz(){

    }
}
console.log(b());  //This is perfectly valid. We can return anonymous functions or named functions both.
//first class citizens - first class functions

//arrow functions
//Functions in above forms can be written using arrow functions. These are part of ES6.

