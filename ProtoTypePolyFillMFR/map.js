Array.prototype.map = function(cb) {
    let newArr = [];

    for(let i=0; i<this.length; i++) {
        const value = cb(this[i]);
        newArr.push(value);
    }

    return newArr;
}

const myArr = [1, 2, 3, 4, 5];
const squaredArr = myArr.map(square);

console.log(myArr);
console.log(squaredArr);

function square(x) {
    return x*x;
}

