mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let x = 20;
let y = 20;

function bang() {
	mgraphics.redraw();
}

function list(inx: number, iny: number) {
	x = inx;
	y = iny;
}

function paint() {
	gc();

	mgraphics.set_source_rgb(0, 0, 0);
	mgraphics.rectangle(0, 0, 300, 325);
	mgraphics.fill();

	mgraphics.ellipse(x, y, 100, 100);
	const tmp = mgraphics.pattern_create_radial(150, 167, 20, 50, 50, 0);
	tmp.add_color_stop_rgba(0, 1, 0, 0, 1);
	tmp.add_color_stop_rgba(1, 0, 1, 0, 1);
	mgraphics.set_source(tmp);
	mgraphics.fill();
}

export {}