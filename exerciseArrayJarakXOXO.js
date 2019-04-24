function targetTerdekat(arr) {
//tentukan posisi O
var posisiO = arr.indexOf('o');
//console.log(posisiO)

//tentukan posisi x
var posisiX = [];
for (i=0; i<arr.length; i++){
    if (arr[i]==='x'){
        posisiX.push(i);
        }
    }
//console.log(posisiX)

//Jarak Terpendek
var Terpendek=[];
    for (j=0; j<posisiX.length; j++){
        var Jarak = Math.abs(posisiX[j]-posisiO);
        Terpendek.push(Jarak);
        }
//console.log(Terpendek)

//Perbandingan Jarak
var JarakTerpendek = Terpendek[0]
    if (Terpendek.length<1){
        return 0;
    }else{
        for (k=0; k<Terpendek.length; k++){
            if(Terpendek[k]<JarakTerpendek){
            JarakTerpendek=Terpendek[k];
            }
        }return JarakTerpendek
    }

}
  
//TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2