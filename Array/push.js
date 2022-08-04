// Array.prototype.push重寫
Array.prototype.$push = function(){
  for(var i = 0; i < arguments.length; i++){
    // 在array最後一項新增值
    this[this.length] = arguments[i];
  }

  // 回傳array長度
  return this.length;
}