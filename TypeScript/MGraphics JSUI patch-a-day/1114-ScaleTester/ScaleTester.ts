mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

const outImage = new Image("oscillator.tif");
let myFunction = 0;

mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function setScaleFunction(v: number) {
	myFunction = v;
	mgraphics.redraw();
}

function paint() {
	mgraphics.set_line_width(10);

	switch (myFunction) {
		case 0:	// standard drawing
			mgraphics.identity_matrix();
			break;
		case 1:	// x-only scaling, larger by 50%
			mgraphics.identity_matrix();
			mgraphics.scale(1.5, 1.0);
			break;
		case 2: // y-only scaling, larger by 50%
			mgraphics.identity_matrix();
			mgraphics.scale(1.0, 1.5);
			break;
		case 3:	// x-only scaling, smaller by 50%
			mgraphics.identity_matrix();
			mgraphics.scale(0.5, 1.0);
			break;
		case 4: // y-only scaling, smaller by 50%
			mgraphics.identity_matrix();
			mgraphics.scale(1.0, 0.5);
			break;
		case 5:	// both scaled +50%
			mgraphics.identity_matrix();
			mgraphics.scale(1.5, 1.5);
			break;
		case 6: // both scaled -50%
			mgraphics.identity_matrix();
			mgraphics.scale(0.5, 0.5);
			break;
	}

	// draw a box around things
	mgraphics.rectangle(100, 100, 100, 100);
	mgraphics.stroke();

	// draw your image
	mgraphics.image_surface_draw(outImage);

	// draw some text
	mgraphics.move_to(50, 300);
	mgraphics.set_font_size(20);
	mgraphics.text_path("Here is some 20 point text.");
	mgraphics.fill();
}

export {}