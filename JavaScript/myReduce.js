let arr = [4, 3, 10, 14, 32];


Array.prototype.myReduce = function(f, result){
  let i = 0
  if (arguments.length < 2){
    i = 1;
    result = this[0];
  }

  for (; i < this.length; i++) {
      result = f(result, this[i], i, this)
  }
    return result
  }




const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(arr.myReduce(reducer));