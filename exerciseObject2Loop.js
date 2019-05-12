function convert(data){
 var temp = [];
  for (i=0;i<data.length;i++){
   var tampil ={
         id : 0,
         firstName:'',
         lastName:'',
         email:'',
   }
   var j = 0;
    for (key in tampil){
     tampil[key]+=data[i][j];
     j++;
   }temp.push(tampil)
  }return temp
 }
 console.log(convert([[1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],[2, 'Sergei', 'Dragunov', 'sergei@mail.com']]));