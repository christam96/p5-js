function setup() {
  createCanvas(600, 400);
  line(300, 0, 300, 400);
}

function draw() {
  if (mouseX > width/2) {
    changeLeft(true);
  } else {
    changeLeft(false); 
  }
  
  if (mouseX < width/2) {
    changeRight(true);
  } else {
    changeRight(false); 
  }
  
  //Sun
  fill(255, 200, 50);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}

function changeLeft(black) {
  var r;
  if (black == true) {
    r1 = map(mouseX, width/2, width, 204, 0);
    r2 = map(mouseX, width/2, width, 255, 0);
    r3 = map(mouseX, width/2, width, 255, 0);
    fill(r1, r2, r3);
  } else {
    r1 = map(mouseX, 0, width/2, 255, 204);
    r2 = map(mouseX, 0, width/2, 255, 255);
    r3 = map(mouseX, 0, width/2, 102, 255);
    fill(r1, r2, r3); 
  }
  rect(0, 0, width/2, height);
  
  if (black == true) {
    fill(155);
    rect(20, 300, 90, 100);
    rect(100, 280, 90, 120);
    rect(190, 300, 90, 100);

    // LHS Windows 
    fill(255)
    rect(35, 330, 20, 20);
    rect(65, 330, 20, 20);
    rect(115, 310, 25, 25);
    rect(150, 310, 25, 25);
    rect(210, 330, 20, 20);
    rect(240, 330, 20, 20); 
  } else {
    fill(210, 180, 140);
    rect(20, 300, 90, 100);
    rect(100, 280, 90, 120);
    rect(190, 300, 90, 100);

    // LHS Windows 
    fill(255)
    rect(35, 330, 20, 20);
    rect(65, 330, 20, 20);
    rect(115, 310, 25, 25);
    rect(150, 310, 25, 25);
    rect(210, 330, 20, 20);
    rect(240, 330, 20, 20);  
  }
}

function changeRight(black) {
  if (black == true) {
    r1 = map(mouseX, 0, width/2, 0, 204);
    r2 = map(mouseX, 0, width/2, 0, 255);
    r3 = map(mouseX, 0, width/2, 0, 255);
    fill(r1, r2, r3);
  } else {
    r1 = map(mouseX, width/2, width, 204, 255);
    r2 = map(mouseX, width/2, width, 255, 255);
    r3 = map(mouseX, width/2, width, 255, 102);
    fill(r1, r2, r3);  
  }
  rect(width/2, 0, width, height); 
  
  if (black == false) {
    // Building
    fill(210, 180, 140);
    rect(320, 300, 90, 100);
    rect(400, 280, 90, 120);
    rect(490, 300, 90, 100);
    
    // Windows
    fill(255)
    rect(335, 330, 20, 20);
    rect(365, 330, 20, 20);
    rect(415, 310, 25, 25);
    rect(450, 310, 25, 25);
    rect(510, 330, 20, 20);
    rect(540, 330, 20, 20);
  } else {
    // Buildings
    fill(155);
    rect(320, 300, 90, 100);
    rect(400, 280, 90, 120);
    rect(490, 300, 90, 100);

    // Windows 
    fill(255)
    rect(335, 330, 20, 20);
    rect(365, 330, 20, 20);
    rect(415, 310, 25, 25);
    rect(450, 310, 25, 25);
    rect(510, 330, 20, 20);
    rect(540, 330, 20, 20);
  }
}
  