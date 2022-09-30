mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const myImage = new Image("AlphaO.png");

const locArray = new Array<number[]>(10);

setup();
mgraphics.redraw();

function setup() {
	for (let i = 0; i < locArray.length; i++) {
		locArray[i] = [0, i * 20];
	}
}

function bang() {
	const width = (box.rect[2] - box.rect[0]) - myImage.size[0];

	for (let i = 0; i < locArray.length; i++) {
		locArray[i][0] = locArray[i][0] + ((i + 1) * 1.05);
		if (locArray[i][0] > width) {
			locArray[i][0] = 0;
		}
	}

	mgraphics.redraw();
}

function paint() {
	for (let i = 0; i < locArray.length; i++) {
		mgraphics.translate(locArray[i][0], locArray[i][1]);
		mgraphics.image_surface_draw(myImage);
		mgraphics.identity_matrix();
	}
}

export {}