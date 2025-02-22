// let givenDataType = 0;
// console.log(typeof(givenDataType));

// let num = 42;
// num = 38;  //Here, new memory gets allocated to 38 and 42 remains unchanged.
// console.log(num);    


// let obj = {person: "Saumya", age: 22};
// obj.person = "Suraj"; //This modification will happen in the original place and not copy
// console.log(obj);

// let num1 = 20;
// let num2 = num1;
// num2 = 30;

// console.log(num1);
// console.log(num2);

// console.log(5 == "5"); //It converts types

// const a = 10;
// {
//     const a = 10;
//     console.log(a);
// }

// console.log(a);

// ans();
// let ans = outer();

// function outer(){
//     var a = 20;
//     return function inner(){
//         console.log(a);
//     }
// }


// function callback(){
//     console.log("Callback");
// }

// function outerFunction(fn){
//     console.log("This is first function!");
//     fn();
// }

// outerFunction(callback);

//Shallow copying an object means copying the reference of nested objects while the top level properties still remain unchanged.
// const obj1 = {
//     name: "Saumya",
//     skills: {
//         lang: "JS",
//         lib: "React",
//     }
// };

// const obj2 = Object.assign({}, obj1);

// obj2.name = "Patil";
// obj2.skills.lang = "Java";

// console.log(obj1);
// console.log(obj2);

//Nested objects are also cloned making the copy completely independant

// const obj1 = {
//     name: "Saumya",
//     skills: {
//         lang: "JS",
//         lib: "React",
//     },
//     job: function(){
//         console.log("I am the best!");
//     }
// };

// console.log(obj1);

// const obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj2.job);

// const _ = require('lodash');

// const obj1 = {name: "Saumya", skills: {primary: "JS"}};

// const obj2 = _.cloneDeep(obj1);
// obj2.skills.primary = "React";

// console.log(obj1);
// console.log(obj2);


// function deepCopy(obj){
//     if(obj === null || obj !== "object") return obj;
//     let copy = Array.isArray(obj) ? [] : {};
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             copy[key] = deepCopy(obj[key]);
//         }
//     }

//     return copy;
// }

// const obj1 = {name: "Saumya", skills: {primary: "JS"}};

// const obj2 = deepCopy(obj);

// console.log("Start");

// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);

// console.log("End");

// console.log("Start");

// const intervalId = setInterval(() => {
//     console.log("Runs every 2 seconds");
// }, 2000);     //delay of 2000 ms

// console.log("End");

// const timeoutId = setTimeout(() => {
//     console.log("You won't see this message");
// }, 3000);

// clearTimeout(timeoutId); // Cancels the timeout before execution
// let count = 0;
// const intervalId = setInterval(() =>{
//     console.log("Repeating!");
//     count++;
//     if(count == 3){
//         clearInterval(intervalId);
//         console.log(count);
//         console.log("Stopped!");
//     }
// }, 2000);

// clearInterval stops further execution

//Why does the calls overlap here?
// function repeatWithDelay(){
//     console.log("Executed...");
//     setInterval(repeatWithDelay, 2000);
// }

// repeatWithDelay();


// const message = `Hello World!`;

// console.log(message);

// const message = `My name is ${name} and I am ${age} years old.`;
// console.log(message);

// function greet(name){
//     return `Hello, ${name}`;
// }
// console.log(`${greet("Saumya")}`);
// const user = {
//     name: "Saumya",
//     age: 22,
// };
// const userInfo = `User Info: ${user.name} is ${user.age} years old.`;
// console.log(userInfo);

// function customTag(strings, name, age){
//     name = "Siddhi";
//     return `${strings[0]}${name.toUpperCase()}${strings[1]}${age + 5}${strings[2]}`;
// }

// const name = "Saumya";
// const age = 22;
// console.log(customTag`My name is ${name} and my age is ${age}`);

// function isCalled(){
//     var val = [234, 2, 1, 2];
//     return val;
// }

// var ans = isCalled();

// console.log(Array.isArray(ans));
// console.log(isCalled() instanceof Array);

// const givenArray = [1, 2, 5];
// const [name, age, gender] = givenArray;

// console.log(gender);

//This is spread operator
const givenArray1 = [1, 2, 3, 4];
const givenArray2 = [...givenArray1];
console.log(givenArray2);

