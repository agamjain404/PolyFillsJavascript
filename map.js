// Map functions

const myArr = [1,2,3,4,5];
const mappedArr = myArr.map(function (x) {
    return x*x;
});

console.log(myArr);
console.log(mappedArr);


// PolyFill of Map


function square(x) {
    return x*x;
}


const doSquare = function (myArr, cb) {
    let newArr = [];
    for(let i=0; i < myArr.length; i++) {
        const squared = cb(myArr[i]);
        newArr.push(squared);
    }
    return newArr;
}

const squaredArr = doSquare(myArr, square);

console.log(myArr);
console.log(squaredArr);
