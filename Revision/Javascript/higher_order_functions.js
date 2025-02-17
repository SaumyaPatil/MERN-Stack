//One of the most imp thing about JS is functional programming.
//Functional programming is not possible without higher order functions.

//Functions that take other functions as arguements and return a function from it are higher order functions.

// function x(){
//     console.log("Hii");
// }

// function y(x){
//     x();
// }

// const radius = [3, 2, 1, 4];

// const calculateArea = function(radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function(radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));

//How to remove redundancy in the above code - write modular and reusable code
//We have abstracted our code into smaller functions and each function has its own unique responsibility.

const radius = [3, 2, 1, 4];

function calculateArea(r){
    return Math.PI * r * r;
}

// function calculateCircumference(r){
//     return 2*Math.PI*r;
// }

// function calculateDiameter(r){
//     return 2 * r;
// }

function outputCode(radius, fn){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(fn(radius[i]));
    }
    return output;
}

console.log(outputCode(radius, calculateArea));

//Functional programming deals with modularity, pure functions, composition of functions, etc.

//In above code what the outputcode function does is also done by map function in same way.
//We can say that its our implementation of map.

const output2 = radius.map(calculateArea);
console.log(output2);

//To make the outputcode function exactly similar to map function create a prototype of that function 
const arr = [1, 2, 3, 4];

Array.prototype.outputCode = function (fn){
    const output = [];
    for(let i=0; i<arr.length; i++){
        output.push(fn(arr[i]));
    }
    return output;
}

console.log(arr.outputCode(calculateArea));

//The 'this' points to the array over which outputcode is being called upon.
//Therefore, we can write this.length instead of arr.length or this[i] instead of arr[i] inside the above outputcode function.

