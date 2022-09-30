mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

const numToDisplay = 100;
const fontSize = 12;

function bang() {
	mgraphics.redraw();
}

function paint() {
	const aspect = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);

	const fl = mgraphics.getfontlist();

	let i;
	for (i = 0; i < numToDisplay; i++) {
		const myFont = Math.floor(Math.random() * (fl.length - 1));
		mgraphics.select_font_face(fl[myFont]);
		mgraphics.set_font_size(fontSize);
		mgraphics.set_source_rgb(Math.random(), Math.random(), Math.random());
		mgraphics.move_to((Math.random() * (aspect * 2.0)) - aspect, (Math.random() * 2.0) - 1.0);
		mgraphics.text_path(fl[myFont]);
		mgraphics.fill();
	}
}

export {}