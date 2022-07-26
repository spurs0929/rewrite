// 扁平化方法重寫

// 1. reduce + concat + isArray + 遞迴 
Array.prototype.myFlat = function(){
  var arr = this,
      args = arguments[0] === undefined ? 1 : arguments[0],
      deep = args !== Infinity ? args >>> 0 : Infinity;

  return deep > 0 
    ? arr.reduce(function(prev, current){
        return prev.concat(
          Array.isArray(current) ? current.myFlat(deep - 1)
                                  : current
        )
      }, [])  
    : arr;     
}
// 2. forEach + isArray + push + IIFE + 遞迴
Array.prototype.myFlat1 = function(){
  var arr = this,
      args = arguments[0] === undefined ? 1 : arguments[0],
      deep = args !== Infinity ? args >>> 0 : Infinity,
      result = [];

  // IIFE + 遞迴 
  (function _(arr, deep){
    arr.forEach(function(item){
      if(Array.isArray(item) && deep > 0){
        _(item, deep - 1);
      }else{
        result.push(item);
      }
    })
  })(arr, deep);

  return result;
}

// 3. for...of + isArray + push
Array.prototype.myFlat2 = function(){
  var arr = this,
      args = arguments[0] === undefined ? 1 : arguments[0],
      deep = args !== Infinity ? args >>> 0 : Infinity,
      result = [];

  // IIFE + 遞迴 
  (function _(arr, deep){
    for(item of arr){
      if(Array.isArray(item) && deep > 0){
        _(item, deep - 1);
      }else{
        item !== void 0 && result.push(item);
      }
    }
  })(arr, deep);
  
  return result;
}

// 4. stack + pop + push
Array.prototype.myFlat3 = function(){
  var arr = this,
      stack = [...arr],
      result = [],
      index = 0;

  while(stack.length){
    const popItem = stack.pop();

    if(Array.isArray(popItem)){
      stack.push(...popItem);
    }else{
      // 排除元素值為empty
      popItem === undefined || result.push(popItem);
    }

    index++;
  }    

  return result.reverse();
}
