
getName();
getName2();

var x = 10;
function getName(){                 //This behaves like a function
  console.log("Namaste JavaScript!");
}

var getName2 = () =>{               //This behaves like any other variable
  console.log("Namaste JavaScript 2");
}

var getName3 = function(){          //This behaves like any other variable
  console.log("Namaste JavaScript 3");
}

console.log(x);
console.log(getName);
console.log(getName2);

getName();
getName2();
