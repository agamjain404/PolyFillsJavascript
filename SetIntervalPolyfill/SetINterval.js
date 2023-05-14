// Setting interval for every one second and then clearing the interval ones counter goes more than 3.
// let counter = 0;
// let intervalId;

// function greet() {
//     counter++;
//     console.log("Hello");

//     if(counter >= 3) {
//         clearInterval(intervalId);
//     }
// }


// intervalId = setInterval(() => {
//     greet();
// }, 1000);


// Polyfill of setInterval


function createSetInterval () {
    let intervalId = 0;
    let intervalMap = {};

    function mySetInterval(callback, delay = 0, ...args) {
        var id = ++intervalId;

        function repeat() {
            intervalMap[intervalId] = setTimeout(() => {
                callback(...args);
                if(intervalMap[intervalId]) {
                    repeat();
                }
            }, delay);
            
        }
        repeat();
        return id;
    }

    function myClearInterval(intervalId) {
        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }


    return {
        mySetInterval,
        myClearInterval
    }
}

const {
    mySetInterval,
    myClearInterval
} = createSetInterval();

let counter = 0;
let intervalID;

function greet() {
    counter++;
    console.log("Hello");

    if(counter >= 3) {
        myClearInterval(intervalID);
    }
}


intervalID = mySetInterval(() => {
    greet();
}, 1000);

