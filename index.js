function deleteLastChar(word) {
  // write your code here
     return word.substring(0, word.length - 1);
}

console.log(deleteLastChar("asdfgh"))
console.log(deleteLastChar("qqqqqqqqqqqqqqqqqqqqqqh"))

function AreaOfSquare(length) {
  // write your code here
   return Math.pow(length, 2);
}

console.log(AreaOfSquare(3))
console.log(AreaOfSquare(8))

function reverse_case(strParam) {
  // write your code here
return strParam.split('').map(function(x){
  if (x === x.toUpperCase()){
    return x.toLowerCase()
  }
  return x.toUpperCase()
}).join("");
};

console.log(reverse_case("Ok"));







