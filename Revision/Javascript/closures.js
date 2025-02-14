//Functions bind with its lexical environment.
//Functions can be assigned to variables, can be returned from function, can also be passed as an arguement to the function.
//Where are functions stored? Do they also have scope
//Function even after returning maintain their lexical scope.
//When a function is returned, not just that function is returned but the function alonng with its lexical scope is returned.
//Function along with its lexical scope bundled together forms closure.
//The local variable to be accessed is not garbage collected cause it needs to be used later due to closures.
 

// function x(){
//     var a = 2;
//     function y(){
//         function z(){
//             console.log("Heyy");
//         }
//         console.log(a);
//         return z;
//     }
//     const answer = y();
//     return answer;
// }
// const innerCase = x();
// console.log(innerCase());


// function outerFunction(){
//     function innerFunction(){
//         console.log("Hii");
//     }
//     return innerFunction;
// }

// function secondOuterFunction(){
//     const variableDeclaration = outerFunction();
//     variableDeclaration();
// }

// secondOuterFunction();

function z(){
    var b = 200;
    function x(){
        var a = 9;
        function y(){
            console.log(a, b);
        }
        // y();
        return y;
    }
    const returnAns = x(); //the variable a local to this function is retained cause its scope is functional
    a = 30;    //scope of this variable is global
    return returnAns;
}
const ans = z();
ans();

//Uses of closures
//Module design pattern
//currying
//functions like once
//memoize
//maintaining state in async world
//setTimeouts
//Iterators
//and many more...