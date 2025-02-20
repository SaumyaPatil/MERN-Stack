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


function callback(){
    console.log("Callback");
}

function outerFunction(fn){
    console.log("This is first function!");
    fn();
}

outerFunction(callback);
