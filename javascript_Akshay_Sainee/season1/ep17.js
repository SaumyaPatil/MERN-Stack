// console.log("Start");

// setTimeout(function cb(){
//     console.log("Callback");
// }, 5000);

// console.log("End");


//Lets block our main thread of 10 seconds
console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");

//Here new Date() -> gives exact date and time at this moment while .getTime() gives milliseconds at present
//This will synchroniously update endDate every millisecond and will takee its own time to execute.
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While expires");


//What happens if the timer is 0 ms
//Even if the timer is 0ms it will have to go through the queue the same way we saw before.
console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 0);

console.log("End");

//The above code looks illogical to provide 0ms timer, we can instead write it as follows - 
console.log("Start");

function cb(){
    console.log("Callback");
};
cb();

console.log("End");

//Though the previous code seems to be illogical, it has its use cases of putting a delay of 0ms.
//Suppose we have to deffer some piece of code, or if the code is comparitively less important. Something that appears at the end of the page or maybe in the next page, we can differ the execution of the function to setTimeout of 0.

//Live server - extension helps us setup our local environment

