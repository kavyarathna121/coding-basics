const arr1 = [
    {f_name: "Kavya", l_name:"Rathna"},
    {f_name: "Dush", l_name:"Naidu"},
    {f_name: "Skandaa", l_name:"Ram"},
]

const b = arr1.map((val, index) => [{fullname: `${val.f_name} ${val.l_name}`}]);

console.log(b);