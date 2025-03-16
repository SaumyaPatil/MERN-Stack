//let and const declarations are hoisted but are hoisted differently than var declarations
//These are in TDZ for time being.

//var declarations are also allocated memory but they are stored in different memory space than global. And this memory space cannot be accessed unless you initialise it with some value.
//TDZ is the time since the let declaration was hoisted and value was put into it.

// console.log(a);     //Throws a reference error since the declaration is not attached to global scope. 
// console.log(b);
// console.log(c);     //Throws a reference error since the declaration is no where initialised in the global scope.
// let a = 10;
// var b = 20;
// console.log(a);
// console.log(b);

// These point to location in the global scope. It gives undefined in case of let and const and variable that are not ever declared.
// console.log(window.a);
// console.log(this.a);

// inke internal working jaano
// This throws syntax error - doesnt even execute a single line of code.
// console.log("Hii this is my code!");
// let a = 30;
// let a = 20;
// Same name in same scope is not allowed.
// let b = 40;
// var b = 50;
//in case of var it is allowed
// var k = 20;
// var k = 10;

//You have to initalise c then and there otherwise it throws syntax error.
// const c = 30;

//Doing this will throw type error - assign to const variable
// c = 20;

//use const otherwise let otherwise var
//Shrink the TDZ window to zero by moving the declarations and initialisations at the top.

//When we set the loop to false even then it is accessible?
// function test() {
//     if (false) {
//         var x = 5;
//         console.log("Hii!");
//     }
//     console.log(x);
// }
// test();
