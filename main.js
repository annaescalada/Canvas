'use strict';

var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('2d');

var frameID = null;

console.log(ctx);

ctx.fillStyle = 'orange';

ctx.fillRect(0, 0, 100, 100);

var positionX = 0;
function draw() {
  // ctx.fillStyle = 'white';
  // ctx.fillRect(positionX, 0, 100, 100);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  positionX++;
  ctx.fillStyle = 'yellow';
  ctx.fillRect(positionX, 0, 100, 100);
  frameID = window.requestAnimationFrame(draw);
  if (frameID === 300) {
    cancelAnimationFrame(frameID);
  }
}

draw();



