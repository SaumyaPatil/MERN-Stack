
// console.log(a);
// for(var a=0; a<2; a++){
//   var i=4;
//   console.log(a);
// }

// console.log(a);
// console.log(i);


// const obj = {
//   name: "Saumya",
//   age: 22,
//   gender: "female"
// }

// console.log(typeof(obj.name));

// let a = 20;
// {
//   a = 50;
//   let a = 30;
//   console.log(a);
// }

// console.log(a);

// var sayHello = function () {
//   console.log("Hello!");
// };

// function sayHello() {
//   console.log("Hello!");
// };

// console.log(typeof(sayHello));

// function greet() {
//   console.log("Hello, world!");
//   var a = 10;
// }

// // Adding properties dynamically
// // greet.language = "English";
// // greet.author = "Saumya";

// // console.log(greet.language); // "English"
// // console.log(greet.author);   // "Saumya"
// console.log(greet);

// closureExample(); // Output: "I am from outer function"

// function outerFunction() {
//   let outerVariable = "I am from outer function"; // Variable in the outer function

//   function innerFunction() {
//     console.log(outerVariable); // Inner function has access to outer function's variable
//   }

//   return innerFunction; // Returning the inner function
// }

// var closureExample = outerFunction(); // outerFunction executed

//This code is without closures
// function createMultiplier(factor, num) {
//   return num * factor;
// }

// const double = createMultiplier(2, 5);
// const triple = createMultiplier(3, 5);

// console.log(double); // 10
// console.log(triple); // 15

//The same code above with closures
// function createMultiplier(factor) {
//   return function (num) {
//       return num * factor;
//   };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// let name = "John"; // Outer scope

// function greet() {
//   let name = "Alice"; // Inner scope (shadows the outer name)
//   console.log(name); // Output: "Alice" (inner scope variable is used)
// }

// greet();
// console.log(name); // Output: "John" (outer scope variable is used)

const object1 = {
  name: "Saumya",
  // age: 22,
  dob: "10 Dec 2002"
}

console.log(object1.age);

