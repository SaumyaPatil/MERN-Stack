//JS is non blocking, the setTimeout function takes the callback, stores it somewhere else with reference to 'i' and attaches a timer to it.

function x(){
    var i=1;
    setTimeout(function (){
        console.log(i);
    }, 3000);
    console.log("Namaste JavaScript!");
}
x();

//How to print 1 to 5 each after the number of seconds each

// Wrong way - 
// It remembers the reference to 'i'. Here it refers to the same memory location for every copy of the function. Each is refering to same location cause the environment for all of these functions are same. 
// Since JS doesnt wait, till the timer expires, the value of i becomes 6 by the time the callback function gets chance to execute.
function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript!");
}
x();

//To fix the above code, we can use let in place of var as every time loop runs, i is a new variable as let is block scoped.
//Everytime the function is called, it forms closure with a new variable.
//So everytime the function is called, it is referring to different memory location of i.


//Fix using var only
//Everytime you call this function z with i, it creates a copy of itself
function x(){
    for(var i=1; i<=5; i++){
        function z(i){
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        }
        z(i);
    }
}
x();
