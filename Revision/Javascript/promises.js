//Promises - questions around promises

//Used to handle async operations in JS

const cart = ["shoes", "kurti", "pants"];

createOrder(cart); //returns an orderId

proceedToPayment(orderId);

//These tasks are async. We dont know how much time it will take.

//Using callbacks
//We design our APIs in such a way that they pass the callback function 

createOrder(cart, proceedToPayment(orderId));

//Solving the issue of inversion of control using promises

const promise = createOrder(cart);
//{data: }

