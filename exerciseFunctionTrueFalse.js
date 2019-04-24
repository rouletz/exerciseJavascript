//=========soal angka 3,8=========

function KurangDari(angka1,angka2){
    if (angka1<angka2){
        return true;
    }else if(angka1>angka2){
        return false;
    }else
        return 'tidak ada nilai yang di bandingkan'
}
console.log('-----soal true false-----')
console.log(KurangDari(3,8))
console.log(KurangDari(8,3))
console.log(KurangDari())