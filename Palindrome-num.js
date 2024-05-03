function Check(n){
    let originalNum = n
    let newNum = 0;

    while(n>0){
        const lastDigit = n%10;
        newNum = newNum*10+lastDigit;
        n = Math.floor(n/10);
    }
    return originalNum === newNum;
}

function isPalindrome(num){
    if(Check(num) === true){
        console.log("It is a Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}

isPalindrome(31);

