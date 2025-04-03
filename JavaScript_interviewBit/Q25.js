
//Here there's an object cache and the condition is checked that if the key is num then return the value otherwise store the value corrosponding to key.

function memoizedAddTo256(){
    var cache = {};
    console.log(cache);
    return function(num){
      if(num in cache){
        console.log("cached value");
        return cache[num]
      }
      else{
        cache[num] = num + 256;
        console.log(cache);
        return cache[num];
      }
    }
}
var memoizedFunc = memoizedAddTo256();
  
memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return
  
