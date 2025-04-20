/*
* What is async?
* What is await?
* How async await works behind the scenes
* Examples of async/await in real life
* Error handling
* Interviews
* Async await vs Promise.then().catch()
*/


//Always returns a promise
// async function getData() {
//     return "Namaste";            //It will wrap the data inside a promise and will return a promise or will return a promise
// }

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));




//If you are returning a promise, the promise wont be wrapped inside another promise but will be returned as it is
// const p = new Promise((res, rej) => {
//     res("Promise resolved value!!");
// });

// async function getData1() {
//     return p;
// }

// //always returns a promise
// const dataPromise1 = getData1();
// console.log(dataPromise1);

// dataPromise1.then((res) => console.log(res));
// //The above statement can be written as
// // p.then((res) => console.log(res));



//How to use await along with async functions and what is the actual use of these
//Async and await combo is used to handle promises
//How do we handle promises before async await?
// const p1 = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res("Promise resolved value 1!!");
//     }, 5000);
// });

// const p2 = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res("Promise resolved value 2!!");
//     }, 10000);
// });

// function getData(){
//     //JS will not wait for promise to be resolved. It will register a promise and take the callback function and keep it aside till it gets resolved.
//     p1.then((res) => console.log(res));
//     console.log("Namaste Javascript");
// }
// getData();   

//Output - 
//Namaste Javascript 
//Promise resolved value!!

//Difference between normally handling promises and handling using async await

//Handling promises using async await
//Await can only be used inside an async function
// async function handlePromise() {
//     console.log("Hello World");
//     //JS engine was waiting for promise to be resolved after the above line is printed
//     const val = await p;
//     console.log("Namaste Javascript");
//     console.log(val);
// }
// handlePromise();

// async function handlePromise() {
//     console.log("Hello World");
//     //JS engine was waiting for promise to be resolved after the above line is printed
//     const val1 = await p1;
//     console.log("Namaste Javascript 1");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(val2);
// }
// handlePromise();

//In the above code, after 10 seconds all the promises will be resolved.
//When await keyword is encountered, the function is suspended from the callback and the callback is set free. 
//As time tide and JS waits for none, we cannot block the main thread of execution otherwise the web page freezes.
//The function is restored in the callback once the promise is resolved.
//Callback is registered previously with the timer, its just that when the await line is encountered, the function is suspended and waits for timer to expire.
//As the timer expires and the promise is resolved, the function is pushed into the stack back again and the code resumes from the particular await line again.


//Handling actual promises

const API_URL = "https://api.github.com/users/akshaymarch7";

// async function handlePromise() {
//     // const data = await fetch(API_URL);
//     // //fetch -> Response object has body which is readable stream and to convert it to JSON you have to write Response.json()
//     // //Now we can convert to text, string, etc. But here we know that it gives a json value so we will resolve it to json
//     // //It is again a promise which when settled gives jsonValue
//     // const jsonValue = await data.json();
//     // console.log(jsonValue);



//     //Handling errors
//     //We can redirect the user to 404 page and show a pop up that request has failed
//     try{
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
//     }catch(err){
//         console.log(err);
//     }
// }

// handlePromise();

//Older way of handling errors
async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

//async function returns a promise
handlePromise().catch((err) => console.log(err));



//Interview tips
//What is async await - 
//Start by saying that async is a keyword used for functions handling async operations. 
//Await is a keyword used only inside these async functions to handle promises. Promises are async in nature
//Explain with examples of promises. Dive deep into how it works when there are more than one promise.
//How it works behind the scenes.
//Explain promises also in short and async await is majorly used to handle promises.



//Async/await vs Promise.then/catch
//Async/await is just a syntactic sugar over .then/catch means behind the scenes, JS uses its own promise.then and catch.
//Basically only difference happens in the code that we write.
//JS will treat your programme exactly like how it use to treat the older way of writing code.

//Both are better. Async await makes the code more sensible as we dont have to write callback functions inside then and catch.
//You dont have to do promise chaining as such. More readable.

