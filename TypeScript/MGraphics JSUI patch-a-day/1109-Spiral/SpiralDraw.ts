mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

let spinamt = 0.0;

mgraphics.redraw();

function spin(v: number) {
	spinamt = v;
	mgraphics.redraw();
}

function paint() {
	const aspect = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);

	mgraphics.set_source_rgb(0.5, 0., 0.);
	mgraphics.set_line_width(.05);
	mgraphics.move_to(0, 0);

	mgraphics.translate(aspect, 1);
	mgraphics.rotate(spinamt);	// the rotation changes drawing space, not the image or path!!!

	for (let i = 10; i > 0; i--) {
		// draw the bottom half, shifted for the rotation
		mgraphics.arc((aspect * -1), 1.0, i / 10, 0.0, 3.14159265);
		// draw the top, shifted and shortened, shifted for the rotation
		mgraphics.arc((aspect * -1) - 0.05, 1.0, (i / 10) - 0.05, 3.14159165, 6.28318330);
		mgraphics.stroke();
	}

}

export {}