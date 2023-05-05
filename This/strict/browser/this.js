'use strict';

// Window
console.log(this);

function inFunctionThis() {
    // undefined
    console.log(this);
}


const object = {
    name: "Agam",
    something: () => {
        // window
        console.log(this);
    }
}

const object2 = {
    some: () => {
        function x() {
            // undefined
            console.log(this);
        }
        x();
    }
}

const object3 = {
    name: "Agam",
    something: function () {
        // Object itself
        console.log(this);
    }
}

const object4 = {
    some: function () {
        function x() {
            // undefined
            console.log(this);
        }
        x();
    }
}

inFunctionThis();
object.something();
object2.some();
object3.something();
object4.some();