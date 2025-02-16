// Web APIs are some super powers of browsers that it gives access to the JS engine.

//setTimeout(), DOM APIs, fetch(), local storage, console, location - these are not a part of JS
//These are the web apis that js engine can get access through global object which is window in case of browsers.

console.log("Start");

//When this line is encountered, browser calls the DOM API and registers a callback. It gets executed when the user clicks on the button. It remains there unless 
//the user explicitly removes it or closes the tab.
document.getElementById("btn").addEventListener("click", function cb(){
    console.log("Callback");
});

console.log("End");

//Fetch executes an API call. It returns a promise. When the promise is resolved the callback function is executed.
//There are two queues - callback and microtask, microtask queue has higher priority than callback queue. 
//There are api calls present in the microtask queue as well as mutation observer. It observes the changes in the DOM tree.
//Callback queues are also known as task queue.

//Due to many pending callbacks inside the microtask queue, we might not get a chance to execute the tasks inside the callback queue.


