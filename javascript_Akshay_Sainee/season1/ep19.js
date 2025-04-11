const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "110"]

function double(x){
    return x*2;
}

const output = arr.map(double);
console.log(output);

//You can write this way also
const output3 = arr.map(function binary(x){
    return x.toString(2);
});
console.log(output3);

//You can even write arrow function. Here is an anonymous arrow function
//Here the return statement and curley braces can be omitted as theres just one line to be executed and returned.
const output2 = arr.map((x) =>{
    return x*3;
});
console.log(output2);


//Filter functions
//To filter values inside array based on some logic
const arr2 = [5, 1, 3, 2, 6];

function isOdd(x){
    return x%2;
}

function isEven(x){
    return x%2 === 0;
}

function greaterThanFour(x){
    return x>4;
}

// filter odd values
const output4 = arr.filter(isOdd);
console.log(output4);

//filter even values
const output5 = arr.filter(isEven);
console.log(output5);

//filter greater than four
const output6 = arr.filter(greaterThanFour);
console.log(output6);


//Reduce functions 
//Used where you have to take all the elements of an array and come up with a single value out of them

//sum of elements

function sumOfElements(arr){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum = sum+x;
    }
    return sum;
}
console.log(sumOfElements(arr));

const output7 = arr.reduce(function (acc, curr){
    // curr represents the values inside the reduce function
    // acc accumulates the result 
    acc = acc + curr;
    return acc;
}, 0);   //This is the initial value of the accumulator that we pass in
console.log(output7);

