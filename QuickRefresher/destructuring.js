const person = {
    name: 'Oat',
    age: 29,
    // when use arrow function, this will refer to the global object
    // greet: function () { console.log('Hi, I\'m ' + this.name) },
    greet() { console.log('Hi, I\'m ' + this.name) }
}

const printName = (personData) => {
    return console.log('Normal function: ' + personData.name);
}

// Destructuring object
const printNameDestructuring = ({ name }) => {
    console.log('Destructuring: ' + name);
}

printName(person);
printNameDestructuring(person);

// Destructuring array
const { name, age } = person;
console.log('Yourname: ' + name + ', and you are: ' + age);

// Destructuring array
const hobbies = ['Sports', 'Cooking'];
const [hobbies1, hobbies2] = hobbies;
console.log(hobbies1, hobbies2);