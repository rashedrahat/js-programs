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

function tkLagbe(first, second) {
  var total = sum(first, second);
  var dharLagbe = duiGoonKor(total);
  var tkPaisi = dharDe(dharLagbe);
  console.log(tkPaisi);
}

tkLagbe(28, 33);
