var size = 400

function setup() {
  createCanvas(size, size);
  
  drawLine(0, 0 , size, size)
}

function drawLine(x, y, w, h) {
  line(x, y, x + w, y + h) 
}
