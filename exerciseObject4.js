function deleteUndefinedKeys (object) {
 var hasil = {}
  for (key in object){
   if (object[key] != undefined){
    hasil[key] = object[key]
   }
  }return hasil
}


console.log(deleteUndefinedKeys({
 name: 'Dimitri',
 age: undefined,
 email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(deleteUndefinedKeys({
 name: undefined,
 age: undefined,
 email: undefined
}));
// {}