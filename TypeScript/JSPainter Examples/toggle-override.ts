function paint() {
	const val = box.getvalueof(); // this is an array of size 1 -- NOPE
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	if (val) {
		mgraphics.set_source_rgba(box.getattr("checkedcolor") as number[]);
	} else {
		mgraphics.set_source_rgba(box.getattr("elementcolor") as number[]);
	}

	mgraphics.set_line_width(
		(2 / 12) * (box.getattr("thickness") as number) * 0.01 * width
	); // top left to bottom right, thin
	mgraphics.set_line_cap("square");

	const start = (7 / 24) * width;

	mgraphics.move_to(start, start);
	mgraphics.line_to(width - start, height - start);
	mgraphics.stroke();

	mgraphics.move_to(width - start, start);
	mgraphics.line_to(start, height - start);
	mgraphics.stroke();
}

export {};
