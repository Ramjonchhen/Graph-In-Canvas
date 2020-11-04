var canvas = document.querySelector("canvas");
canvas.width = 1000;
canvas.height = 500;

// global variables
let xOrigin = 20;
let yOrigin = 490;

let yAxisLimit = 20;
let xAxisLimit = 980;

let yAxisDisplayLimit = yAxisLimit + 10;
let xAxisDisplayLimit = xAxisLimit - 30;

let xIncr, yIncr;

let arr = [10, 10, 5, 5, 5];

var c = canvas.getContext("2d");

c.beginPath();
// drawing the y-axis points
c.moveTo(xOrigin, yOrigin);
c.lineTo(xOrigin, yAxisLimit);

// drawing the x-axis points
c.moveTo(xOrigin, yOrigin);
c.lineTo(xAxisLimit, yOrigin);

c.stroke();

function drawNumbersOnAxis() {
  // c.font("3px Arial");
  // ctx.fillText("ram",xDraw+8,yDraw);
  let xDraw = xOrigin,
    yDraw = yOrigin;
  yIncr = (yOrigin - yAxisDisplayLimit) / Math.max(...arr);
  while (yDraw >= yAxisDisplayLimit) {
    c.beginPath();
    c.moveTo(xDraw, yDraw);
    c.lineTo(xDraw + 5, yDraw);

    c.stroke();
    yDraw = yDraw - yIncr;
  }
}

function drawPoints() {
  yIncr = (yOrigin - yAxisDisplayLimit) / Math.max(...arr);
  xIncr = (xAxisDisplayLimit - xOrigin) / arr.length;

  c.beginPath();
  c.moveTo(xOrigin, yOrigin);

  //c.font("20px Arial");

  let xPlot = xOrigin,
    yPlot;
  for (let value of arr) {
    xPlot += xIncr;
    yPlot = yOrigin - value * yIncr;
    console.log(`xPlot: ${xPlot} yPlot: ${yPlot}`);
    c.lineTo(xPlot, yPlot);
    //c.fillText(xPlot+10,yPlot,value);
    c.stroke();
  }
}

//drawNumbersOnAxis();
drawPoints();
