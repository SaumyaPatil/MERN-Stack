//Code of video
// getName();
// getName2();

// var x = 10;
// function getName(){                 //This behaves like a function
//   console.log("Namaste JavaScript!");
// }

// var getName2 = () =>{               //This behaves like any other variable
//   console.log("Namaste JavaScript 2");
// }

// var getName3 = function(){          //This behaves like any other variable
//   console.log("Namaste JavaScript 3");
// }

// console.log(x);
// console.log(getName);
// console.log(getName2);

// getName();
// getName2();

//Second Example
// getName();

// function getName(){          //function declarations and definations are hoisted but those assigned to variables are not hoisted just the variables are hoisted and init with undefined.
//   console.log("Hie");
// }

// var getName = () =>{         //When this line is encountered, the value of getName is over written, if you use let here, it throws error as we cannot define same
//   console.log("Hie2");
// }

// getName();

//Third Example
// console.log(a);      //declarations are hoisted
// var a = 10;          //initialise
// var a = 20;          //over-writes
// console.log(a);      //'var' does not create a new variable but simply reassigns it. Therefore it can be re-declared in the same scope

//Q1. 
// console.log(a);  //Can access 'a' before initialisation as it is hoisted with undefined place value
// var a = 5;  
// console.log(b);   //Cannot access 'b' before initialisation as it is in TDZ
// let b = 10;  
// console.log(c);  //Cannot access 'c' before initialisation as it is in TDZ
// const c = 15;

//Q2.
// sayHello();       //functions are fully hoisted 

// function sayHello() {
//     console.log("Hello, World!");
// }

// greet();        //Just the var is hoisted as undefined not the function

// var greet = function() {
//     console.log("Good Morning!");
// };

//Q3.
function testHoisting() {
    console.log(x);      //undefined, as var declaration is hoisted at the top of its scope
    var x = 20;
    console.log(x);          //20
}

testHoisting();

//Q4.
{
    console.log(x);     //These are hoisted but not initalised so throws a ref error
    let x = 10;
}


//Q5.
var a = 1;
function outer() {
    console.log(a);    //undefined
    var a = 2;
    function inner() {
        console.log(a);     //2
    }
    inner();
}
outer();
