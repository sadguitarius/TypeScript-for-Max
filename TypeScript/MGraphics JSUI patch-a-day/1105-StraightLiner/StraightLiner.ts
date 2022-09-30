mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

let currcount = 0;
const maxcount = 41;
const stepcount = (maxcount - 1) / 2;
const trailcount = 15;

function bang() {
	currcount++;
	if (currcount >= maxcount) currcount = 0;
	mgraphics.redraw();
}

function paint() {
	const aspect = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);
	const stepval = aspect / stepcount;
	let distance = 0;

	let i;
	for (i = 0; i < maxcount; i++) {
		mgraphics.set_source_rgb(0., 0., 0.);

		if (i > currcount) {
			if ((currcount < trailcount) && (i > (maxcount - trailcount))) {
				distance = currcount - (i - maxcount);
			} else {
				distance = i - currcount;
			}
			if (distance > trailcount) {
				distance = trailcount;
			}
		} else {
			// i <= currcount
			if ((currcount > (maxcount - trailcount)) && (i < trailcount)) {
				distance = i - (currcount - maxcount);
			} else {
				distance = currcount - i;
			}
			if (distance > trailcount) {
				distance = trailcount;
			}
		}

		mgraphics.set_line_width(((trailcount - distance) * 0.01) + 0.01);

		mgraphics.move_to((aspect * -1) + (stepval * i), 1.0);
		mgraphics.line_to((aspect * -1) + (stepval * i), -1.0);
		mgraphics.stroke();
	}
}

export {}