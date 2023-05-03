Array.prototype.reduce = function(cb) {
    let accumulator = 0;

    for(let i=0; i<this.length; i++) {
        accumulator = cb(accumulator, this[i]);
    }

    return accumulator;
}

const myArr = [1, 2, 3, 4, 5];
const reducer = myArr.reduce(sum);

console.log(myArr);
console.log(reducer);

function sum(acc, x) {
    acc += x;
    return acc;
}

