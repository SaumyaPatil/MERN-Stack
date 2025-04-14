
// "use strict";
// // this keyword works differently in strict and in non strict mode

// //this works differently in different circumstances - arrow functions, nested functions, global space, objects, etc.

// //this keyword in global space (top level)
// console.log(this);  //globalObject inside browser is window, inside nodejs is global

// //Every JS runtime can have different value of this

// //this inside a function
// function x(){
//     //The value depends on strict / non strict mode
//     //Value is undefined in strict mode and in non strict mode its window
//     console.log(this);
// }
// x();

// //this inside non-strict mode - (this substitution)
// //If the value of this keyword is undefined or null, this will be replaced with global object only in non strict mode

// //This keyword value depends on how the function is called 
// x();          //undefined
// window.x();   //window

// //this inside a object's method
// //If you make a function as a part of an object, its known as method
// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this);
//         console.log(this.a); //this refers to the object obj and a is the value 10
//     }
// }

// //The value becomes the object obj
// obj.x();

// //call, apply and bind methods (sharing methods)
// const student = {
//     name: "Akshay",
//     printName: function(){
//         console.log(this.name);
//     }
// };

// student.printName();

// const student2 = {
//     name: "Deepika",
// }

// //Suppose I want to share the method printName with student2 object, I can do that by overwriting the value of this keyword.
// //call takes the value of this keyword. What should this point to
// student.printName.call(student2);

// //this inside arrow function
// //They dont have their own this. They take the value of their lexical environment

// const obj1 = {
//     a: 10,
//     x: () => {
//         console.log(this);  //window object
//     },
// };
// obj1.x();

//this inside nested arrow function
const obj2 = {
    a: 10,
    x: function(){

        // console.log(this);    //'this' will behave like its present in its lexical context and so it will refer to the object

        //enclosing lexical context
        const y = () => {
            //This is so cause arrow function does not have this binding. There is no this keyword for the arrow function.
            console.log(this);  //Here this line will work as if arrow function is not there 
        };
        y();
    },
};
obj2.x();

//this inside DOM elements => reference to HTML elements
//look into index.html

