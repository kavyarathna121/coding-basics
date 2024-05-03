const a = ['for', 'of', 'xerox'];
let longStr = '';

for(i=0; i<a.length; i++){
    if(a[i] > a[a.length-i-1]){
        longStr = a[i];
    }
}

console.log(longStr);