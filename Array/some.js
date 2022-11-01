Array.prototype._some = function(fn){
  var arr = this,
      len = arr.length,
      arg2 = arguments[1] || window,
      res = false;

  for(var i = 0; i < len; i++){
    if(fn.apply(arg2, [arr[i], i, arr])){
      res = true;
      break;
    }
  }
  
  return res;
}
