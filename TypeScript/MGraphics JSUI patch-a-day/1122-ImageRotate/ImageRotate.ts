mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let myCount = 0;
const image = new Image("oscillator.tif");

mgraphics.redraw();

function msg_int(v: number) {
	myCount = v;
	mgraphics.redraw();
}

function paint() {
	let p1: Pattern;
	const width = image.size[0];
	const height = image.size[1];

	gc();

	// draw an un-warped image
	mgraphics.translate(100, 100);
	mgraphics.image_surface_draw(image);

	if (myCount > 0) {
		// rotation causes warping, so we have to do this...
		mgraphics.save();
		mgraphics.rotate(45 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 1) {
		// and this...
		mgraphics.save();
		mgraphics.rotate(90 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 2) {
		// and so on...
		mgraphics.save();
		mgraphics.rotate(135 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 3) {
		mgraphics.save();
		mgraphics.rotate(180 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 4) {
		mgraphics.save();
		mgraphics.rotate(225 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 5) {
		mgraphics.save();
		mgraphics.rotate(270 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}

	if (myCount > 6) {
		mgraphics.save();
		mgraphics.rotate(315 * Math.PI / 180);
		p1 = mgraphics.pattern_create_for_surface(image);
		mgraphics.set_source(p1);
		mgraphics.rectangle(0, 0, width, height);
		mgraphics.fill();
		mgraphics.restore();
	}
}

export {}