/*Diberikan sekumpulan angka dalam array. Tentukan apakah kumpulan angka tersebut merupakan deret
  aritmatika atau bukan pada function tentukanDeretAritmatika(array)
  contoh :
    array = [1,2,3,4,5,6] => antar angka punya selisih yang sama ya itu 1 jadi ini merupakan deret
    aritmatika.
*/


function deretAritmatika(array){
  //pengurangan pertama
  var pengurangan1 = array[1]-array[0];
  var hasil = true;

  //pengurangan kedua
    for (i=0; i<array.length-1; i++){
    var pengurangan2=array[i+1]-array[i];

  //perbandingan antara pengurangan 1 dan 2
      if (pengurangan1!==pengurangan2){
      hasil=false;
      }

  //hasil di tampilkan 
  }return hasil

}
//TEST CASE
console.log(deretAritmatika([2,4,6,8]))//true
console.log(deretAritmatika([2,6,,18,54]))//false
console.log(deretAritmatika([2,3,4,7,9]))//true
console.log(deretAritmatika([3,5,7,9]))//true