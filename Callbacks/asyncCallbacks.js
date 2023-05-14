// asynchronous callback
console.log('Hello');

setTimeout(() => {
    console.log('I am st1');
}, 2000);


setTimeout(() => {
    console.log('I am st2');
}, 3000);

function sayBye() {
    console.log('Bye');
}

sayBye();