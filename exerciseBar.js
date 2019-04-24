var name = 'a';
var age = 1;
var money = 50000;
var minuman ='';
var harga = '';

if (name==''){
    console.log('nama tidak ada, silahkan keluar');
}else{
    if (age<17){
        var harga=50000;
        var minuman='jus';
    }else{
        var harga=300000;
        var minuman='anggur';
    }if(money<harga){
        console.log('uang anda tidak cukup');
    }else{
        money-=harga;
        console.log('anda bisa pesan '+minuman+' sisa uang anda '+money);
    }
}