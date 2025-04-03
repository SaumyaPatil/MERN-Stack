//We will curry our functions using bind and concept of closures

const obj = {
    name: "Saumya",
}

//Using bind method
// let multiply = function(x,y){
//     console.log(x*y);
//     console.log(this.name);
// }

//Its exactly the copy of multiply but will create the copy by executing bind method over multiply
// let multiplyByTwo = multiply.bind(obj, 2);
// console.log(multiplyByTwo);
// multiplyByTwo(4);

// let multiplyByThree = multiply.bind(obj, 3);
// console.log(multiplyByThree);
// multiplyByThree(4);

//This is same as the above statement of code
// let multiplyByTwo = function(y){
//     let x = 2;
//     console.log(x*y);
// }

// If we write the multiplyByTwo by passing one more arguement as follows -
// let multiplyByTwo = multiply.bind(obj, 2, 3);
// console.log(multiplyByTwo);
// multiplyByTwo(4);   //output is 6 as 3 becomes y and ignores 4 here

//What if we dont pass 2 & 3 both
// let multiplyByTwo = multiply.bind(obj);
// console.log(multiplyByTwo);
// multiplyByTwo(2,3);

//But we intentionally pass the 2 and curry our method. 
//We create copy of multiply method and create more methods out of it by presetting arguements.



//Closures - Here the value of x can be preset 
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);

