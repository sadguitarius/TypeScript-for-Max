mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const myImage = new Image("oscillator.tif");
const locs = new Array(50) as number[][];

setup();
mgraphics.redraw();

function setup()
{
	// calculate the current width and height
	const width = (box.rect[2] - box.rect[0]) - myImage.size[0];
	const height = (box.rect[3] - box.rect[1]) - myImage.size[1];

	// initial loads
	for (let i=0; i<locs.length; i++) {
		locs[i] = [Math.random() * width, Math.random() * height];
	}
}

function bang()
{
	// calculate the current width and height
	const width = (box.rect[2] - box.rect[0]) - myImage.size[0];
	const height = (box.rect[3] - box.rect[1]) - myImage.size[1];

	// move everything up one slot
	for (let i=(locs.length - 1); i>0; i--) {
		locs[i] = locs[i-1];
	}

	locs[0] = [Math.random() * width, Math.random() * height];
	mgraphics.redraw();
}

function paint()
{
	for (let i=0; i<locs.length; i++) {
		mgraphics.save();
		mgraphics.set_source_rgba(1, 1, 1, (locs.length - i) / locs.length);
		mgraphics.translate(locs[i][0], locs[i][1]);
		mgraphics.image_surface_draw(myImage);
		mgraphics.restore();
	}
}

export {}