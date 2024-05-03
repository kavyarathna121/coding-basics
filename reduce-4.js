const a = [1,2,3,4,5,2,4,5,6,7,6,8];
let newArr = [];

newArr = Object.values(a.reduce((acc,item) => {
    acc[item] = (acc[item] || 0) + item;
    return acc;
}, {}));

console.log(newArr);
