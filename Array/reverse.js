// Array.prototype.reverse 重寫
Array.prototype.myReverse = function(){
  // array
  var arr = this;
  // 指標
  var start = 0;
  var end = arr.length - 1;
  // swap元素的暫存容器
  var temp;

  while(start < end){
    if(arr[start] !== arr[end]){
      // swap元素
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
    start++;
    end--;
  }

  return arr;
}
