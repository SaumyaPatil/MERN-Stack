// console.log(typeof "John Doe"); // Returns "string"
// console.log(typeof 3.14); // Returns "number"
// console.log(typeof true); // Returns "boolean"
// console.log(typeof 234567890123456789012345678901234567890n); // Returns bigint
// console.log(typeof undefined); // Returns "undefined"
// console.log(typeof null); // Returns "object" (kind of a bug in JavaScript)
// console.log(typeof Symbol('symbol')); // Returns Symbol


//Symbol data-type
// var symbol1 = Symbol('symbol');
// var symbol2 = Symbol('symbol');
// console.log(symbol1 == symbol2);  //this gives false since the values are unique

//Non-primitive data-types
// Collection of data in key-value pairs
var obj1 = {
    x: 43,
    y: "Hello world!",
    z: function(){
        //Why is this keyword or object name necessary otherwise it gives reference error that 'x' is not defined?
        return x;
    }
}

// Collection of data as an ordered list
var array1 = [5, "Hello", true, 4.1];

// console.log(obj1);

console.log(obj1.z());
