for (i=1; i<=5; i++){
    var bintang ='';
    var plus ='';
    for (j=5; j>=i; j--){
        bintang += '';
        plus += '+';
    }
    for (k=1; k<=i; k++){
        bintang += '*';
    }
    console.log(plus, bintang);
}