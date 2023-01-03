// Object.is重寫
Object.$is = function(a, b){
  if(a === b){
    // 利用 1 / +0 = Infinity 和 1 / -0 = -Infinity來判斷 a 和 b 是 +0 與 -0 的情況
    return a !== 0 || 1 / a === 1 / b;
  }

  // 判斷 a 和 b 為 NaN 的情況
  return a !== a && b !== b;
}


