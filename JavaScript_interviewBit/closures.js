// class Person {
//     #name;  // Private field (ES6 feature)
    
//     constructor(pName) {
//       this.#name = pName;
//     }
  
//     getName() {
//       return this.#name;
//     }
//   }
  
//   const person = new Person("Neelesh");
//   console.log(person.getName());  // "Neelesh"
//   console.log(person.name);  // undefined (Private field)
  


var Person = function(pName){
    var name = pName;
    this.getName = function(){
    return name;
    }
}
var person = new Person("Neelesh");
console.log(person.getName());
