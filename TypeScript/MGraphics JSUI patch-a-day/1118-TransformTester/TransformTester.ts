mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const myTransform = [1., 0., 0., 1., 0., 0.];

mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function xx(v: number) {
	myTransform[0] = v;
	mgraphics.redraw();
}

function xy(v: number) {
	myTransform[1] = v;
	mgraphics.redraw();
}

function yx(v: number) {
	myTransform[2] = v;
	mgraphics.redraw();
}

function yy(v: number) {
	myTransform[3] = v;
	mgraphics.redraw();
}

function x0(v: number) {
	myTransform[4] = v;
	mgraphics.redraw();
}

function y0(v: number) {
	myTransform[5] = v;
	mgraphics.redraw();
}

function paint() {

	// set up the transform
	mgraphics.transform(myTransform[0],
		myTransform[1],
		myTransform[2],
		myTransform[3],
		myTransform[4],
		myTransform[5]);

	// set the line width
	mgraphics.set_line_width(2);

	// do a line through the origin
	mgraphics.move_to(-100, -100);
	mgraphics.line_to(100, 100);
	mgraphics.stroke();

	// do a rectangle
	mgraphics.rectangle(100, 100, 50, 50);
	mgraphics.stroke();

	// do an ellipse
	mgraphics.ellipse(150, 150, 50, 50);
	mgraphics.stroke();

	// return to the identity matrix for the future
	mgraphics.identity_matrix();
}

export {}