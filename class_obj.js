class Flower {
  constructor(accept) {
    this.accept = accept;
  }
}

var loveFlower = new Flower(true);
var broFlower = new Flower(false);

console.log("Proposal acceptance: " + loveFlower.accept + "!");
console.log("Proposal acceptance: " + broFlower.accept + "!");
