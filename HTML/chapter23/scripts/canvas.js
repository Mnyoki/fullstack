canvas = O('mycanvas');
context = canvas.getContext('2d');
context.fillStyle = 'red';
S(canvas).border = '1px solid red';
S(canvas).background = 'green'

context.beginPath();
context.moveTo(0, 180);
context.arc(160, 120, 70, 0, Math.PI * 2 , false);
context.closePath();
context.fill();