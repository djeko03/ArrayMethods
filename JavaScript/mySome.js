let arr = [4, 3, 10, 14, 32];



Array.prototype.mySome = function(callback, thisArg) {
    let context = this;
    let i = 0;

    if (arguments.length > 1) {
        context = thisArg;
    }

    for (i = 0; i < this.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
          return true;
        } else {
            return false
        }
      }
      
}



const even = (element) => element % 2 === 0;

console.log(arr.mySome(even));