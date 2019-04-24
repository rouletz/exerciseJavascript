function cek(x){
    var a = x.match(/x/gi);
    var b = x.match(/o/gi);

        if (a.length == b.length){
            return true
        }else{
            return false
        }
}

console.log(cek('XOXOXO'));
console.log(cek('XOXOX'));
console.log(cek('XOOX'));
console.log(cek('XOOXO'));