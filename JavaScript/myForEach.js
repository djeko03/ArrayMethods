let arr = [4, 3, 10, 14, 32];

Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
        
    }
}


arr.myForEach((item, index) => {
    console.log({item, index});
})