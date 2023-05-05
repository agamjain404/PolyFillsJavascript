// If we talk about bind then it returns a bounded function with the particular object and arguments and then we can store it and can call it later or use it for some other purposes. And arguments passed in bind will be seperated and not in array

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

const bindedShowDetail  = showDetails.bind(person1, 'Noida', 'BMW');
bindedShowDetail();
