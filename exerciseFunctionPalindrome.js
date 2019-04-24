function Palindrome(number) {
var x = number;
var y = 0;

  while (x>0){
      var z = Math.floor(x%10);
      y = y*10+z;
      x = Math.floor(x/10);
    }
  if (number == y){
    return true;
  }else{
    return false;
  }
}

console.log(Palindrome(12321));