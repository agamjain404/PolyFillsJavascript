Array.prototype.filter = function(cb) {
    let newArr = [];

    for(let i=0; i<this.length; i++) {
        const value = cb(this[i]);
        if(value)
            newArr.push(this[i]);
    }

    return newArr;
}

const myArr = [1, 2, 3, 4, 5];
const filteredArr = myArr.filter(isEven);

console.log(myArr);
console.log(filteredArr);

function isEven(x) {
    return x%2 === 0;
}

