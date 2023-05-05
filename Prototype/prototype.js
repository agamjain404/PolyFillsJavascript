// A simple object
let person1 = {
    name: 'Adam',
    age: 25,

    showDetails: function() {
        console.log(this.name + ' ' + this.age);
    }
}

// Another simple object
let person2 = {
    name: 'Steve'
}


// Assigning a object into another object's prototype will give access of the properties of the assigned objects to the assigning object. Now person2 has full access to the properties of person1. This is known as Prototypal inheritance
person2.__proto__ = person1;

console.log(person2.name + ' ' + person2.age);
person2.showDetails();