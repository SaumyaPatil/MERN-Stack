
// getName();
// getName2();

// var x = 10;
// function getName(){                 //This behaves like a function
//   console.log("Namaste JavaScript!");
// }

// var getName2 = () =>{               //This behaves like any other variable
//   console.log("Namaste JavaScript 2");
// }

// var getName3 = function(){          //This behaves like any other variable
//   console.log("Namaste JavaScript 3");
// }

// console.log(x);
// console.log(getName);
// console.log(getName2);

// getName();
// getName2();

//Second Example
getName();

function getName(){          //function declarations and definations are hoisted but those assigned to variables are not hoisted just the variables are hoisted and init with undefined.
  console.log("Hie");
}

var getName = () =>{         //When this line is encountered, the value of getName is over written, if you use let here, it throws error as we cannot define same
  console.log("Hie2");
}

getName();

//Third Example
console.log(a);      //declarations are hoisted
var a = 10;          //initialise
var a = 20;          //over-writes
console.log(a);      //'var' does not create a new variable but simply reassigns it. Therefore it can be re-declared in the same scope