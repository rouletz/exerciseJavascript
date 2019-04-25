var hewan = [];
var index = 0;

function groupAnimals(animals){
 //1. array di urutkan terlebih dahulu
 var binatang = animals.sort();
 //2. lopping
  for(i=0; i<animals.length; i++){
 //3. memasukkan array ke dalam index
   if(hewan.length===0){
    hewan.push([animals[i]]);
 //4. membandingkan huruf pada index
   }else if(hewan[index][0][0]==animals[i][0]){
    hewan[index].push(animals[i]);
   }else{
    hewan.push([animals[i]]);
    index++;
   }
  }return hewan
}

//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]