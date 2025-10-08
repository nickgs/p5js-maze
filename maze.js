var size = 400

function setup() {
  createCanvas(size, size);
  
  drawLine(0, 0 , size, size)
}

function drawLine(x, y, w, h) {
  var leftToRight = random(1) >= 0.5 // Make this true or false. 
  
  if(leftToRight) {
    line(x, y, x + w, y + h)
  }
  else {
    line(x + w, y, x, y + h)
  }
}
