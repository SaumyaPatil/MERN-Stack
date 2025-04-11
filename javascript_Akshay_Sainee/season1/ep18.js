
//Callback function
function x(){
    console.log("Namaste");
}

//Higher order function
function y(x){
    x();
}


//Example 2
const radius = [3, 2, 1, 4];

const calcArea = function (radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius * radius);
    }
    return output;
}

console.log(calcCircumference(radius));

const calcCircumference = function (radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * Math.PI * radius);
    }
    return output;
}

console.log(calcCircumference(radius));

const calcDiameter = function (radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius);
    }
    return output;
}

console.log(calcDiameter(radius));


//We can modify it as follows - 
const radius2 = [3, 2, 1, 4];

function area(i){
    return Math.PI * i * i;
}

function circumference(i){
    return 2 * Math.PI * i;
}

function diameter(i){
    return 2 * i;
}

const calculations = function (radius2, logic){
    const output = [];
    for(let i=0; i<radius2.length; i++){
        output.push(logic(radius2[i]));
    }
    return output;
}

console.log(calculations(radius2, area));
console.log(calculations(radius2, circumference));
console.log(calculations(radius2, diameter));

//Here we have extracted the logic into smaller functions and every unit of functions has its own responsibility.
//We are not repeating anything here. This is the beauty of functional programming where you think everything into small reusable components which are functions.

//Crucial things in functional programming - reusability, modularity, how you make use of HOF
//Functional programming deals with modularity, reusability, pure functions, composition of functions, etc.


//Here the map function maps every element of the array with some logic and that logic is what we pass. It returns an array.
//Internally it creates an array, iterates over the given array and runs the logic on every element of the given array. Finally returning output.
//Its exactly similar to calculations function above
console.log(radius.map(area));

console.log(calculations(radius2, area));

//To make it call exactly the same way, we can add the calculate function in array.prototype so that it becomes available on all the arrays in our code.
Array.prototype.calculations = function (logic){
    const output = [];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

//To make it more similar we can. This will point to the array over which calculations is being called upon
console.log(radius2.calculations(area));

//Since calculations is similar to map, it is a pollyfill for map.