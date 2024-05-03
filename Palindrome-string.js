function isPalindrome(str){
    for(i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length-i-1]){
            return false;
        }
    }
}

function Check(s){
    if(isPalindrome(s) === false){
        console.log("NOT a Palindrome");
    } else {
        console.log("It is a Palindrome");
    }
}

Check("hi");