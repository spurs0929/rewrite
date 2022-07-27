// Array.prototype.flatMap方法重寫
Array.prototype.myFlatMap = function(callback){
  if(typeof callback !== 'function'){
    throw new TypeError('callback must be a function');
  }

  var arr = this,
      args2 = arguments[1],
      result = [],
      item;

  for(var i = 0; i < arr.length; i++){
    item = callback.apply(args2, [arr[i], i, arr]);
    item && result.push(item);  
  }     

  return result.flat();
}