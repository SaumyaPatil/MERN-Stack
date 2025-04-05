{
    var variable3 = [1, 2, 3, 4];
}
  
console.log(variable3); // Outputs [1,2,3,4]
  
{
    let variable4 = [6, 55, -1, 2];
}
  
console.log(variable4); // Throws error
  
for(let i = 0; i < 2; i++){
    //Do something
}
  
console.log(i); // Throws error
  
for(var j = 0; j < 2; i++){
    // Do something
}
  
console.log(j) // Outputs 2 

  
const x = {name:"Vivek"};

x = {address: "India"}; // Throws an error

x.name = "Nikhil"; // No error is thrown

const y = 23;

y = 44; // Throws an error
// In the code above, although we can change the value of a property inside the variable declared with const keyword, we cannot completely reassign the variable itself.

