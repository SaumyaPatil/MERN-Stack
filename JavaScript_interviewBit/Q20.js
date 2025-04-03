
//Closures - 

var Person = function(pName){
    var name = pName;
    //What is this.getName 
    this.getName = function(){
      return name;
    }
}
  
var person = new Person("Neelesh");
console.log(person.getName());
  
//Example 1 -
function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
}
  
var initialiseClosure = randomFunc(); // Returns a function
  
initialiseClosure(); 
  

// The returning function uses the variable obj1. Therefore, instead of destroying the value of obj1 after execution, saves the value in the memory for 
// further reference.