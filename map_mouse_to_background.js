/*
Map function to change background colour
*/
function setup() {
  createCanvas(1000,1000);
}

function draw() {
  let r = map(mouseX, 0, width, 0, 255);
  let b = map(mouseY, 0, width, 0, 150);
  background(r, 150, b);

  fill(b, 100, r);
  ellipse(mouseX, mouseY, 50, 50);
}
