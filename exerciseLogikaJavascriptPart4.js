function isArithmeticProgression (numbers) {
 //pengurangan pertama
 var pengurangan1 = numbers[1]-numbers[0];
 var hasil = true;
 //pengurangan kedua
   for (i=0; i<numbers.length-1; i++){
   var pengurangan2=numbers[i+1]-numbers[i];
 //perbandingan antara pengurangan 1 dan 2
     if (pengurangan1!==pengurangan2){
     hasil=false;
     }
 //hasil di tampilkan 
 }return hasil
}
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false