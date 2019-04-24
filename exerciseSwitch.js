var angka1 = 13;
var angka2 = 3;
var operator = '%';

switch (operator) {
    case '+' : {
        console.log(angka1+angka2);
        if ((angka1+angka2)%2==0){
            console.log('bilangan genap');
        }else{
            console.log('bilangan ganjil');
        }
        break;
    }
    case '-' : {
        console.log(angka1-angka2);
        if ((angka1-angka2)%2==0){
            console.log('genap');
        }else{
            console.log('ganjil');
        }
        break;
    }
    case '*' : {
        console.log(angka1*angka2);
        if ((angka1*angka2)%2==0){
            console.log('genap');
        }else{
            console.log('ganjil');
        }
        break;
    }
    case '/' : {
        console.log(angka1/angka2);
        if ((angka1/angka2)%2==0){
            console.log('genap');
        }else{
            console.log('ganjil');
        }
        break;
    }
    case '%' : {
        console.log(angka1%angka2);
        if ((angka1%angka2)%2==0){
            console.log('genap');
        }else{
            console.log('ganjil');
        } 
        break;
    }
    default: {console.log('Pilih Operator Yang Ada');}
}