mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const outmatrix = new JitterMatrix(4, "char", 256, 256);
const rotation = [0.0, 0.0, 0.0];

// create a never-ending timer
const ticker = new Task(ontick, this);
ticker.interval = 60;
ticker.repeat();

mgraphics.redraw();

function ontick() {
	rotation[0] += .124;
	if (rotation[0] > 6.28) rotation[0] = 0;

	rotation[1] += .062;
	if (rotation[1] > 6.28) rotation[1] = 0;

	rotation[2] += .031;
	if (rotation[2] > 6.28) rotation[2] = 0;

	mgraphics.redraw();
}

function paint() {
	const width = box.rect[2] - box.rect[0];
	const height = box.rect[3] - box.rect[1];
	// post("size: ", width, " ", height, '\n');

	mgraphics.push_group();

	// make a nice background
	mgraphics.set_source_rgb(.9, .9, 1.);
	mgraphics.rectangle(-100, -100, width + 200, height + 200);
	mgraphics.fill();

	// draw the planet path
	mgraphics.save()
	mgraphics.transform(1, .15, .15, 1, -30, -30);
	mgraphics.translate(width / 2, height / 2);
	mgraphics.rotate(rotation);

	mgraphics.ellipse(-(width / 8), -(height / 8), width / 4, height / 4);
	mgraphics.ellipse(-(width / 4), -(height / 4), width / 2, height / 2);
	mgraphics.ellipse(-(width / 2), -(height / 2), width, height);
	mgraphics.restore();

	mgraphics.set_line_width(3);
	mgraphics.set_source_rgba(.5, .5, .5, 1);
	mgraphics.stroke();

	// draw the "planet"
	mgraphics.save();
	mgraphics.transform(1., .15, .15, 1., -30, -30);
	mgraphics.translate(width / 2, height / 2);
	mgraphics.rotate(rotation[0]);
	mgraphics.ellipse((width / 16) - 2, (height / 16) - 2, width / 16, height / 16);
	mgraphics.rotate(rotation[1] - rotation[0]);
	mgraphics.ellipse((width / 8) - 5, (height / 8) - 5, width / 8, height / 8);
	mgraphics.rotate(rotation[2] - rotation[1]);
	mgraphics.ellipse((width / 4) - 7, (height / 4) - 7, width / 4, height / 4);
	mgraphics.restore();

	mgraphics.set_source_rgba(.4, .0, .0, .4);
	mgraphics.fill_preserve();	// saves the path for the stroke

	mgraphics.set_line_width(3);
	mgraphics.set_source_rgb(0., 0., 0.);
	mgraphics.stroke();

	mgraphics.identity_matrix();
	const theImage = new Image(mgraphics.pop_group());
	mgraphics.image_surface_draw(theImage);

	theImage.tonamedmatrix(outmatrix.name);
	outlet(0, "jit_matrix", outmatrix.name);

	gc();
}

export {}