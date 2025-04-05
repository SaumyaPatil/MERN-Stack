// function add(number) {
//     if (number <= 0) {
//       return 0;
//     } else {
//       return number + add(number - 1);
//     }
// }
// console.log(add(3)); 
//   => 3 + add(2)
//   3 + 2 + add(1)
//   3 + 2 + 1 + add(0)
//   3 + 2 + 1 + 0 = 6  

//Sum of array elements - 
function sumOfArrayElements(arr){
    if(arr.length === 1)return arr[0];
    else return arr.pop() + sumOfArrayElements(arr);
}

console.log(sumOfArrayElements([1, 2, 3, 4]));
