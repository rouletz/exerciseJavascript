//cara ke 1
function sortByCharacter (text) {
 return text.split('').sort().join(''); 
}

//cara ke 2
function sortByCharacter (text) {
var arr = text.split(''); // split terlebih dahulu agar menjadi array
for(var i = 0; i<arr.length; i++){ //pengulangan untuk panjang array 
  for(var j = i + 1; j<arr.length; j++){ // pengulangan untuk nilai array
   //penilaian berdasarkan nilai ASCII, jika lebih besar maka dipindahkan
    if(arr[i] > arr[j]){
     var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}
return arr.join('');
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'