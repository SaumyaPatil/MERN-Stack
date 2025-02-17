//The JS thread is busy unless the whole code runs. It doesnt fetch anything from the queue otherwise.

//You shouldnt have something in the callstack that is blocking the main thread.
//Otherwise it wont be able to process any other events.

//Lets block the main thread

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate+10000){
    endDate = new Date().getTime();
    console.log(endDate);
}

