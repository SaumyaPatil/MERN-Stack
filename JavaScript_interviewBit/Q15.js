// let name = {
//     firstName: "Saumya",
//     lastName: "Patil",
//     printFullName: function(){
//      console.log(this.firstName + " " + this.lastName);
//  }
// }


//Privacy of the function is hindered, instead we can do function borrowing
// const getName = name.printFullName;
// console.log(getName);

// let name2 = {
//     firstName: "Siddhi",
//     lastName: "Patil",
//     getName
// }

// name2.getName();

//call method :- function borrowing - We can borrow the functions of other objects and use that with data of other objects.
//Every method in js has access to this special function call()
//First arguement will be the reference in simple terms what we want this to be pointing to
// name.printFullName.call(name2);



//In general cases, we do not keep the functions in the object if we want to reuse them.
//If suppose there are parameters to the function, we pass the first arguement as the reference and remaining as parameters of function.
let name = {
    firstName: "Akshay",
    lastName: "Saini"
}

let printFullName = function(hometown){
    console.log(this.firstName + " " + this.lastName + " from " + hometown);
}

printFullName.call(name, "Dehradun");
let name2 = {
    firstName: "Saumya",
    lastName: "Patil"
}

//function borrowing
printFullName.call(name2, "Pune");


//apply method
//The only difference between the two is the way we pass arguements - 
//First arguement is the object and second arguement is the list of arguements that we have to pass to the function.
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
//It creates a copy of printFullName and binds it to the object name2 and returns us a method.
//The difference between the both is just that it binds the copy of function and creates a method which can be invoked later.
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();

//They are origin to a lot of other concepts in JS - polyfills, function currying or other similar concepts directly related to these functions.

