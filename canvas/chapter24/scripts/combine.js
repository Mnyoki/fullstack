canvas = O('text');
content = canvas.getContext('2d');
content.font = 'bold 160px "Times New Roman"'
content.texBaseline = 'start';
S(canvas).backgroung = 'lime';
//content.strokeText('Munyoki', 300,200);


image = new Image();
image.src = 'pix.jpg'

image.onload = function ()
{
    pattern = content.createPattern(image, 'repeat')
    content.fillStyle = pattern;
    content.fillText('EastWorld', 200, 170);
    content.strokeText('EastWorld', 200, 170);
    content.lineWidth = 3;
    content.lineCap = 'round';
}
    

/*
canvas = O('mycanvas');
context = canvas.getContext('2d');
S(canvas).background = 'gray';
context.clearRect(320, 80, 600, 200);

gradient = context.createRadialGradient(320, 20, 0,320);
gradient.addColorStop(0.00, 'red')
gradient.addColorStop(0.14, 'orange')
gradient.addColorStop(0.28, 'yellow')
gradient.addColorStop(0.42, 'green')
gradient.addColorStop(0.56, 'blue')
gradient.addColorStop(0.70, 'indigo')
gradient.addColorStop(0.84, 'violet')

context.fillStyle = gradient;
context.fillRect(80, 80, 500, 300)

context = canvas.getContext('2d');
S(canvas).background = 'lightblue';
//context.fillStyle = 'blue';
//context.strokeStyle = 'green';

//context.fillRect(20, 20, 600, 200);
context.clearRect(40, 40, 560, 160);
//context.strokeRect(60, 60, 520, 120);

gradient = context.createLinearGradient(0, 0, 160, 0);
gradient.addColorStop(1, 'white');
gradient.addColorStop(0, 'black');
context.fillStyle = gradient;
context.fillRect(20, 20, 135, 200);

gradient = context.createLinearGradient(0, 0, 0, 240);
gradient.addColorStop(0, 'yellow');
gradient.addColorStop(1, 'red');
context.fillStyle = gradient;
context.fillRect(175, 20, 135, 200);

gradient = context.createLinearGradient(320, 0, 480, 240);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'purple');
context.fillStyle = gradient;
context.fillRect(330, 20, 135, 200);

gradient = context.createLinearGradient(480, 240, 640, 0);
gradient.addColorStop(0, 'orange');
gradient.addColorStop(1, 'magenta');
context.fillStyle = gradient;
context.fillRect(485, 20, 135, 200)
*/