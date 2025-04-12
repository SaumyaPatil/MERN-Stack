const cart = ["shoes", "pants", "kurtis"];

//Once the items are added to cart, we have to create order and then proceed to payment. Suppose we have access to two backend apis as below.
//Once order is created, we can proceed to payment. Here there is dependancy in our code. We can manage this dependancy using callbacks.

//We pass the callback function to createOrder api and it is the responsibility of createOrder api to create an order and then call this function.
//After the payment is successfull, we have to give an order summary. So we pass a callback function to proceedToPayment api and once payment is done, we call the function back.
api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(

            function(){
                api.updateWallet();
            }

        );

    });

});

//When there are so many APIs and they are dependant on one another, we end up falling in callback hell.
//Callback hell - one callback inside another callback inside another api and some if statements, etc.

//Unmaintainable and unmanageable

//This is known as pyramid of doom


//Inversion of control - 
//Its a problem while using callbacks. We loose control over our code.
//In our code, we gave the control to createOrder api that it will call our function back after creating an order.
//What if there are some bugs inside createOrder api. What if our callback function is never called or called twice since we are not aware of the code written inside createOrder api as it might be written by some other developer.


//Summary
//Importance of callbacks - super powerfull way of writing async code in JS
//Issues with callbacks - a. Callback hell
// b. inversion of control

