// this code adds the duplicate values
const a = [1, 2, 3, 2, 4, 5, 6, 4, 7];

const filteredArray = Object.values(a.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + curr;
    return acc;
}, []));

console.log(filteredArray); // output: [1,4,3,8,5,6,7]
