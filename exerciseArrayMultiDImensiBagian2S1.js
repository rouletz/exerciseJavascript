//function tampilkanNama(nama)
var people = [[1, 'Dimitri', 'Hacktiv8'],[2, 'Dhani', 'Hacktiv8'],[3, 'Icha', 'Hacktiv8']];

function tampilkanNama(nama){
 for (i=0; i<people.length; i++){ //pengulangan operasi sampai jumlah array
  for (j=0; j<people.length; j++){ // pencarian array urutan ke
   if (j===0){
    console.log('ID : ' + people[i][j]);
   }else if(j===1){
    console.log('Nama : ' + people[i][j]);
   }else if (j===2){
    console.log('Perusahaan :'+people[i][j]);
   }
  }
 }console.log();
}

console.log(tampilkanNama(people));