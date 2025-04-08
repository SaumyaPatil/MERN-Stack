//Run the code and understand the scope chain with help of debugger tools.

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();
console.log(b);

