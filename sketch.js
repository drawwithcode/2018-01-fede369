
function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(0);
}

var value = 128;
function draw() {
	background(204);
	strokeWeight(2);

	//Wheel
	fill(255,0,0);
	ellipse(250, 465, 70, 70);
	fill(204,204,204);
	ellipse(250, 465, 60, 60);
	line(250, 465, 250, 495);
	line(250, 465, 225, 480);
	line(250, 465, 275, 480);
	line(250, 465, 225, 450);
	line(250, 465, 275, 450);

	//arms
	bezier(200, 325, 170, 400, 140, 400, 120, 325);
	fill(255,255,0);
	arc(120, 325, 20, 15, TWO_PI, PI, PIE);
	noFill();
	bezier(300, 325, 330, 375, 360, 420, 380, 440);
	fill(255,255,0);
	ellipse(380, 440, 20, 15);

	//laptop
	fill(0,0,128);
	rect(85, 250, 5, 70, 20);
	rect(85, 320, 70, 5, 20);

	//Body
	//sweatshirt
	fill(255,165,0);
	arc(250, 325, 64, 15, PI, TWO_PI);
	rect(200, 325, 100, 75);
	triangle(218, 325, 282, 325, 250, 355);
	line(250, 355, 250, 400);
	//trousers
	fill(255,255,0);
	triangle(200, 400, 300, 400, 250, 465);

	//Neck
	line(250, 285, 250, 325);

	//Head
	fill(250,255,0);
	ellipse(250, 240, 90, 90);

	//headphones
	fill(0,0,128);
	arc(195, 238, 35, 40, PI/2, -PI/2, CHORD);
	arc(305, 238, 35, 40, -PI/2, PI/2, CHORD);
	noFill();
	bezier(195, 218, 216.7, 155, 283.4, 155, 305, 218);

	arc(185, 238, 35, 40,  HALF_PI+QUARTER_PI, PI + QUARTER_PI);
	arc(175, 238, 35, 40,  HALF_PI+QUARTER_PI, PI + QUARTER_PI);

	arc(315, 238, 35, 40, -QUARTER_PI, QUARTER_PI);
	arc(325, 238, 35, 40, -QUARTER_PI, QUARTER_PI);


	//hat
	fill(255,165,0);
	rect(200, 210, 100, 10, 20);
	arc(250, 210, 85, 50, PI, TWO_PI);

	//mouth
	fill(255,0,0);
	line(240, 260, 260, 260);
	arc(250, 260, 20, 15, TWO_PI, PI);

	//sunglasses
	strokeWeight(1.5);
	line(240, 238, 260, 238);
	fill(0,0,128);
	ellipse(230, 238, 30, 25);
	ellipse(270, 238, 30, 25);

	//music
	fill(value);
	rect(370,120,20,10);
	line(370, 120, 370, 140);
	ellipse(365, 145, 15, 10);

	rect(410,80,20,10);
	line(410, 80, 410, 100);
	ellipse(405, 105, 15, 10);
	line(430, 80, 430, 100);
	ellipse(425, 105, 15, 10);

	rect(425,140,20,10);
	line(425, 140, 425, 160);
	ellipse(420, 165, 15, 10);

	rect(380,165,20,10);
	line(380, 165, 380, 185);
	ellipse(375, 190, 15, 10);
	line(400, 165, 400, 185);
	ellipse(395, 190, 15, 10);

}

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 128;
  }
}
