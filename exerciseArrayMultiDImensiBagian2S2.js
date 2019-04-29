var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
 
function pisahText(text){
//fungsi pertama untuk men-split berdasarkan koma
var pisahKoma = text.split(',');
 var hasil = [];

 //fungsi kedua untuk men-split array [i] berdasarkan titik dua
 for(i=0;i<pisahKoma.length; i++){
  var pisahTitik=pisahKoma[i].split(':');
  hasil.push(pisahTitik);
 }return hasil
}

 console.log(pisahText(text))