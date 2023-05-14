function greet() {
    console.log("Hello");
}


setTimeout(() => {
    greet();
}, 3000);

console.log("Bye");