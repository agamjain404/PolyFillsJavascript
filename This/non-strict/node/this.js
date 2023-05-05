// Empty Object
console.log(this);

function inFunctionThis() {
    // Global Object
    console.log(this);
}


const object = {
    name: "Agam",
    something: () => {
        // Empty Object
        console.log(this);
    }
}

const object2 = {
    some: () => {
        function x() {
            // Global Object
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
            // Global Object
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