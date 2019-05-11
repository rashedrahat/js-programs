function isEven(number) {
  var reminder = number % 2;
  var isEven = false;
  if (reminder == 0) {
    isEven = true;
  }
  return isEven;
}

isEven(60);
