
let arr = [4, 3, 10, 14, 32];

//searchElement = Искомый элемент.
//fromIndex  = Позиция в массиве, с которой начинать поиск элемента

Array.prototype.myIncludes = function(searchElement, fromIndex) {
    if(fromIndex == null){
        for (let i = 0; i < arr.length; i++) {
            while(arr[i] == searchElement){
                return true;
            }    
        }
        for (let i = 0; i < arr.length; i++) {
            while(arr[i] != searchElement){
                return false;
            }    
        }
    }

    if(fromIndex != null){
        for (let i = fromIndex; i < arr.length; i++) {
            while(arr[i] == searchElement){
                return true;
            }    
        }
        for (let i = fromIndex; i < arr.length; i++) {
            while(arr[i] != searchElement){
                return false;
            }    
        }
    }
}

console.log(arr.myIncludes(4));