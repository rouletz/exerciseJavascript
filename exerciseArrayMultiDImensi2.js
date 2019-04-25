/*//Jawaban Soal 2 Bagian 1

var ganjil = [];
var genap = [];
var tiga =[];

function mengelompokkanAngka(angka){
 for (i=0;i<angka.length;i++){
  if (angka[i]%3==0){
   tiga.push(angka[i]);
  }else if(angka[i]%2==0){
   genap.push(angka[i]);
  }else{
   ganjil.push(angka[i]);
  }
 }return [tiga, genap, ganjil];
}

console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
*/

/*//Jawaban Soal 2 Bagian 2
var ganjil=[];
var genap=[];
var tiga=[];

function mengelompokkanAngka(angka){
 for (i=0;i<angka.length;i++){
  if (angka[i]%3==0){
   tiga.push(angka[i]);
  }else if(angka[i]%2==0){
   genap.push(angka[i]);
  }else{
   ganjil.push(angka[i]);
  }
 }return [tiga, ganjil, genap];
}

console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
*/

//Jawaban 2 Soal Bagian 3
function mengelompokkanAngka(angka){
var tiga=[];
var genap=[];
var ganjil=[];
var kosong=[];
 for (i=0; i<angka.length; i++){
  if (angka[i]==' '){
   tiga.push(angka[i]);
   genap.push(angka[i]);
   ganjil.push(angka[i]);
  }
 }
 kosong.push(tiga, ganjil, genap)
 return(kosong)
}

console.log(mengelompokkanAngka([])); // [ [], [], [] ]
