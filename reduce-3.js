// filters out duplicate values 
const arr1 = [1,2,3,2,3,2,4,5,7,6,8,6,7,8];
let b = [];

b = arr1.reduce((a,b) => {
    if(!a.includes(b)){
        a.push(b)
    }
    return a 
}, []);

console.log(b); // output: 1,2,3,4,5,7,6,8
