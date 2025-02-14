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

// function z(){
//     var b = 200;
//     function x(){
//         var a = 9;
//         function y(){
//             console.log(a, b);
//         }
//         // y();
//         return y;
//     }
//     const returnAns = x(); //the variable a local to this function is retained cause its scope is functional
//     a = 30;    //scope of this variable is global
//     return returnAns;
// }
// const ans = z();
// ans();

//Uses of closures
//Module design pattern
//currying
//functions like once
//memoize
//maintaining state in async world
//setTimeouts
//Iterators
//and many more...

//Interview questions related to closures
// function x(){
//     {
//         let i = 1;
//         console.log("Hiii");
//     }
    
//     //Yahaape vo kaise pakdega reference to 'i' since vo kaahi aur execute ho raha hai aur i baadme declare hua hai?
//     setTimeout(function (){
//         console.log(i);
//     }, 3000);
//     let i=5;
//     console.log("Namaste Javascript");
// }
// x();


//Yahaape i reassign nahi hoti kya? This is in contradiction to the previous statement.
// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste Javascript!");
// }
// x();

//Here you have to use var only and print from 1-5 in every 1 second
function j(){
    for(var i=1; i<=5; i++){
        function caller(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        console.log(caller(i));
    }
    console.log("Namaste Javascript!");
}
j();

