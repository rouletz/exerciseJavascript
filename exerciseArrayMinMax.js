function numberProcessing(numberArr) {
    var Min = Math.min(...numberArr);
    var Max = Math.max(...numberArr);
    var Sum = numberArr.reduce((a,b) => a+b);
    var Avg = Math.ceil(Sum/numberArr.length);
    var Even = [];
    var Odd = [];

    for (i=0; i<numberArr.length;i++){
        if (numberArr[i]%2==0){
            Even.push(numberArr[i]);
        }else{
            Odd.push(numberArr[i]);
        }
    }

    return 'Min : '+Min+' Max : '+Max+' Mean : '+Avg+' Odds : '+Odd+' Evens : '+Even
}
   
console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
//"Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"