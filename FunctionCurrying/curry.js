
// Function currying using bind method
function add (a, b) {
    console.log(a+b);
}

// Here this refers to the function from which we need to bind and 2 is the argument passed;
let addWithTwo = add.bind(this, 2);
addWithTwo(5);  // 7



// Function currying using closures
function a(x) {
    return function b(y) {
        console.log(x+y);
    }
}

const c = a(2);
c(4);