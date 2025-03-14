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
// function j(){
//     for(var i=1; i<=5; i++){
//         function caller(i){
//             setTimeout(function(){
//                 console.log(i);
//             }, i*1000);
//         }
//         console.log(caller(i));
//     }
//     console.log("Namaste Javascript!");
// }
// j();

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()();
//The inner function forms closure with its outer environment but not in any particular sequence or so. 
//So, it forms closure.

//Q. What if we use let instead of var?
//Ans. It still forms closure. It behaves the same way.

//Q. What if we add a parameter to the outer function and try logging it inside of inner function and return the inner function. 
//Ans. It will work the same way as 'b' is a part of the outer environment of inner function.

//Q. If we provide one more level of nesting it will still have access to the lexical environment of outest function.
// function outest(b){
//     var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(a, b, c);
//         }
//         let a = 30;
//         return inner;
//     }
//     return outer;
// }
// var close = outest()("hello world!");
// close();

//Q. If we have a global variable also with conflicting name. What will happen?
//It tries to resolve in the scope chain.
// function outest(b){
//     var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(a, b, c);
//         }
//         let a = 30;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// var close = outest()("hello world!");
// close();

//Uses of closures - find the uses
//It helps in data hiding and encapsulation
//uses of closures
//module design pattern
//currying
//functions like once
//memoize
//maintaining state in async world
//setTimeouts
//Iterators

//Q. Uses of closures in data hiding and encapsulation
// Data hiding means suppose we have a variable, and we want to have some data privicy over it so that other parts of code cannot have access to that particular data.

//Yahaape kya hoga variables ka? - Yaha scope alag hai doono functions ke count ka.
// function counter(){
//     var count = 0;
//     function incrementCounter(){
//         count++;
//         // console.log(count++);
//         console.log(count);
//         console.log(++count);
//         console.log(count);
//     }
//     incrementCounter();
//     count = 30;
//     console.log(count);
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();

// counter();

// let i = 8; 
// while (i <= 10) {
// //   console.log(i);
//   k=10;
//   console.log(k);
//   i++;
// }
// // console.log(i);
// console.log(k);

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

//How to make the above code scalable by not just making it increment counter but also decrement counter.
// function Counter(){
//     var count=0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();

//Disadvantages of closures - 
//Overconsumption of memory. Those closed over variables are not garbage collected till the program expires. 
//If not handled properly it may lead to memory leaks.
//The memory is accumulated overtime and may freez browser if not handled properly.

//Garbage collector - 
//It is a program in JS engine or browser that frees up the unutilised memory.
//JS is high level programming language, so most of the work is done by JS engine. 
//Theres inbuilt garbage collector which frees up the memory.

//In languages like C++, Java, etc. the allocation and deallocation is done manually but is not the case with JS.
//The modern browsers or the V8 engine have smart garbage collection mechanisms where they find that these variables are unreachable and they smartly collects them.
//By smartly collects means if we have some variable that is no longer in use later even after the function is returned, it is garbage collected as it is not accessible by any ways later.


