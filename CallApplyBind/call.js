// Call is used to call a particular method of a object for a different object
// This is known as Function borrowing
// let person1 = {
//     name: 'Adam',
//     age: 25,

//     showDetails: function() {
//         console.log(this.name + " is " + this.age + " years old");
//     }
// }

// let person2 = {
//     name: 'Steve',
//     age: 20
// }

// person1.showDetails();
// person1.showDetails.call(person2);

// -----------------------------------------------------------------------------------------------------------------

// If we declare showDetails globally then we can call it in this way
// showDetails.call(person1);
// showDetails.call(person2);

// let showDetails = function() {
//     console.log(this.name + " is " + this.age + " years old");
// }

// let person1 = {
//     name: 'Adam',
//     age: 25,
// }

// let person2 = {
//     name: 'Steve',
//     age: 20
// }

// showDetails.call(person1);
// showDetails.call(person2);

// -----------------------------------------------------------------------------------------

// If a particular function is taking parameters
let showDetails = function(city, car) {
    console.log(this.name + " is " + this.age + " years old. He lives in " + city + " and he drives " + car);
}

let person1 = {
    name: 'Adam',
    age: 25,
}

let person2 = {
    name: 'Steve',
    age: 20
}

showDetails.call(person1, 'Noida', 'BMW');
showDetails.call(person2, 'Mumbai', 'Bugati');