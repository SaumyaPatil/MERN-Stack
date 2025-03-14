//Good part of callback and bad part of call backs

//Good part - How are callbacks imp to write async code in JS
//Issues we face - callback hell and inversion of control

//callback plays imp role to write async code in JS

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function(){
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet();
        });
    })
})

//ISSUE 1 due to callbacks
//When we have large codebase and APIs are dependant on one another we end up falling in callback hell.
//unmaintainable and unmanagable

//Pyramid of DOOM

//ISSUE 2 due to callbacks
//Inversion of control - We loose control over our code when callbacks are used.

//Like the responsibility to call a function is in other function's hands so this is risky cause we never know it might contain bugs some intern must have wrote it or some developer
//What if payment happens twice in above code. 

