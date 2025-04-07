//How function invocation behaves behind the scenes.

//Functional execution context is independant of everything else. Its like mini environment where all function code is executed.
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}

//Even if it is global execution context, even if it is functional execution context, they will have their own memory space, they will have their own virtual kind of environment where they would be running seperately, independant of each other.
