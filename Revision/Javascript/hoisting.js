//Code of video
// getName();
// getName2();

// var x = 10;
// function getName(){                 //This behaves like a function
//   console.log("Namaste JavaScript!");
// }

// var getName2 = () =>{               //This behaves like any other variable
//   console.log("Namaste JavaScript 2");
// }

// var getName3 = function(){          //This behaves like any other variable
//   console.log("Namaste JavaScript 3");
// }

// console.log(x);
// console.log(getName);
// console.log(getName2);

// getName();
// getName2();

//Second Example
// getName();

// function getName(){          //function declarations and definations are hoisted but those assigned to variables are not hoisted just the variables are hoisted and init with undefined.
//   console.log("Hie");
// }

// var getName = () =>{         //When this line is encountered, the value of getName is over written, if you use let here, it throws error as we cannot define same
//   console.log("Hie2");
// }

// getName();

//Third Example
// console.log(a);      //declarations are hoisted
// var a = 10;          //initialise
// var a = 20;          //over-writes
// console.log(a);      //'var' does not create a new variable but simply reassigns it. Therefore it can be re-declared in the same scope

//Q1. 
// console.log(a);  //Can access 'a' before initialisation as it is hoisted with undefined place value
// var a = 5;  
// console.log(b);   //Cannot access 'b' before initialisation as it is in TDZ
// let b = 10;  
// console.log(c);  //Cannot access 'c' before initialisation as it is in TDZ
// const c = 15;

//Q2.
// sayHello();       //functions are fully hoisted 
// function sayHello() {
//     console.log("Hello, World!");
// }
// greet();        //Just the var is hoisted as undefined not the function
// var greet = function() {
//     console.log("Good Morning!");
// };

//Q3.
// function testHoisting() {
//     console.log(x);      //undefined, as var declaration is hoisted at the top of its scope
//     var x = 20;
//     console.log(x);          //20
// }
// testHoisting();

//Q4.
// {
//     console.log(x);     //These are hoisted but not initalised so throws a ref error
//     let x = 10;
// }


//Q5.
// var a = 1;
// function outer() {
//     console.log(a);    //undefined - It looks for 'a' in its local memory first which is hoisted at the top of their scope but is undefined
//     var a = 2;
//     function inner() {
//         console.log(a);     //2
//     }
//     inner();
// }
// outer();

//Q6. - Hoisting in for loops
// var is function-scoped, so all setTimeout callbacks capture the same i (which becomes 3 after the loop ends).
// Since all setTimeout calls execute after the loop, they all print 3 (final value of i).
// for (var i = 0; i < 3; i++) {             //var i is hoisted globally - therefore prints final value of i that is 3
//     setTimeout(() => console.log(i), 1000);
// }

// ✔ let creates a block-scoped variable.
// ✔ Each iteration of for creates a new i, so each callback captures a different i.
// ✔ This ensures that when setTimeout runs, it logs the correct value of i at that moment.
// for(let i=0; i<3; i++){                  //What happens here?
//     setTimeout(() => console.log(i), 1000);
// }

// Fix for var using IIFE (Immediately Invoked Function Expression):
// for(var i=0; i<3; i++){                  
//     (function(i){ 
//         setTimeout(() => console.log(i), 1000);
//     })(i);
// }

// let creates a new i for each iteration (block-scoped) → Correct output 0, 1, 2.
// var creates a single i for all iterations → Incorrect output 3, 3, 3.
// Asynchronous Behavior: setTimeout registers callbacks, and the Event Loop executes them after 1000ms.
// Closure Fix: If using var, we can wrap it inside an IIFE to capture the correct value.


//Q7.
// console.log(myFunc());       //Hello

// function myFunc() {
//     return "Hello!";
// }

// console.log(myFunc2());       //Cannot invoke function expression before initialisation

// var myFunc2 = function() {
//     return "Hi!";
// };

// Hoisting Phase - Internal implementation
//   function getName() {   // ✅ Function Declaration (Hoisted Completely)
//     console.log("Hie");
//   }
  
//   var getName; // ✅ Hoisted as 'undefined' (since it's declared with var) - getName is redeclared (but no effect since function declaration already exists)
  
//   // Execution Phase
//   getName(); // ❓ Which function will run? - calls hoisted function declaration
  
//   getName = () => { // ✅ This is an assignment (not hoisted)    
//     console.log("Hie2");
//   };
  
//   getName(); // ✅ Calls arrow function now
  

//Advanced questions
//Q1. Hoisting with multiple var declarations
// console.log(foo);     //Global variable is considered
// var foo = 10;
// function bar() {
//     console.log(foo);
//     var foo = 20;
//     console.log(foo);      //shadowing - function scope variable will be considered
// }
// bar();
// console.log(foo);

//Q2. Function hoisting and over-riding - what happens here?
// foo();

// function foo() {
//     console.log("Function 1");
// }

// var foo = function() {
//     console.log("Function 2");
// };

// foo();

//Q3. let and const in nested blocks
// let x = 5;
// {
//     console.log(x);
//     let x = 10;
//     console.log(x);
// }

//Q4. Hoisting inside functions
// var x = 10;
// function outer() {
//     console.log(x);
//     var x = 20;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }

// outer();
// console.log(x);

//Q5. Function expressions vs declarations in hoisting
// console.log(typeof foo);      //function is a subtype of object type cause they both have same properties. So it gives function but is considered as object itself and not considered a seperate primitive type.
// console.log(typeof bar);

// function foo() {
//     return "I am foo";
// }

// var bar = function() {
//     return "I am bar";
// };

//Q6. Hoisting with arrow functions and this context.
// console.log(foo());

// var foo = () => "Arrow function";

// function foo() {
//     return "Regular function";
// }

//Q7.
// foo();
// var foo = function() {
//     console.log("Anonymous function expression");
// };
// function foo() {
//     console.log("Named function declaration");
// }
// foo();

//Q8.
// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// const fn = outer();
// fn();

//Q9.
// function foo() {
//     console.log(1);
// }

// var foo = function() {
//     console.log(2);
// };

// function foo() {
//     console.log(3);
// }

// foo();

//Q10.
console.log(a);
var a = 10;

(function() {
    console.log(a);
    var a = 20;
    console.log(a);
})();

console.log(a);
