//How to create our own promises

//Creating a promise
//Error Handling
//Promise Chaining

//We have a cart array and two backend apis which are doing some async operation. These are dependant on each other.
const cart = ["shoes", "kurtis", "pants"];

createOrder(cart);  //orderId

proceedToPayment(orderId);

// Suppose this createOrder API returns us a promise, we will attach a callback function to this promise object and the function will call the proceedToPayment API

const cart1 = ["shoes", "kurtis", "pants"];

const promise = createOrder(cart1);  //orderId
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
})

//How will the createOrder function return us a promise and send it to the consumer.

//Producer part of code - 

function createOrder(cart1){
    const pr = new Promise(function(resolve, reject){
        //Logic of handling createOrder function
        //Validate cart
        //Make an api call to create an order
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";   //We get this by making some api call to database or so.
        if(orderId){
            resolve(orderId);
            //What if its an api call? Suppose its an async operation that takes 5 seconds
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

//Promises are created using promise constructor. A promise constructor takes a function that has two parameters resolve and reject.
//These are given by JS to build promises

function validateCart(cart1){
    //Here for the sake of simplicity, we are returning true otherwise we can check if the cart is empty or what
    return true;
}


//How to handle errors. Suppose if our promise fails we get a red colour error in the browser console if the error is not handled properly.
//In our above code, we are handling the success part of the promise at the consumer end, what if it rejects the promise
//If error is not handled properly, this code will fail in the users computer and they will silently get this error in the browser console and user will not see anything on the page.


const cart2 = ["shoes", "kurtis", "pants"];

const promis2 = createOrder(cart1);  //orderId
console.log(promise2);

promise2.then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart2){
    const pr = new Promise(function(resolve, reject){
        //Logic of handling createOrder function
        //Validate cart
        //Make an api call to create an order
        //orderId
        if(!validateCart(cart2)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";   //We get this by making some api call to database or so.
        if(orderId){
            resolve(orderId);
            //What if its an api call? Suppose its an async operation that takes 5 seconds
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

//Promises are created using promise constructor. A promise constructor takes a function that has two parameters resolve and reject.
//These are given by JS to build promises

function validateCart(cart2){
    //Here for the sake of simplicity, we are returning true otherwise we can check if the cart is empty or what
    return false;
}


//Promise chaining
const cart3 = ["shoes", "kurtis", "pants"];

const promis3 = createOrder(cart3);  //orderId
console.log(promise3);

//We need to return the data that we are passing down the chain.
promise3.then(function(orderId){
    console.log(orderId);
    return orderId;
})
//Here we are passing the data that we get from createOrder API. Response of createOrder will be passed to proceedToPayment function
.then(function(orderId){
    return proceedToPayment(orderId);  //Returns a promise that is passed down the chain and the callback function below will be attached to this promise
})
//Here, we recieve either data or promise from the above method. This paymentInfo contains if the payment was completed or rejected
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

//Whenever there is any error at any part of the chain, the catch handles it all.

//Just like callback hell, theres promise hell also if we then and there attach the callback to .then function. 
//Promise API was designed in such a way that we dont fall in this callback hell and we get that dome kind of structure where our pyramid grows horizontally.
//So we generally return a promise and handle it in next line of the chain.

// promise3.then(function(orderId){
//     console.log(orderId);
//     return orderId;
// })
// .then(function(orderId){
//     return proceedToPayment(orderId).then(function(paymentInfo){
//         console.log(paymentInfo);
//     });  
// })
// .catch(function(err){
//     console.log(err.message);
// })



function createOrder(cart3){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart3)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for createOrder
        const orderId = "12345";   //We get this by making some api call to database or so.
        if(orderId){
            resolve(orderId);
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function validateCart(cart3){
    return false;
}

//Returns promise
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        console.log(orderId);
        resolve("Payment Successfull");

    });
}

//catch function has responsibilty to only check the top of it.
//Functions below it will definitely be called.





//This chaining helps us get rid of callback hell. This type of code is much more readable, maintainable and developer friendly.
//We attach a callback function using then method to the promise to resolve the promise and a callback function using catch to the promise.

//HW - create promise chain with the following apis and also handle errors
//createOrder, proceedToPayment, showOrderSummary, updateBalance

