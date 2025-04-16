//Here, the apis createOrder and proceedToPayment are asynchronous and dependant on each other.
const cart = ["shoes", "pants", "kurtis"];

createOrder(cart);          //creates order in DB and gives an orderId

//This will take orderId and take us to payment page
proceedToPayment(orderId);

//The above code using callbacks
const cart1 = ["shoes", "pants", "kurtis"];

createOrder(cart1, function(orderId){
    proceedToPayment(orderId);
});          
//Here the problem is inversion of control. 

// To resolve this issue, we have concept of promise
const cart2 = ["shoes", "pants", "kurtis"];

//Since, the api is async operation, we dont know how much time it will take, this will return a promise as soon as this line is run. 
//Promise is nothing but an empty object with some data value in it. This data value will hold whatever the api returns.
const promise = createOrder(cart2);          //{data: }

// {data: undefined} -> Here, we have empty object with data property in it which is undefined at the moment.
// After some time (5/6 seconds, it will fill the data value with the returned data by the function)
promise.then(function(orderId){
    proceedToPayment(orderId);
});

// Promise object - How real promise object looks like

// fetch function is the function used to make api calls to servers. It returns us a promise
// const GITHUB_API = "https://api.github.com/users/akshaymarch7";   //open source api gives info of username
// const user = fetch(GITHUB_API);

//What does the promise object contains
//prototype - Promise, promiseState - pending/fulfilled/rejected, promiseResult - will hold the data that the promise holds

console.log(user);
//When JS executes this statement its in pending state. And JS just executes and moves further as per its nature.
//After some time, it gets the data and state becomes fulfilled. So it shows the current state as fulfilled. And promiseResult holds the current data.

//There is this callback attached to user object. What ever we have to do after having data inside user object goes here.
user.then(function(data){
    console.log(data);
});

//Problem of callback hell
const cart3 = ["shoes", "kurtis", "pants"];
createOrder(cart3, function(orderId){
    proceedToPayment(orderId);
});

//Suppose we have these two apis which are dependant on each other.
showOrderSummary(paymentInfo);

updateWalletBalance();

//How to write it in callback way
const cart4 = ["shoes", "kurtis", "pants"];
createOrder(cart4, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});


//Here the code is growing horizontally instead of vertically, this is known as pyramid of doom.
//Code becomes ugly and hard to maintain.
//This can be handled using promise chaining.
createOrder(cart4)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(){
    return updateWalletBalance();
})
 
//Recap
//We can handle async code using callbacks.
//Theres a major issue using callback that is inversion of control.
//We resolve this using promise object. It will eventually be filled with result of the async operation.
//We attach a callback function to this promise object and when we have data inside when the promise is resolved the callback function will automatically be called with this data.
//Promises give us gurantee in our whole transaction
//Can resolve promise just once
//States are pending, rejected and fulfilled
//Immutable

//Promise object has two major properties, one is state and other is result that holds data which is eventually filled
//How to answer in interviews if asked about what promises are?
//It is an object that represents eventually completion of an async operation.

//There is issue of callback hell that can be handled by promise chaining.
//We can use then to attach callback handlers for a promise.
//If theres some promise inside the promise chain, you need to return it to prevent loss of data.

//Here we have talked about how we can consume a promise. How to handle async operation returning a promise.

//HW
//What is exact defination of promise?
//Why promises are important?

