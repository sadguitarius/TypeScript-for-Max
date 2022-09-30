mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

let stashPath: Path;

mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function paint() {
	mgraphics.move_to(0, 0);
	mgraphics.set_source_rgb(1, 0, 0);
	mgraphics.set_line_width(.02);

	mgraphics.line_to(0.1, 0.1);
	mgraphics.rel_line_to(-0.05, 0.05);
	mgraphics.rel_line_to(-0.05, -0.05);
	mgraphics.rel_line_to(0.1, -0.1);
	stashPath = mgraphics.copy_path();

	mgraphics.translate(0.1, 0.1);
	mgraphics.append_path(stashPath);

	mgraphics.translate(-0.2, 0.0)
	mgraphics.append_path(stashPath);

	mgraphics.translate(0.1, 0.1);
	mgraphics.append_path(stashPath);

	stashPath = mgraphics.copy_path();
	mgraphics.stroke();

	for (let i = 0; i < 60; i++) {
		mgraphics.set_source_rgb(0, 0, 0);
		mgraphics.translate((Math.random() * 4) - 1, (Math.random() * 2) - 1);
		mgraphics.rotate(Math.random());
		mgraphics.scale((Math.random() * 2) - 1, (Math.random() * 2) - 1);

		mgraphics.append_path(stashPath);
		mgraphics.stroke();

		mgraphics.identity_matrix();
	}

}

export {}