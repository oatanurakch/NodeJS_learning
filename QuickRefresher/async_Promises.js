const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done !');
        }, 1500);
    });
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        // then is used to handle the resolved value of the promise
        .then(text => {
            console.log(text);
        })
        // catch is used to handle errors in the promise chain
        .catch(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');