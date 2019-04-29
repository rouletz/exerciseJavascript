var angka = [3,1,2]

function angkaSort(bilangan){
 //jumlah operan angka
 for (var i = 0; i < bilangan.length; i++){
  
  //angka pembanding setelah angka pertama
  for (var j = 0; j < (bilangan.length-i-1); j++){ 
          
  //perbandingan angka 1 dan 2
  if(bilangan[j] > bilangan[j+1]){

   //rubah letak angka
   var temp = bilangan[j];  //variabel sementara untuk menyimpan angka
   bilangan[j] = bilangan[j+1]; //mengganti angka sekarang dengan angka sebelah
   bilangan[j+1] = temp; //mengganti angka sebelah dengan angka sekarang
   }
  }        
 }return bilangan
}

console.log(angkaSort(angka));
