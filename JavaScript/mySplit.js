let str = "4bv15bv10";

String.prototype.mySplit = function(separator) {
    let arr = [];

    if(separator == undefined) {
        return arr = Array(str);
    }

    for (let i = 0, lastSeparate = 0; i < this.length; i++) {
        let isSeparate = false;

        for (let j = i, it=0; it < separator.length; j++, it++) {
            if (this[j] === separator[it] && it === separator.length - 1){
                isSeparate = true;
                break
            }
            if (this[j] !== separator[it]){
                break;
            }
        }
        if (isSeparate) {
            let str = '';
            for (let index = lastSeparate; index < i ; index++) {
                str += this[index];
            }
            arr.push(str);
            lastSeparate = i + separator.length;
            i = i - 1 + separator.length;
        }
        if (i === this.length-1 && !isSeparate) {
            let str = '';
            for (let index = lastSeparate; index <= i ; index++) {
                str += this[index];
            }
            console.log(str)
            arr.push(str);
        }
    }
    return arr
}

console.log(str.mySplit('bv'));