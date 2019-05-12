function convert (data) {
 var temp = [];
 for(i=0; i<data.length; i++){
  var person={}
    person.id=data[i][0];
    person.firstName=data[i][1];
    person.lastName=data[i][2];
    person.email=data[i][3];
 temp.push(person)
 }return temp
}

// TEST CASES
console.log(convert([[1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],[2, 'Sergei', 'Dragunov', 'sergei@mail.com']]));
/*
[ { id: 1,
   firstName: 'Dimitri',
   lastName: 'Wahyudiputra',
   email: 'dimitri@mail.com' },
 { id: 2,
   firstName: 'Sergei',
   lastName: 'Dragunov',
   email: 'sergei@mail.com' } ]
*/
console.log(convert([]));
// []