let arr = [4, 3, 10, 14, 32];

Array.prototype.myFind = function (callback) {
    
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            return this[i]
        } 
    }
}

let result = arr.myFind(function(item) {
  return item === 14;  
})

console.log(result);