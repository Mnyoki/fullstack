canvas = O('mycanvas');
context = canvas.getContext('2d');
context.fillStyle = 'lime';
context.strokeStyle = 'green';
S(canvas).border = '1px solid black';
S(canvas).background = 'gray';

context.beginPath();
context.moveTo(160, 120);
context.arc(160, 120, 70, 0, Math.PI * 2, false);
context.closePath();
context.fill();

S('myimg').border = '1px solid black';
S('myimg').background = 'blue';
O('myimg').src = canvas.toDataURL();

S('imgtst').border = '2px solid blue';
S('imgtst').background = 'green';
O('imgtst').src = canvas.toDataURL();

S('jpeg').background = 'red';
O('jpeg').src = canvas.toDataURL('image/jpeg', 1);
 
S('info').color = 'blue';
S('info').textContent += '? better start than living with regret.'

canvas = O('me');
S(canvas).background = 'lime'
contet = canvas.getContext('2d');
contet.fillStyle = 'blue';
contet.fillRect(320, 240, 400, 400);
contet.clearRect(40, 40, 560, 160);
contet.beginPath();
contet.moveTo(160, 120);
contet.arc(160, 120, 70, 0, Math.PI * 2, false);
contet.closePath();
contet.fill();