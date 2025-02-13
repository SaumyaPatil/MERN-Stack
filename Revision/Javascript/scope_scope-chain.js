//Scope, scope chain, lexical environment and closures
//Scope - where I can access the variable/function.
//There are two aspects to it - 1. What is the scope of variable a? 
//Ans. Where can I access the variable 'a'

//2. Is a inside the scope? 
//Ans. Is a inside the scope of function c means can I access a inside function c.

//Scope is directly related to lexical environment.
//lexical - heirarchy/in order
//Where that specific code is present physically inside the code.
//Whenever an exection context is created, lexical environment is also created. It is local memory along with lexical environment of its parent.
//When a local exection context is created, you also get access to the lexical environment of its parent along with the local memory.
//Scope chain is the chain of the lexical environments and its parent references. This mechanism is called scope chain.

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);
