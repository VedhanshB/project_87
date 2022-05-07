canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

g_car_w = 75;
g_car_h = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

g_car_x = 5;
g_car_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, g_car_x, g_car_y, g_car_w, g_car_h);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(g_car_y >= 0)
	{
		g_car_y = g_car_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(g_car_y <= 350)
	{
		g_car_y = g_car_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(g_car_x >= 0)
	{
		g_car_x = g_car_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(g_car_x <= 750)
	{
		g_car_x = g_car_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}
