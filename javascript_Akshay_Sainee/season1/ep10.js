// function x(){
//     var a = 7;
//     function y(){
//         //It uses lexical scoping and logs 'a' as 7
//         console.log(a);
//     }
//     y();
// }
// x();


//Lets learn closures by returning the function y

//  function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
//  }
//  var z = x();  
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
// z();  

//What if we go one more level deep
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
