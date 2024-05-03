// const Arr = [
//     {customer: "A", location: "Bangalore", money_spent: 120, date: "24-2-2023"},
//     {customer: "b", location: "Bangalore", money_spent: 120, date: "23-2-2023"},
//     {customer: "c", location: "Bangalore", money_spent: 120, date: "21-2-2023"},
//     {customer: "d", location: "Bangalore", money_spent: 120, date: "12-3-2023"},
//     {customer: "e", location: "Bangalore", money_spent: 120, date: "24-4-2023"},
//     {customer: "f", location: "Bangalore", money_spent: 120, date: "24-4-2023"},
// ]
// // let newArr = Arr.filter((val) => val.date < '12-3-2023' );
// // console.log(newArr);
// let newArr = Arr.filter((val) => console.log(val.date < new Date('12-3-2023')) );
// console.log(newArr);

const date1 = new Date('2023-03-12');
const date2 = new Date('2023-02-24');

if (date1 < date2) {
    console.log('date1 is earlier than date2');
} else if (date1 > date2) {
    console.log('date1 is later than date2');
} else {
    console.log('Both dates are the same');
}
