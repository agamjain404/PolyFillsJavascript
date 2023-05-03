// Filter function

const myArr=[1,2,3,4,5];
const filterArr = myArr.filter((elem) => {
    return elem%2 === 0;
});


console.log(myArr);
console.log(filterArr);

// Polyfill of Filter

function isEven(value) {
    return value%2 === 0;
}

function polyfillFilter (arr, cb) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        const value = isEven(arr[i]);
        if(value)
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(polyfillFilter(myArr, isEven));