function threeStepsAB (text) {
var hasil = false;
 for (i=0; i<text.length; i++){
  if (text[i]==='a'){
   if (text[i+4]==='b'){
    hasil = true;
   }
  }if (text[i]==='b'){
    if (text[i+4]==='a'){
     hasil = true;
    }
  }
 }return hasil
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false