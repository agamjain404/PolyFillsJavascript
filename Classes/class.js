class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }


    showDetails() {
        return this.brand;
    }
}


class Child extends Car {
    constructor() {
        super('Mercedes');
    }
}

let car1 = new Car('BMW', 'X3');
let car2 = new Car('Bugati', 'Jab khareedunga tab dekhunga');

console.log(car1);
console.log(car2);


console.log(car1.showDetails())

const child = new Child();
console.log(child.showDetails());