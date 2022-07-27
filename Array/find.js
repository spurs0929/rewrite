// Array.prototype.find方法重寫
Array.prototype.myFind() = function(callback){
  if(this === null){
    throw new TypeError('this is null');
  }

  if(typeof callback !== 'function'){
    throw new TypeError('callback must be a function');
  }

  /**
   * obj: 誰調用myFind方法(為避免原始值調用，因此用Object包)
   */
  var obj = Object(this),
      len = obj.length >> 0,
      arg2 = arguments[1],
      index = 0;

  while(index < len){
    var element = obj[index];

    if(callback.apply(arg2, [element, index, obj])){
      return element;
    }

    index++;
  }    

  return undefined;
}