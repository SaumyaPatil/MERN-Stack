//Promise apis are used to make parallel api calls


//Suppose you have 10 user ids, and you have to make 10 parallel api calls and get the user info we have the following api
//Handles multiple promises together

//The arguement is an array of promises or we can call it an iterable
Promise.all([p1, p2, p3]);       //FAIL FAST

//Output is - array of results : [val1, val2, val3] 
// Here all three promises return success
//Suppose p1 takes 3 seconds, p2 takes 1 second and p3 takes 2 seconds, we will get the output after 3 seconds.
//API calls will be made parallely but it waits for all of them to finish.

//As soon as any of these promises is reject, Promise.all will throw an error. Whatever error we get from that promise, it will give the same error as result.
//Immediately as soon as error happened, it will return the error. It will not even wait for other promises to get successfull or rejected, etc.
//Then what happens to those promises? When ever any promise is created or executed, you cannot cancel the promise in between.
//So the promises will be accepted or rejected depending on their fate but Promise.all will get rejected as soon as any of these promises get rejected.

//In first case, it was waiting for all the promises to be success and after 3 seconds to give result and in second case as soon as any promise is rejected it will throw an error.
//Its like all or none, if all of the promises are success it gives the collective result, if any one of them fails the whole promise chain fails.


//What if 1 second promise gets success and 2 seconds promise gets rejected, so error will be thrown after two seconds.


//What if I want results from successfull api calls, its okay if any of them fails but still I want results from other api calls.
//We have one more promise api to handle that case called Promise.allSetteled.

Promise.allSettled([p1, p2, p3]);
//If all of them are successfull, o/p will be - [val1, val2, val3]
//If any of them fails, say 1 second promise fails, it will wait for all promises to get settled
//All promises are happening in parallel so it will wait for 3 seconds to all these three to get settled and irrespective of success or failure it will give you all the results.
//o/p array - [val1, err2, val3]

//Output will always be an array of same number of promises that you are passing. Both the Promise.all and Promise.allSettled are same. Just the error handling is different.


//Use case - If you want data from all the api calls to show our web page, you will use promise.all while if you want to show the data of cart items supposedly, you will use promise.allSettled as if any of it fails, the other data will be still displayed.



//Lets take the same example as that of Promise.all
Promise.race([p1, p2, p3]);
//It will give the value of first settled promise
//Suppose first promise gets resolved first -> (val2) after 1 seconds
//Its a race, whatever promise settles first you will get the result.
//What if after 2 seconds, third promise fails, it will return an ERROR 
//Irrespective of the result whether success or failure, it will throw error. It will not wait for other promises to get settled.

//Eventually other promises get settled, but since its a race it wont wait and quickly return the result.

//This is very much similar to Promise.race. Only difference is that it waits for first promise to get successfull.
//Its a success seeking race. It ignores rejected promises and wait for successfull promises.
Promise.any([p1, p2, p3]);

//What if everything fails
//Returned result will be aggregate error which will be an array of all three errors
//[err1, err2, err3] -> after 3 seconds

//The good part about it is it waits for first success but if all fails it collects all the ignored errors and give us back the aggregate error



//Practical Part 
const p1 = new Promise(function(res, rej){
    setTimeout(() => res("First promise resolved"), 3000)
})

const p2 = new Promise(function(res, rej){
    // setTimeout(() => res("Second promise resolved"), 1000);
    setTimeout(() => rej("Second promise rejected"), 1000);
})

const p3 = new Promise(function(res, rej){
    // setTimeout(() => res("Third promise resolved"), 2000);
    setTimeout(() => rej("Third promise rejected"), 2000);    //This will fail after 2 seconds
})


Promise.all([p1, p2, p3])  //These promises can be api calls using fetch function. We have used dummy promises.
    .then(res => console.log(res))
    .catch(err => console.error(err));   //We can explicitly log error, this isnt uncaught error in browser


//We should never relay on uncaught errors. These errors are those which are not handled.


//2. Promise.allSettled -> waits for all promises to fullfill whether success or failure and gives a collective result at the end
//Here it gives an array of objects. If the promise is resolved then the object contains status and value while if it is rejected, it contains status and reason for getting rejected.

Promise.allSettled([p1, p2, p3])  //These promises can be api calls using fetch function. We have used dummy promises.
    .then(res => console.log(res))
    .catch(err => console.error(err)); 


//3. Promise.race -> First result is returned irrespective of success or failure

//Lingo used in promise world
//settled -> got the result
//resolve          reject
//success          failure
//fulfilled        rejected

//4. Promise.any -> waits for first settled success
//If every promise fails, it gives an aggregate error.

//To get the aggregate error array, we have to access it from error object 'err'
Promise.any([p1, p2, p3])  
    .then(res => console.log(res))
    .catch(err => console.error(err.errors)); 

