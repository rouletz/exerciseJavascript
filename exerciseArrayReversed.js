function reversed (x){
 var pemisah = ""
    for(var i=x.length-1; i>=0; i--){
        pemisah = pemisah+x[i]
    }
 return pemisah;
}
console.log(reversed('Javascript'))