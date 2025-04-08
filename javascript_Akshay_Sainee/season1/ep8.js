//TDZ - Its the time since the variable was hoisted till it is initialized some value

console.log(b);  //This is completely valid as memory is allocated to variables and functions even before a single line of code is executed!

console.log(a);  //This throws error that it cannot be accessed before initialization. Meaning, it can only be assigned after you have initialized some value to it.

//Is it hoisted. Is it allocated memory, will it behave like var

let a = 10;   //Memory is allocated but they are stored in different memory space than global which cannot be accessed before you have put in some value in them.
var b = 100;  //Memory is assigned to b and they are attached to the global object

