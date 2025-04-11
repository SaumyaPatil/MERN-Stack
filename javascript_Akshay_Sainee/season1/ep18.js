
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

