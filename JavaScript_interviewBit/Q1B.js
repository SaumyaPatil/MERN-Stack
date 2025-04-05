// Traditional Function Expression
var add = function(a,b){
    return a + b;
  }
  
// Arrow Function Expression
var arrowAdd = (a,b) => a + b;



var obj1 = {
    valueOfThis: function(){
      return this;
    }
}
var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
}
  
obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object
  