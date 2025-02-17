//Map, filter and reduce are higher order functions in JS

//Suppose we want to transform this array below, we write arr.map(logic) 
// const arr = [5, 4, 3, 2, 1];

// function binary(){
//     return x.toString(2);
// }

// const output1 = arr.map(binary);

// const output2 = arr.map(function binary(){
//     return x.toString(2);
// });

// const output3 = arr.map((x) => x.toString(2));

// console.log(output);



// const arr = [5, 2, 3, 4, 1, 3, 2, 10, 280];

// //filter odd values
// function isOdd(x){
//     return x%2;
// }

// const output1 = arr.filter(isOdd);

// console.log(output1);

//Reduce function is used where you have to take up all the values of the array and come up with a single value out of them.
//sum or max

// function findSum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

//acc accumulates the sum so it needs to be initialised by some value first.
// const output2 = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

//How to find max inside the array
// const arr = [5, 2, 3, 4, 1, 3, 2, 10, 280];
// function findMax(arr){
//     let maxi=arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>maxi)maxi = arr[i];
//     }
//     return maxi;
// }
// console.log(findMax(arr));

// const output3 = arr.reduce(function(acc, curr){
//     if(curr>acc)acc = curr;
//     return acc;
// }, arr[0]);

// console.log(output3);

//Assume the data what we get from API - list of users

// const users = [
//     {firstName: "Akshay", lastName: "Sainee", age: "22"},
//     {firstName: "Saumya", lastName: "Patil", age: "22"},
//     {firstName: "Siddhi", lastName: "Patil", age: "15"},
//     {firstName: "Suraj", lastName: "Verma", age: "25"},
// ];
// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

//Find out how many people have age 22 inside it - 2 people

// const output2 = users.reduce((x, y) => {
//     if(y.age == 22)x++;
//     return x;
// }, 0);
// console.log(output2);

//Return names of people with age 22
// const outputAge = users.filter((x)=>{
//     return x.age == 22 && x.firstName + " " + x.lastName;
// })

// console.log(outputAge);

//output should be as given below
//{22: 1, 15: 1, 25: 1}

const users = [
    {firstName: "Akshay", lastName: "Sainee", age: "22"},
    {firstName: "Saumya", lastName: "Patil", age: "22"},
    {firstName: "Siddhi", lastName: "Patil", age: "15"},
    {firstName: "Suraj", lastName: "Verma", age: "25"},
];

// const output4 = users.reduce((acc, curr) =>{
//     if(acc[curr.age])acc[curr.age] = ++acc[curr.age];  //Ye line kya hai samajh nhi aaya!
//     else acc[curr.age] = 1;
//     return acc;
// }, {});

// console.log(output4);


// const output5 = users.filter((x) => {
//     return x.age > 15;
// }).map((x) => x.firstName);

//using reduce for the above solution
const output5 = users.reduce((acc, curr) =>{
    if(curr.age < 25)acc.push(curr.firstName);
    return acc;
}, []);

console.log(output5);

