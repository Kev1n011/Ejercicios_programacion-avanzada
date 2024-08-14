const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(110, 105, 100, 100);

ctx.fillStyle = "green";
ctx.fillRect(200, 190, 100, 100);
