function menit (detik){
    jam=Math.floor(detik/60);
    menit=detik%60;
    if (menit < 10){
        menit='0'+ menit;
    }
return jam + ':' + menit
}

console.log(menit(131));