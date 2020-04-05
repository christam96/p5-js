/*
* Create a stream of randomly coloured ellipses following your mouse.
*/

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  v1 = random(255);
  v2 = random(255);
  v3 = random(255);
  fill(color(v1, v2, v3))
  ellipse(mouseX, mouseY, 5, 5);
}
