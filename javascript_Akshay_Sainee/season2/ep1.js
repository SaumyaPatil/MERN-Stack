const cart = ["shoes", "pants", "kurtis"];

api.createOrder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(

            function(){
                api.updateWallet();
            }

        );

    });

});

