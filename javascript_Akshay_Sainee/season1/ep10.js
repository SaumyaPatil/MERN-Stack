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

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();  //Once this line is executed, x is no longer in call stack.
//How does function y behaves in outside of x. Functions when returned still maintain their lexical scope.
//When y was returned not just the function scope but closure was returned. It includes function along with its lexical scope.

console.log(z);

