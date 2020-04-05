/*
Point-and-click drawing with random colours.
*/
function setup() {
  createCanvas(1000,1000);
}

function draw() {
  if (mouseIsPressed == true) {
    v1 = random(255);
    v2 = random(255);
    v3 = random(255);
    stroke(color(v1, v2, v3))
    strokeWeight(4); // Adusts thickness of line
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
