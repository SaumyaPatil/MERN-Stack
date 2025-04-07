//String coercion - 
// Example 1:
var x = 3;
var y = "3";
x + y // Returns "33"


// Example 2:
var x = 24;
var y = "Hello";
x + y   // Returns "24Hello"; 


//Boolean operators - 
var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

//Logical operators - 
var x = 220;
var y = "Hello";
var z = undefined;
        
// x | | y    // Returns 220 since the first value is truthy
        
// x | | z   // Returns 220 since the first value is truthy
        
// x && y    // Returns "Hello" since both the values are truthy
        
// y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}


//Equality coercion - 
var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

var a = 226;
var b = "226";

a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal. 


// isNaN("Hello") // Returns true
// isNaN(345) // Returns false
// isNaN('1') // Returns false, since '1' is converted to Number type which results in 0
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a numb
// isNaN(false) // Returns false
// isNaN(undefined) // Returns true9


function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var person1 = new Person("Vivek", 76, "male");
console.log(person1);
var person2 = new Person("Courtney", 34, "female");
console.log(person2);
