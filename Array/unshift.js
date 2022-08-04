// 重寫Array.prototype.unshift方法
Array.prototype.$unshift = function(){
      // 將傳入的參數轉換成陣列
  var argArr = [].slice.call(arguments),
      // 將argArr與原本的陣列concat
      newArr = argArr.concat(this);
  
  // 回傳新的array長度
  return newArr.length; 
}

// 重寫Array.prototype.unshift方法
Array.prototype.$$unshift = function(){
  // 起始索引
  var pos = 0;

  for(var i = 0; i < arguments.length; i++){
    // 在陣列索引為pos的位置不刪除元素插入arguments[i]元素
    this.splice(pos, 0, arguments[i]);
    // 起始索引+1
    push++;
  }

  // 回傳新陣列長度
  return this.length;
}