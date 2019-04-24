var tanggal = 30;
var bulan = 2;
var tahun = 2030;

if (tanggal<1||tanggal>31||tahun<1900||tahun>2030){
    console.log('tanggal yang kamu masukkan salah')
}else{
    if (bulan<1||bulan>12){
        console.log('bulan yang kamu masukkan salah');
    }else{
        switch (bulan){
            case 1: bulan = "januari"; break;
            case 2:
                if(tanggal>29){
                    tanggal='tanggal yang kamu masukkan salah'
                    tahun=''
                    bulan=''
                }else{ 
            bulan = "februari"; 
            }break;
            case 3: bulan = "maret"; break;
            case 4: bulan = "april"; break;
            case 5: bulan = "mei"; break;
            case 6: bulan = "juni"; break;
            case 7: bulan = "juli"; break;
            case 8: bulan = "agustus"; break;
            case 9: bulan = "september"; break;
            case 10: bulan = "oktober"; break;
            case 11: bulan = "november"; break;
            case 12: bulan = "desember"; break;
            }
    }console.log(tanggal,bulan,tahun);
}