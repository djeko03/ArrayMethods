let arr = [4, 3, 10, 14, 32];


Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if(callback.call(this[i], i, this)){
            newArr.push(this[i])
        }
    }
    return newArr;
}


