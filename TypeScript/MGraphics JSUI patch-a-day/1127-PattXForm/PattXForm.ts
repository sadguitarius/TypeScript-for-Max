mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const transAmt = [0.0, 0.0];	// will hold our translation
const scaleAmt = [1.0, 1.0];	// will hold our scaling
let rotAmt = 0.0;					// will hold our rotation

let thePattern: Pattern;						// our final pattern

makePattern();
mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function offset(x: number, y: number) {
	transAmt[0] = x;
	transAmt[1] = y;
	makePattern();
	mgraphics.redraw();
}

function scale(x: number, y: number) {
	scaleAmt[0] = x;
	scaleAmt[1] = y;
	makePattern();
	mgraphics.redraw();
}

function rotation(v: number) {
	rotAmt = v;
	makePattern();
	mgraphics.redraw();
}

function makePattern() {
	gc();
	thePattern = mgraphics.pattern_create_linear(50, 50, 300, 300);
	thePattern.add_color_stop_rgba(0., 1., 1., 1., 1.);
	thePattern.add_color_stop_rgba(1., 0., 0., 0., 1.);
	thePattern.translate(transAmt[0], transAmt[1]);
	thePattern.rotate(rotAmt);
	thePattern.scale(scaleAmt[0], scaleAmt[1]);
}

function paint() {
	// calculate the current width and height
	const width = box.rect[2] - box.rect[0];
	const height = box.rect[3] - box.rect[1];


	mgraphics.rectangle(0., 0., width, height);
	mgraphics.set_source(thePattern);
	mgraphics.fill();

	mgraphics.set_source_rgba(0., 0., 1., .4);
	mgraphics.set_line_width(10);
	mgraphics.rectangle(width / 3, height / 3, width / 3, height / 3);
	mgraphics.stroke();
}

export {}