/*
Circle object rolling across line
*/
function setup() {
  createCanvas(1000,1000);
}

// Create circle object
var circle = {
  x : 0,
  y : (1000/2)-25,
  diameter : 50,
};

function draw() {
  background(250, 250, 100)
  line(0, height/2, width, height/2);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  circle.x = circle.x+1;
}
