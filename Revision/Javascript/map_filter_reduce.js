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



// const arr = [5, 2, 3, 4, 1];

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
function findMax(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findMax(arr));

