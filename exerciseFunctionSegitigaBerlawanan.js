function bintang2(bintang){
for (i=1; i<=5; i++){
    var bintang='';
    for (j=5; j>=i; j--){
        bintang += ' ';
    }
    for (k=1; k<=i; k++){
        bintang += '*'
    }
    console.log(bintang)
    }
}

console.log(bintang2(bintang= ''))