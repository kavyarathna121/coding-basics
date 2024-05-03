const filters = a => array => array.filter(a);

const num = [1,2,3,4,5,6];
let evenNum = num => num%2===0;
const a = filters(evenNum)
console.log(a(num));