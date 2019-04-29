var numbers=[10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ];

function cariModus(angka) {
var angkaModus = [], nilai = false;
  
for (var i = 0; i < numbers.length; i++) {
  for (var j = i+1; j < numbers.length; j++) {
    if (angka[i] === angka[j]) {
      nilai = true;
      angkaModus.push(angka[i]);
    } else {
      nilai = false;
    }
  }
}
return (angkaModus[0] === undefined || nilai) ? -1 : angkaModus[0];
}
console.log(cariModus(numbers))


