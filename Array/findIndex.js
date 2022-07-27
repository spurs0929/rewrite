// Array.prototype.findIndex重寫
Array.prototype.myFindIndex = function(callback){
  if(this == null){
    throw new TypeError('this is null')
  }

  if(typeof callback !== 'function'){
    throw new TypeError('callback must be a function');
  }

  var obj = Object(this),
      len = obj.length >>> 0,
      arg2 = arguments[1],
      index = 0;
  
  while(index < len){
    var value = obj[index];

    if(callback.apply(arg2, [value, index, obj])){
      return index;
    }

    index++;
  }    

  return -1;
}