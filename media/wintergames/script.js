function setup() {
    createCanvas(500, 500);
  }

  function draw() {
    background(0);
    push();
    // fill(255, 204, 0);
    fill(mouseX, mouseY, mouseX*mouseY);
    translate(width * 0.5, height * 0.5);
    // translate(mouseX, mouseY);
    rotate(frameCount / mouseX);
    star(0, 0, 30, 70, 5);
    pop();
  }

  function mouseMoved() {
    // console.log(mouseX, mouseY);
  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }