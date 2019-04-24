function Bar (name, age, money){
    if (name==''){
        return 'nama tidak ada, silahkan keluar';
    }else{
        if (age<17){
            var harga=50000;
            var minuman='jus';
        }else{
            var harga=300000;
            var minuman='anggur';
        }if(money<harga){
            return 'uang anda tidak cukup';
        }else{
            money-=harga;
            return 'anda bisa pesan '+minuman+' sisa uang anda '+money;
        }
    }
}

console.log(Bar('ricky',30,5000));