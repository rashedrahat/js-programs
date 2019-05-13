var things = ["tShirt", "jeans", "shoes", "book", "towel", "charger", "bottle"];
for (i = 0; i < things.length; i++) {
  var thing = things[i];
  if (thing == "charger") {
    console.log(thing + " paichi!");
    break;
  }
}
