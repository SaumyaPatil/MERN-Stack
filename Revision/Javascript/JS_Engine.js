//JS runtime environment -

//JS can run inside a browser, a server, a robot, etc.
//JS runtime environment has all the things needed to run JS code. It has JS engine, APIs, event loop, callback and microtask queue.

//Node.js is open source JS runtime. It has everything required to run JS code.
//The APIs are different for browsers for node and sometimes its also common.
//The apis those are common might be internally different.

//All browsers have their own JS engines
//Microsoft - chakra
//firefox - spider monkey
//Google - V8, nodejs, deno

//Protocols of ECMASCRIPT standards should be followed by the developers of the compilers inside JS engine.
//It is the governing body that decides specifications 
//The creator of JS himself developed first JS engine.
//Now its known spider monkey

//JS engine architecture - 
//It is not a machine. It is a program written in low level lang like C++.
//high level code -> low level code

//JS Engine Architecture
//Parsing - the statements in our code are broken down into tokens
//compilation
//execution

//Syntax parser generates the AST from the code that we give. - astexplorer.net generates AST.
//JIT Compilation - 

//Interpretter - converts the JS code line by line 
//compiler - efficiency
//interpretter - fast

//AST goes from interpretter to execution step - converts to byte code
//Theres a memory heap, a call stack and a garbage collector that works in sync. Garbage collector tries to free up memory space when ever possible.
//Mark and sweep algorithm is widely used.
//Compiler also does a lot of optimisation to the code like inlining, copy elison, inline caching, etc.
//ignition interpreter and turbofan is the compiler
//In JS you can do functional programming and OOP as well.

