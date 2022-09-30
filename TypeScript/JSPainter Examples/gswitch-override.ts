function paint()
{
	const val = box.getvalueof(); // this is an array of size 1
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	let i;
	const dashes = [0, 0];
	const inputs = box.getattr("inputs") as number;

	const dot_top_top = height * .10;
	const circle_size = height * .14;
	const line_width = height * 0.06;
	const line_midpoint_v = (height * 0.5); //  - (line_width * 0.5);
	const dot_bottom_top = (height * 0.90) - circle_size;
	const itemwidth = width / (inputs+1);

	// background
	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle_rounded(0, 0, width, height, 7., 7.);
	mgraphics.fill();

	mgraphics.set_source_rgba(box.getattr("color") as number[]);
	mgraphics.set_line_width(line_width);

	// top lines from the top to the circle
	for (let i = 0; i < inputs; i++) {
		mgraphics.move_to(itemwidth * (i + 1.5), 0);
		mgraphics.line_to(itemwidth * (i + 1.5), dot_top_top);
		mgraphics.stroke();
	}

	// bottom line from circle to the bottom
	mgraphics.move_to(itemwidth * 0.5, dot_bottom_top);
	mgraphics.line_to(itemwidth * 0.5, height);
	mgraphics.stroke();

	// the connection line
	mgraphics.move_to(itemwidth * (val + 1.5), dot_top_top + circle_size * 0.5);
	mgraphics.curve_to(itemwidth * (val + 1.5), dot_bottom_top, itemwidth * 0.5, dot_top_top + circle_size * 0.5, itemwidth*0.5, dot_bottom_top);
	mgraphics.stroke();

	if (line_width < 2.) {
		dashes[0] = dashes[1] = 2;
	} else {
		dashes[0] = dashes [1] = Math.floor(line_width);
	}
	mgraphics.set_dash(dashes);

	mgraphics.move_to(itemwidth * 0.5, 0);
	mgraphics.line_to(itemwidth * 0.5, line_midpoint_v);
	mgraphics.stroke();
	mgraphics.set_dash(0, 0);

	for (let i = 0; i < inputs; i++) {
		mgraphics.set_source_rgba(box.getattr("switchcolor") as number[]);
		mgraphics.ellipse(itemwidth * (i + 1.5) - circle_size * 0.5, dot_top_top, circle_size, circle_size);
		mgraphics.fill();
	}

	mgraphics.set_source_rgba(box.getattr("switchcolor") as number[]);
	mgraphics.ellipse(itemwidth * 0.5 - circle_size * 0.5, dot_bottom_top, circle_size, circle_size);
	mgraphics.fill();

}

export {}