{
    //Compound Statement - combines multiple statements into group
    //It is used where js expects one statement.
}

//What all variables and functions we can access inside the block.
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


//shadowing
// var a = 100;
// let b = 20;
// {
//     //We have a seperate object in memory where let and const variables recide.
//     var a = 20; //This shadows 'a' and overwrites the value of 'a'
//     let b = 30;
//     console.log(b); //This shadows the value of b declared upside.
// }
// console.log(a); //this prints 20 as it modifies the value of 'a' as both point to same memory location
// console.log(b);

//In case of functions also, it behaves the same way.
// var c = 40;
// function x(){
//     var c = 50;
//     console.log(window.c);
//     window.c = 70;
// }

// x();
// console.log(c);

//illegal shadowing
//When a variable is shadowing, it shouldnt cross the boundry of its scope.
// let a = 20;
// {
//     var a = 40;
// }

//block scope follows lexical scope
const l = 20;
{
    const l = 100;
    function inner(){
        // const l = 200;
        return l;
    }
}
var k = inner();
console.log(k);
//Scope rules that apply for function declarations also apply for arrow functions.
