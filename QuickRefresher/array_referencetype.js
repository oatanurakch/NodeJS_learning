const person = {
    name: 'Oat',
    age: 29,
    // when use arrow function, this will refer to the global object
    // greet: function () { console.log('Hi, I\'m ' + this.name) },
    greet() { console.log('Hi, I\'m ' + this.name) }
}

const hobbies = ['Sports', 'Cooking'];

// Add element to array
hobbies.push('Programming');
console.log(hobbies);

// copy array
const copiedArray = hobbies.slice();
console.log(copiedArray);

// other way to copy array
const copiedArray2 = [hobbies];
console.log(copiedArray2);

// spread operator it's take all elements in array and add to new array
const copiedArray3 = [...hobbies];
console.log(copiedArray3);
const copiedPerson = { ...person };
console.log(copiedPerson);

// when you add 3 arguments to function but you want to add more argument you can use rest operator for add more argument ( dynamically add argument )
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1, 2, 3, 4));

// rest operator
const toArrayRest = (...args) => {
    return args;
}

console.log(toArrayRest(1, 2, 3, 4, 5));
