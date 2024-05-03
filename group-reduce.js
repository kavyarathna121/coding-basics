const obj1 = [
    {type: 'Fruits', name:'Mango'},
    {type: 'Fruits', name:'Guava'},
    {type: 'Fruits', name:'Banana'},
    {type: 'Veggies', name:'Cucumber'},
    {type: 'Veggies', name:'Capsicum'},
    {type: 'Veggies', name:'Onion'},
];

const groupedItems = obj1.reduce((a,b) => {
    const category = b.type;
    // console.log(category);
    // console.log(!a[category]);
    if(!a[category]){
        a[category] = []
    }
    a[category].push(b.name);
    return a;
}, []);

console.log(groupedItems);