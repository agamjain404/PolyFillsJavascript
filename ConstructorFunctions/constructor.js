function Car(brand, model, car) {
    this.brand = brand;
    this.model = model;
    this.car = car;

    this.drive = function () {
        console.log("I am Driving " + this.model);
    }
}

// Whenecer we creare a function constructor then it points to an empty object
let car1 = new Car('BMW', 'X5', 'White');
console.log(car1);

let car2 = new Car('Mercedes', 'SClass', 'Red');
console.log(car2);

// These are mutable objects
car1.brand = 'Jaguar';
console.log(car1);


car1.drive();
car2.drive();