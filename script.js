var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 1;
var radius = "50";
var mouseEvent = "empty";
var last_x, last_y;

canvas.addEventListener("mousedown", function () {
  mouseEvent = "mouseDown";
  color = document.getElementById("color").value;
  width = document.getElementById("lineWidth").value;
  radius = document.getElementById("radius").value;
});

canvas.addEventListener("mousemove", function (e) {
  var currentX = e.clientX - canvas.offsetLeft;
  var currentY = e.clientY - canvas.offsetTop;
  if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentX, currentY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  last_x = currentX;
  last_y = currentY;
});

canvas.addEventListener("mouseup", function () {
  mouseEvent = "mouseUp";
});

canvas.addEventListener("mouseleave", function () {
  mouseEvent = "mouseLeave";
});

function erase() {
  ctx.clearRect(0, 0, 800, 600);
}
