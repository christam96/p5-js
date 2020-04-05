/*
Random spots
*/
function setup() {
  createCanvas(1800,1000);
  background(0);

}

function draw() {
  randomX = random(0, width);
  randomY = random(0, height);
  randomAlpha = random(55, 255);
  fill(color(120, 20, 40, randomAlpha));
  ellipse(randomX, randomY, 25, 25);
}
