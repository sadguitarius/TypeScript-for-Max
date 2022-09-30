mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

let rotAdd = 0.0;

mgraphics.redraw();

function bang() {
	rotAdd += .0062;
	if (rotAdd > 6.28) rotAdd = 0.0;
	mgraphics.redraw();
}

function paint() {
	gc();
	const aspect = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);

	// draw the center
	mgraphics.save();
	mgraphics.translate(.8, .45);
	mgraphics.svg_render("SpiralStar.svg");
	mgraphics.restore();

	// get the initial offset and rotation
	mgraphics.translate(aspect, 1.0);
	mgraphics.rotate(rotAdd);

	// draw the surrounding images
	for (let i = 0; i < 10; i++) {
		mgraphics.svg_render("SpiralStar.svg");
		mgraphics.rotate(.62);
	}

	// return to normal
	mgraphics.identity_matrix();
}

export {}