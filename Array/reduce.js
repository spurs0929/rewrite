// Array.prototype.reduce重寫
// Array.prototype._reduce = function(fn, initialValue){
//   /**
//    * arr: 調用_reduce方法的陣列
//    * len: arr陣列的長度
//    * arg2: 可改變this指向，若無參數則默認指向window
//    */
//   var arr = this,
//       len = arr.length,
//       arg2 = arguments[2] || window;

//   for(var i = 0; i < len; i++){
//     initialValue = fn.apply(arg2, [initialValue, arr[i], i, arr]);
//   }    

//   return initialValue;
// }

Array.prototype.myReduce = function (...args) {
  // your code here
  
  // args[1]: initial value
  const initValue = args.length > 1;
 
  // 沒傳callback function
  if(!initValue && this.length === 0){
    throw new Error();
  }

  // callback function
  const cb = args[0];

  // 如果initValue存在，使用args[1]
  // 如果initValue不存在，使用this[0]，也就是陣列的第一個元素
  let result = initValue ? args[1] : this[0];
  let startIdx = initValue ? 0 : 1;
 
  for(var i = startIdx; i < this.length; i++){
    
    /**
     * result: prev Value
     * this[i]: currentValue
     * i: currentIndex
     * this: array
     */
    result = cb(result, this[i], i, this);
  }

  return result;
}