
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


//First class functions
//Functions can be passed as arguements. We can declare the function and pass the function name
var v = function(param1){
    console.log(param1);
}
v(function(){

})

