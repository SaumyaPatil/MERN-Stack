//Function invocation and variable environment
//The execution context is seperately running that is independant of each other. They have their own memory space, virtual environment where they run.

var x = 10;
a();
b();

console.log(x);

function a(){
    var x = 20;
    console.log(x);
}

function b(){
    var x = 30;
    console.log(x);
}

