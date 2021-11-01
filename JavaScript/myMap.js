let arr = [4, 3, 10, 14, 32];



Array.prototype.myMap = function(callback, thisArg) {
    let context = this;
    let obj = Object(arr);
    let newArr = [];
    let i = 0;

    if (arguments.length > 1) {
        context = thisArg;
    }

    while(i < obj.length) {
        if(i in obj) {
            newArr[i] = callback.call(context, this[i], i, obj)
        }

        i++;

    }
    
    return newArr;
}

console.log(arr.myMap((item) => item + 2));