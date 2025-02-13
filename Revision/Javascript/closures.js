//Functions bind with its lexical environment.
//Functions can be assigned to variables, can be returned from function, can also be passed as an arguement to the function.
//Where are functions stored? Do they also have scope

function x(){
    var a = 2;
    function y(){
        function z(){
            console.log("Heyy");
        }
        console.log(a);
        return z;
    }
    y();
}
const innerCase = x();


