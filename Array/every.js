Array.prototype._every = function(fn){
  var arr = this,
      len = arr.length,
      arg2 = arguments[1] || window,
      res = true;

  for(var i = 0; i < len; i++){
    if(!fn.apply(arg2, [arr[i], i, arr])){
      res = false;
      break;
    }
  }
  
  return res;
}