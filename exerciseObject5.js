function complexConversion (text) {
var temp = [];
 var pisah1 = text.split(',');
 for (i=0;i<pisah1.length;i++){
  var pisah2 = pisah1[i].split(':');
  for(j=0;j<pisah2.length;j++){
   temp.push(pisah2[j])
  }
 }var obj = {};
  for(k=0;k<temp.length;k++){
   if(((k+1)%2!==0) && ((k+1)!==temp[k].length-1)){
   obj[temp[k]]=temp[k+1]; 
  }
 }return obj
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }