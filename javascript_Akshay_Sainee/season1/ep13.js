
a();
// b();   //This throws error as it considers b to be a variable untill the line of initialisation hits due to hoisting

//Function Statement aka Function Declaration
function a(){
    console.log("a called");
}
a();

//Function Expression
//Function acts like a value, you can assign a function to a variable
var b = function(){
    console.log("b called");
}
// b();
 
//The major difference between a function statement and a function expression is hoisting, function expression is firstly assigned undefined untill it hits the line of initialisation.

//Anonymous Functions - 
//Function without a name is anonymous function
//It does not have its own identity
//Function should have a name, so if you write anonymous function it will throw error as it is a nameless function statement.
//Anonymous functions are used at a place where functions are used as values
//Functions are like heart of JS. Can be assigned to a variable

// function(){

// }

//Named function expression
var b = function xyz(){
    console.log("Hello!");
    console.log(xyz);
}

b(); //This will work fine
// xyz(); //Throws error that xyz is not defined as xyz is not created in the outer scope, it is a local variable.


//Difference between parameters and arguements
//The variables here are parameters and these are local to the function
var b = function(param1, param2){
    console.log(param1, param2);
}
b(1, 2); //These are arguements


//First class functions - the ability of functions to be used as values
//Functions can be passed as arguements. We can declare the function and pass the function name
//We can also return a function from a function. (both named and anonymous)

//It is a programming concept in lot of other languages also.
var v = function(param1){
    console.log(param1);

    return function(){

    }
}
console.log(v(function(){

}));

//Functions are first class citizens means the same thing that they have the ability to be used as values.


//What if we assign functions to let or const variable, they will behavee the same way as normal let and const variables. They will be in TDZ untill the line of declaration is encountered.


//Function statements, declarations and expressions can be written using arrow functions which is part of ES6 introduced in 2015.
//let and const is also feature of ES6

