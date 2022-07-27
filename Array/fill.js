// fill方法重寫
Array.prototype.myFill = function(){

  /**
   * value: 選填，若無值則默認填undefined
   * start: 起始值，取整數
   * end: 結束值，取整數
   * 範圍: [start, end) 
   */

  var value = arguments[0] === undefined ? undefined : arguments[0],
      start = arguments[1],
      end = arguments[2];
      
  if(this == null){
    throw new TypeError('this is null or not defined');
  }    

  var obj = Object(this),
      len = obj.length >>> 0,
      index = 0;

  // 沒傳參數 
  if(start === undefined && end === undefined){
    while(index < len){
      obj[index] = value;
      index ++;
    }

    return obj;
  }

  // start條件判斷
  start = start === undefined ? 0 : start >> 0;
  start = start < 0 ? Math.max(start + len, 0) : Math.min(start, len);
    
  // end條件判斷
  end = end === undefined ? len : end >> 0;
  end = end < 0 ? Math.max(end + len, 0) : Math.min(end, len); 

  while(start < end){
    obj[start] = value;
    start ++;
  }

  return obj;
} 
