var nilai = 81

if (nilai > 80){
    console.log('lulus');
    if (nilai < 60) {
        console.log ('remedial');
    }
    else if (nilai > 50 && nilai < 80) {
        console.log('lulus bersyarat');
    }
}else{
    console.log('ga jelas');
}