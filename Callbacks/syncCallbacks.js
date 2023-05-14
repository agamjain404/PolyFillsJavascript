// Synchronous callbacks
function greet(personName, age, callback, callback2) {
    let msg = "Hello " + personName;
    callback(msg);
    callback2(age);
}

function logMessage(message) {
    console.log(message);
}

function showAge(age) {
    console.log(age);
}

greet('Steve', 25, logMessage, showAge);