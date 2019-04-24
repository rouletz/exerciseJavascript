function palindrome(x){
    n = x.toString()
        var pemisah = "";
            for(var i=n.length-1; i>=0; i--){
            pemisah = pemisah+n[i]
        }
    if (pemisah===n){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome(12321))