// const arr1 = ['a', 'b', 'c', 'd'];
// let b = [];

// b = arr1.reduce((a,b) => a+b);

// console.log(b);

const a = [1, 2, 3, 2, 4, 5, 6, 4, 7];

const filteredArray = Object.values(a.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + curr;
    return acc;
}, []));

console.log(filteredArray);
