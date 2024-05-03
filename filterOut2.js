const Arr = [
    {customer: "A", location: "Bangalore", money_spent: 120, date: "24-2-2023"},
    {customer: "b", location: "Bangalore", money_spent: 120, date: "23-2-2023"},
    {customer: "c", location: "Bangalore", money_spent: 120, date: "21-2-2023"},
    {customer: "d", location: "Bangalore", money_spent: 120, date: "12-3-2023"},
    {customer: "e", location: "Bangalore", money_spent: 120, date: "24-4-2023"},
    {customer: "f", location: "Bangalore", money_spent: 120, date: "24-4-2023"},
];

let newArr = Arr.filter((val) => {
    const parts = val.date.split('-').reverse().join('-'); // Convert date to "yyyy-mm-dd" format
    // console.log(parts);
    return new Date(parts) < new Date('2023-03-12'); // Compare with "12-3-2023" in the "yyyy-mm-dd" format
});

console.log(newArr);
