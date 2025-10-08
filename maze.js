var size = 400
var step = 20

function setup() {
  createCanvas(size, size);
  
  for(var x = 0; x < size; x += step) {
    drawLine(x, 0 , step, step)
  }
  
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
