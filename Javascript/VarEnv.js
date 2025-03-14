// //Function invocation and variable environment
// //The execution context is seperately running that is independant of each other. They have their own memory space, virtual environment where they run.

// // var x = 10;
// // a();
// // b();

// // console.log(x);

// // function a(){
// //     var x = 20;
// //     console.log(x);
// // }

// // function b(){
// //     var x = 30;
// //     console.log(x);
// // }

// //When the file is empty, JS still creates an execution context and sets up the memory space.
// //Whenever an execution context is created, this keyword is also created along with it. Even for the functional execution contexts. Also the global space is set up
// //At global level this points to global object that is window object in case of browsers. We can access the methods and the variables defined inside the object anywhere in our programme.
// //When you run a js programme, a global exection context is created and a global space is created. Any variable or function is said to be in global space if it is not inside any function.
// //When you declare a variable or a function then it gets attached to window object and we can access it with window.<variable name>, this.<variable name> or simply by variable name.

// var a = 10;
// let b = 20;
// console.log(window.a);
// console.log(this.a);       //The behaviours are different on vs code console and browser console
// console.log(window.b);
// console.log(this.b);

// //JS is loosely typed language, means it is doing a lot of stuff behind the scenes while coercion.
// //We should not assign undefined to a variable. Not a good way. Can bring inconsistency in code.











// var bigInteger =  234567890123456789012345678901234567890n;
// console.log(bigInteger);

// let x = 3;
// let y = "Hello";
// console.log(x-y);

let x = 22;
let y = "Hello";
let z = undefined;
let w = null;

//If first value is truthy return it otherwise return second value always.
// console.log(x||y);
// console.log(x||z);
// console.log(z||x);
// console.log(z||w);
// console.log(w||z);

//If both are truthy, then second value is returned. If first is false then it is returned else if first is true but second false then second value is returned.
// console.log(x&&y); 
// console.log(z&&x);  
// console.log(x&&z);

// console.log(z&&w);
// console.log(w&&z);

console.log(typeof(NaN));