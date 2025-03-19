// isNaN("Hello") // Returns true
// isNaN(345) // Returns false
// isNaN('1') // Returns false, since '1' is converted to Number type which results in 0
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a numb
// isNaN(false) // Returns false
// isNaN(undefined) // Returns true9


function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var person1 = new Person("Vivek", 76, "male");
console.log(person1);
var person2 = new Person("Courtney", 34, "female");
console.log(person2);
