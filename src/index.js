module.exports = function longestConsecutiveLength(array) {
  let set = new Set(array);
  let max = 0;

  set.forEach(v => {
    let left = v - 1;
    let right = v + 1;
    let current = 1;
    
    while(set.has(left)) {
      set.delete(left--);
      current++;
    }

    while(set.has(right)) {
      set.delete(right++);
      current++;
    }
    if(current > max) max = current;

  })
 return max;
}
