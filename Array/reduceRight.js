// Array.prototype.reduceRight重寫
Array.prototype._reduceRight = function(fn, initialValue){
  /**
   * arr: 調用_reduce方法的陣列
   * len: arr陣列的長度
   * arg2: 可改變this指向，若無參數則默認指向window
   */
  var arr = this,
      len = arr.length,
      arg2 = arguments[2] || window;

  for(var i = len - 1; i >= 0; i--){
    initialValue = fn.apply(arg2, [initialValue, arr[i], i, arr]);
  }    

  return initialValue;
}