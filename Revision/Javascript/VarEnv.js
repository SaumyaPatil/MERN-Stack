//Function invocation and variable environment
//The execution context is seperately running that is independant of each other. They have their own memory space, virtual environment where they run.

// var x = 10;
// a();
// b();

// console.log(x);

// function a(){
//     var x = 20;
//     console.log(x);
// }

// function b(){
//     var x = 30;
//     console.log(x);
// }

//JS still creates an empty file and sets up the memory space.
//Whenever an execution context is created, this keyword is also created along with it. Even for the functional execution contexts. Also the global space is set up
//At global level this points to global object that is window object in case of browsers. We can access the methods and the variables defined inside the object anywhere in our programme.
//When you run a js programme, a global exection context is created and a global space is created. Any variable or function is said to be in global space if it is not inside any function.
//When you declare a variable or a function then it gets attached to window object and we can access it with window.<variable name>, this.<variable name> or simply by variable name.

var a = 10;
let b = 20;
console.log(window.a);
console.log(this.a);       //The behaviours are different on vs code console and browser console
console.log(window.b);
console.log(this.b);

//JS is loosely typed language, means it is doing a lot of stuff behind the scenes while coercion.
//We should not assign undefined to a variable. Not a good way. Can bring inconsistency in code.