var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';
ctx.fillStyle = 'red';
ctx.globalAlpha = 0.5;

ctx.fillText('Hello World!', 50, 50);