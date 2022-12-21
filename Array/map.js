// Array.prototype.map的重寫
Array.prototype.myMap = function(...args) {
  // array
  const arr = this;
  
  // array.length
  const length = arr.length;
  
  // args
  const cb = args[0];
  const thisArg = args[1] || window;

  // result
  // 註: new Array(length)會產生一個元素為empty且長度為length的陣列
  let result = new Array(length);

  for(let i = 0; i < length; i++){   
    // 去除元素為empty的情況
    if(i in arr){
      // 不為empty的元素執行callback function
      result[i] = cb.call(thisArg, arr[i], i, arr);
    }
  }

  return result;
}