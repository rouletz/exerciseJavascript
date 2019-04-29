var angka1=[1,2,3] // 2
var angka2=[1,2,3,4] // 2,5

function angkaMedian(angka){
 //urutkan angka
 angka.sort(function(a,b){
  return a-b;
 });

 //bulatkan angka
 var angkaTengah = Math.floor(angka.length / 2);
  
 //menentukan jika angka di mod 2 = 0 atau tidak
  if (angka.length % 2){
   return angka[angkaTengah];
   
  //jika tidak angka tengah di tambah kemudian di bagi 2
  }else{
   var angkaBagi = (angka[angkaTengah-1]+angka[angkaTengah])/2.0
   return angkaBagi;
  }
}

console.log(angkaMedian(angka2));