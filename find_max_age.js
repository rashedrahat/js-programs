var friend_age = [16, 17, 14, 28, 15];
var maxAge = 0;

for (i = 0; i < friend_age.length; i++) {
  var age = friend_age[i];
  if (age > maxAge) {
    maxAge = age;
  }
}

console.log("Max age: " + maxAge);
