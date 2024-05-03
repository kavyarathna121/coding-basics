const a = [1,2,3,45,87];
let biggest = 0

for(i=0; i<a.length; i++){
    if(a[i] > a[a.length-i-1]){
        biggest = a[i]
    }
}

console.log(biggest);