function kotogoj(foot) {
  var goj = foot / 3;
  return goj;
}

function kotoMile(goj) {
  var mile = goj / 1760;
  return mile;
}

var feet = 29029;
var goj = kotogoj(feet);
var mile = kotoMile(goj);
console.log(mile);
