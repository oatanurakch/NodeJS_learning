const person = {
    name: 'Oat',
    age: 29,
    // when use arrow function, this will refer to the global object
    // greet: function () { console.log('Hi, I\'m ' + this.name) },
    greet() { console.log('Hi, I\'m ' + this.name) }
}

console.log(person)
// Call greet method in person object
person.greet()