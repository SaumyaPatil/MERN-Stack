
console.log(b);  //This is completely valid as memory is allocated to variables and functions even before a single line of code is executed!

console.log(a);  //This throws error that it cannot be accessed before initialization. Meaning, it can only be assigned after you have initialized some value to it.

//Is it hoisted. Is it allocated memory, will it behave like var

let a = 10;   //Memory is allocated but they are stored in different memory space than global which cannot be accessed before you have put in some value in them.
var b = 100;  //Memory is assigned to b and they are attached to the global object

//TDZ - Its the time since the variable was hoisted till it is initialized some value

// priorities - 
// 1. const (when you dont want to assign anything to the same variable)
// 2. let (it has TDZ)
// 3. Use var very conciously

// To avoid temporal dead zone, put your declarations and initalisations at the top always.
// Cause as the code starts running it hits the initialization part at first. Otherwise you can run into a lot of unexpected errors in JS.
// By doing so you shrink the TDZ window to zero. Nothing happens before initialisation.