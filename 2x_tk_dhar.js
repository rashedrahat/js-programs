// asking money from a friend based on the total price of things.

var chalerDam = 55;
var daalerDam = 80;

function sum(num1, num2) {
  var res = num1 + num2;
  return res;
}

function duiGoonKor(num) {
  var res = num * 2;
  return res;
}

function dharDe(amount) {
  var frndTk = amount;
  return frndTk;
}

var total = sum(chalerDam, daalerDam);
var dharLagbe = duiGoonKor(total);
var tkPaisi = dharDe(dharLagbe);
console.log(tkPaisi);
