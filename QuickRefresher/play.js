let name = 'Oat';
let age = 24;
let hasHobbies = true;

age = 25;

// Reminder: const is immutable variable

const summarizeUserConst = function (username, userAge, userHasHobby) {
    return 'Name is ' + username + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

// Change to arrow function
const summarizeUserArrow = (username, userAge, userHasHobby) => {
    return 'Name is ' + username + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

function summarizeUser(username, userAge, userHasHobby) {
    return 'Name is ' + username + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

// Two arguments
const add = (a, b) => a + b;
// One argument you can remove ()
const addOne = (a) => a + 1;
// No argument you need to put ()
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUserConst('Kimmy', 23, false));
console.log(summarizeUserArrow('Max', 30, true));

console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());