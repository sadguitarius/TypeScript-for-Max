mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let width = 0;
let height = 0;

const outImage = new Image("oscillator.tif");
let myFunction = 0;

mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function setTranslateFunction(v: number) {
	myFunction = v;
	mgraphics.redraw();
}

function paint() {
	// calculate the current width and height
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);

	mgraphics.set_line_width(10);

	// special case for drawing inside the box!
	if (myFunction != 7) {
		switch (myFunction) {
			case 0:	// standard drawing
				mgraphics.identity_matrix();
				break;
			case 1:	// x position translation, + 100
				mgraphics.identity_matrix();
				mgraphics.translate(100, 0);
				break;
			case 2: // y position translation, + 100
				mgraphics.identity_matrix();
				mgraphics.translate(0, 100);
				break;
			case 3:	// x position translation, - 100
				mgraphics.identity_matrix();
				mgraphics.translate(-100, 0);
				break;
			case 4: // y position translation, - 100
				mgraphics.identity_matrix();
				mgraphics.translate(0, -100);
				break;
			case 5:	// dual translation, + 100
				mgraphics.identity_matrix();
				mgraphics.translate(100, 100);
				break;
			case 6: // dual translation, - 100
				mgraphics.identity_matrix();
				mgraphics.translate(-100, -100);
				break;
		}

		// draw a box around things
		mgraphics.rectangle(100, 100, 100, 100);
		mgraphics.stroke();

		// draw your image
		mgraphics.image_surface_draw(outImage);
	} else {
		mgraphics.identity_matrix();

		// draw the rectangle in place
		mgraphics.rectangle(100, 100, 100, 100);
		mgraphics.stroke();

		// move the "user space" to the appropriate location
		mgraphics.translate(120, 120);

		// draw the image
		mgraphics.image_surface_draw(outImage);
	}


}

export {}