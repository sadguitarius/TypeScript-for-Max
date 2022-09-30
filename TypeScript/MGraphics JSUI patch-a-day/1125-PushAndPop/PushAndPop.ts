mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const testImage = new Image("oscillator.tif");
let willUseLater: Image;		// the variable to hold our master image...
let isReady = 0;

mgraphics.redraw();

function bang() {
	isReady = 0;
	mgraphics.redraw();
}


function paint() {
	if (!isReady) {
		gc();   // clean up (if we have to)

		// calculate the current width and height
		const width = box.rect[2] - box.rect[0];
		const height = box.rect[3] - box.rect[1];

		mgraphics.push_group()
		for (let i = 0; i < 100; i++) {
			mgraphics.translate(Math.random() * width, Math.random() * height);
			mgraphics.image_surface_draw(testImage);
			mgraphics.set_source_rgb(Math.random(), Math.random(), Math.random());
			mgraphics.rectangle(0, 0, testImage.size[0], testImage.size[1]);
			mgraphics.stroke();
			mgraphics.identity_matrix();
		}
		willUseLater = new Image(mgraphics.pop_group());
		isReady = 1;
	}

	mgraphics.image_surface_draw(willUseLater);
}

export {}