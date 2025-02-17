//The JS thread is busy unless the whole code runs. It doesnt fetch anything from the queue otherwise.

//You shouldnt have something in the callstack that is blocking the main thread.
//Otherwise it wont be able to process any other events.

//Lets block the main thread

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate+10000){
//     endDate = new Date().getTime();
//     console.log(endDate);
// }

//Why does JS has one call stack? It is interpretted language which makes it fast.
//This kind of scenerio that we just mentioned above wont be seen in code anywhere. Why would anybody write setTimeout at the start of the code and wait for 5000 milliseconds. 
//Its just to make you understand the concurrency model.

//Whats up with settimeout for 0 seconds?

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 0);

console.log("End");
//Suppose we want to differ our code, means that piece of code isnt that important.
//Suppose its on fourth page or at end, we can do this.
