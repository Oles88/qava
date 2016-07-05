

/*function check(age){
    if (age<18){
return "underage";
} else{
    return "adult"
}
}
var age = number (prompt("enter your age"));
var ageString=checkage(age);

*/

function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert( fib(7) );
/*n=Number(prompt('Vedit chislo'));*/ 