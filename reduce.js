// Reduce Function

const myArr = [1,2,3,4,5];
const sum = myArr.reduce((sum, value) => {
    sum += value;
    return sum;
});

console.log(myArr);
console.log(sum);

// PolyFill of Reduce

function sumofNnumbers(accumulator, value) {
    let acc = accumulator + value;
    return acc;
}


function polyFillReduce(arr, cb) {
    let accumulator = 0;
    for(let i=0; i<arr.length; i++) {
        accumulator = cb(accumulator, arr[i]);
    }

    return accumulator;
}

const result = polyFillReduce(myArr, sumofNnumbers);
console.log(result);