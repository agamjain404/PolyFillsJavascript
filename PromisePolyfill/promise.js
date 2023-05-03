const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;


function createPromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];


    function resolve(result) {
        if(state !== PENDING) return;
        
        state = FULLFILLED;
        value = result;

        handlers.forEach((h) => h(value));
    }

    function reject(err) {
        if(state !== PENDING) return;
        
        state = REJECTED;
        value = err;

        catchers.forEach((c) => c(err));
    }

    this.then = (succesCallback) => {
        if(state === FULLFILLED) {
            succesCallback(value);
        } else {
            handlers.push(succesCallback);
        }
    }

    this.catch = (failureCallback) => {
        if(state === REJECTED) {
            failureCallback(value);
        } else {
            catchers.push(failureCallback);
        }
    }

    executor(resolve, reject);
}


const promise = new createPromise((resolve, reject) => {
    if(2 === 2) {
        setTimeout(() => { resolve('Promise Resolved') }, 3000);
    } else {
        setTimeout(() => { reject('Promise Rejected') }, 3000);
    }
});

promise.then((value) => {
    console.log(value);
})

promise.catch((error) => {
    console.log(error);
})