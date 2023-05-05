let person= {
    name: 'Adam',
    age: 25
}

let showDetails = function (city, state) {
    console.log(this.name + " " + this.age + ` ${city} ${state}`);
}

let showDetailsBind = showDetails.bind(person, 'Noida', 'UP')
showDetailsBind();



// Polyfill
Function.prototype.myBind = function (...args) {
    // Here this keyword will be pointing to the function on which we called bind
    let obj = this;

    // Params are those parameters which are passed while calling the function
    let params = args.slice(1);
    return function (...args2) {
        // 
        obj.apply(args[0], [...params, ...args2]);
    }
}

// let showDetailsMyBind = showDetails.myBind(person, 'noida', 'up');
// showDetailsMyBind();

let showDetailsMyBind = showDetails.myBind(person, 'noida');
showDetailsMyBind('up');