function grouping (scores) {
 nilaiKelulusan={
  pass:[],
  fail:[]
 }
 for (i=0; i<scores.length; i++){
  if(scores[i]<75){
   nilaiKelulusan.pass.push(scores[i])
  }else{
   nilaiKelulusan.fail.push(scores[i])
  }
 }return nilaiKelulusan
}


console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

//console.log(grouping([]));
// // { pass: [], fail: [] }