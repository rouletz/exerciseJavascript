function csvToObject (text) {
 var pisah = text.split(',')
  var tampil = {
      name :'',
      email:'',
      gender:'' 
  }
  var j = 0;
   for (key in tampil){
    tampil[key]=pisah[j];
   }return tampil
 }

// TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
// { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
// { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
// { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }