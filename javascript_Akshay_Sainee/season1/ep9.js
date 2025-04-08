// var a = 100;
// let b = 20;
// const c = 1000;
// //We have seperate scope / object in memory for the block where let and const variables are hoisted
// {
//     //How hoisting works here?
//     var a = 10;

//     //These will get seperate memory space reserved for this block. They are hoisted.
//     let b = 20;
//     const c = 30;
//     console.log(a);  //Here, value is accessed from the variable inside the blocks, 'a' is shadowed.
//     console.log(b);  //Here also this b inside the block will shadow the one outside.
//     console.log(c);  //same as let
// }

// console.log(a);  //Here, value of 'a' is modified to 10 as they both (line 1 and 5) are pointing to same location in memory
// console.log(b);  //20 -> it points to location inside script scope
// console.log(c);  //1000 -> same as let



//Shadowing is not just the concept of blocks but it behaves the same way in functions also
// const c = 100;
// function x(){
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);


//Illigal shadowing
//This is completely valid
var d = 20;
{
    var a = 30;
}

//This is illegal since in a scope a let cannot be redeclared, it shouldnt cross the boundary of the scope. Here inside the braces, we see that it does that.
// let e = 20;
// {
//     var e = 30;
// }

//What are the boundaries of var, it is function scoped - here its fine
function shadowingIllegal(){
    var e = 20;
}

//valid as they both have their own scopes
let f = 40;
{
    let f = 50;
}

//valid as var is in global scope while let has block scope and are not interfering with each other
var g = 40;
{
    let g = 30;
}

//Here also its fine as they have their own scopes
//Block scope also follow lexical scope. Each block has its own lexical scope. And lexical scope works the same way as in functions in case of blocks also.
const h = 60;
{
    const h = 70;
    {
        const h = 200;
        console.log(h);  //It tries to find the nearest h
    }
    console.log(h);
}


// Arrow functions
// All the scope rules in case of function declarations are also applicable to arrow functions
