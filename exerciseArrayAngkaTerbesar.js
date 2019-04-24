/*Soal 4
Diberikan sekumpulan angka, lalu cari pasangan angka terbesardari kumpulan angka tersebut
function pasanganTerbesar(number)
contoh :
    number = 6413573, number dapat dipecah menjadi beberapa pasang, yaitu : 64,41,13,35,57,73
    dari beberapa pasang angka tersebut, pasangan angka terbesarnya adalah 73
*/

function pasanganTerbesar(angka){
//merubah angka menjadi string kemudian di kelompokkan
var max = [];
var str = angka.toString()
  for (i=0;i<str.length-1;i++){
    angkaMax=str[i]+str[i+1]

//perbandingan angka
      if(max<angkaMax){
        max=angkaMax
    }
  }return max
}

//TEST CASE
console.log(pasanganTerbesar(12783456))//83
console.log(pasanganTerbesar(910233))//91
console.log(pasanganTerbesar(71856421))//85
console.log(pasanganTerbesar(79918293))//99