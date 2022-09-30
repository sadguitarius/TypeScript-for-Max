// Video Art - November 1, 2011
//
// by Darwin Grosse
// copyright Cycling '74, 2011
// -----------------------------

outlets = 1;
const arrsize = 100;
const jmpsize = 0.25;

mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

let positions: number[];
const bezpoints = [0.0, 0.0];

let extent: number;
onresize();

function bang()
{
	recalc();
	mgraphics.redraw();
}

function onresize()
{
	extent = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);
	post("extent:", extent, '\n');

	for (let i=0; i<positions.length; i++) {
		positions[i] = ((i-(arrsize / 2)) / (arrsize / 2)) * extent;
	}
}

function paint()
{
	mgraphics.set_source_rgba(0., 0., 0., 1.);
	mgraphics.rectangle(extent * -1, 1.0, extent * 2, 2);
	mgraphics.fill();

	mgraphics.set_line_width(.12);

	for (let i=0; i<arrsize; i++) {
		mgraphics.set_source_rgba(Math.abs(positions[i] / extent),
							(positions[i] / (extent * 2.0)) + 0.5,
							1.0-(positions[i] / (extent * 2.0) + 0.5),
							0.05);
		mgraphics.move_to(positions[i], 1.0);
		mgraphics.curve_to(bezpoints[0], 1, bezpoints[1], -3, positions[i], 1.0);
		mgraphics.stroke();
	}
}

function recalc()
{
	let testbed = Math.random();

	if (testbed > 0.5) {
		bezpoints[0] += jmpsize;
		if (bezpoints[0] > 3.0)
			bezpoints[0] = 3.0;
	} else {
		bezpoints[0] -= jmpsize;
		if (bezpoints[0] < -3.0)
			bezpoints[0] = -3.0;
	}

	testbed = Math.random();

	if (testbed > 0.5) {
		bezpoints[1] += jmpsize;
		if (bezpoints[1] > 3.0)
			bezpoints[1] = 3.0;
	} else {
		bezpoints[1] -= jmpsize;
		if (bezpoints[1] < -3.0)
			bezpoints[1] = -3.0;
	}
}

export {}
