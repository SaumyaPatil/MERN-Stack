// function x(){
//     var a = 7;
//     function y(){
//         //It uses lexical scoping and logs a as 7
//         console.log(a);
//     }
//     y();
// }

// x();

//Closure - A function bind together with its lexical environment. Function along with its lexical scope forms a closure.

//Functions can be assigned to variables and also passed as arguements to another functions, and also returned from other functions.

//Lets learn closures by returning the function y

// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
// }

// var z = x();  //Once this line is executed, x is no longer in call stack.
//How does function y behaves in outside of x. Functions when returned still maintain their lexical scope.
//When y was returned not just the function scope but closure was returned. It includes function along with its lexical scope.

// console.log(z);

//Corner cases in closures
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;   
//     return y;
// }

// var z = x();
// console.log(z);  //It prints 100 as a's reference is returned and not the value.
//It means a was still in the memory preserved, when x was gone, it was not garbage collected.


//What if we go one more level deep
//Here it forms closure with a and b variables both. If I return the function y outside, it would retain the values of a and b.
// function z(){
//     var b = 100;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }

// z();

//  Uses of Closures
//  Module Design Pattern
//  Currying
//  Functions like once - something inside the function remembers how many times it has been run.
//  memoize
//  maintaining state in async world
//  setTimeouts
//  Iterators
//  and many more...
