function outer(){
    var a = 0;
    a=20;
    return function inner(){
        console.log(a);
    }
    a =10;  //After the function is returned, the function outer is not processed further so a=10 wont be accessible
}

outer()();


//We can declare variable 'a' with let as well, it will behave the same way.
function outer(){
    let a = 0;
    return function inner(){
        console.log(a);
    }
}

outer()();


//If we pass a parameter to the outer function and try to access it inside inner function, it will be accessible in case we return the inner function as it forms closure with the parameter as it is also part of its outer environment.
function outer(b){
    var a = 10;
    function inner(){
        console.log(a, b);
    }
    return inner;
}

outer(b)();


//If the outer function is nested inside inner function and we create a variable there, it will still have access to it as it is part of the inner function's outer environment.
function outest(){
    var c = 30;
    function outer(b){
        var a = 10;
        function inner(){
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
};
var close = outest()("Hello World");
close();


//If we have a variable globally with conflicting name, the inner function will look for the variable lexically closer to it.
function outest(){
    var c = 30;
    function outer(b){
        var a = 10;
        function inner(){
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
};
var a = 40;
var close = outest()("Hello World");
close();

//Data hiding and encapsulation
//Here, the variable count is hidden and other parts of code cannot access it.
function counter(){
    var count = 0;
    function incrementCounter(){
        count++;
        console.log(count);
    }
    return incrementCounter;
}
var counter1 = counter();
counter1();
counter1();


//Here the counter2 function will have fresh copy of incrementCounter function and will reference freshly created variable count in other scope.
function counter(){
    var count = 0;
    function incrementCounter(){
        count++;
        console.log(count);
    }
    return incrementCounter;
}
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();


//To make the above code scalable we can create a constructor function which creates function when called
function Counter(){
    var count=0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

//This will let us access the increment and decrement counter functions
var count1 = new Counter();
count1.incrementCounter();
count1.decrementCounter();


//The relation between garbage collectors and closure is such that in modern browsers, the garbage collector works smartly.
//It smartly frees up memory of z and retains that of x as x is accessed by the inner function

function outer(){

    var x = 10, z = 30;
    function inner(){
        console.log(x, z);
    }
    return inner;
}

outer()();

