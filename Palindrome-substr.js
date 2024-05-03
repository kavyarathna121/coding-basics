const isPlaindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");

    if(str === reversedStr){
        return true
    } else {
        return false
    }
}

function LongPalSub(s){
    var longSubstr = ""
    let subStr = ""

    for(i=0;i<s.length;i++){
        for(j=i+1;j<=s.length;j++){
            subStr = s.substring(i,j);
            if(isPlaindrome(subStr) && subStr.length > longSubstr.length){
                longSubstr = subStr
            }
        }
    }
    console.log("the longest sub-string is: ", longSubstr);
}

LongPalSub("geekstskeeg");