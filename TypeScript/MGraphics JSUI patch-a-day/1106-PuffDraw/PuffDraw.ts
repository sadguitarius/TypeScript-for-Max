mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

// change for a longer or shorter tail
const trailLength = 50;

// where we look for dupes (or last moves)
const check_stash = [0, 0, 0];

// storage of all the tail elements
const point_stash: number[][] = [];
for (let i = 0; i < trailLength; i++) {
	point_stash[i] = [0, 0, 0];
}

// the auto-fader code (so we don't have to do bangs)
const ticker = new Task(ontick, this);
ticker.interval = 30;
ticker.repeat();

// do the actual drawing
function paint() {
	const width = box.rect[2] - box.rect[0];
	const height = box.rect[3] - box.rect[1];
	const puffSize = 1 / trailLength;

	mgraphics.set_source_rgb(1., 1., 1.);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	let last_x = point_stash[trailLength - 1][1];
	let last_y = point_stash[trailLength - 1][2];

	for (let i = trailLength - 2; i >= 0; i--) {
		if (point_stash[i][0]) {
			mgraphics.set_source_rgba(0., 0., 1., i * puffSize);
			mgraphics.set_line_width(100 * ((trailLength - i) * puffSize));
			mgraphics.move_to(last_x, last_y);
			mgraphics.line_to(point_stash[i][1], point_stash[i][2]);
			mgraphics.stroke();
		}

		last_x = point_stash[i][1];
		last_y = point_stash[i][2];
	}

}

// on a click, update and paint
function onclick(x: number,
				 y: number,
				 but: number,
				 cmd: number,
				 shift: number,
				 capslock: number,
				 option: number,
				 ctrl: number) {
	bucketAdd(but, x, y);
}

// on a click-draw, update and paint
function ondrag(x: number,
				y: number,
				but: number,
				cmd: number,
				shift: number,
				capslock: number,
				option: number,
				ctrl: number) {
	bucketAdd(but, x, y);
}

// on idle, update the current location
function onidle(x: number,
				y: number,
				but: number,
				cmd: number,
				shift: number,
				capslock: number,
				option: number,
				ctrl: number) {
	// we want to prep for a tick, but not update
	check_stash[0] = but;
	check_stash[1] = x;
	check_stash[2] = y;
}

// on idle outside the box, update the current location
function onidleout(x: number,
				   y: number,
				   but: number,
				   cmd: number,
				   shift: number,
				   capslock: number,
				   option: number,
				   ctrl: number) {
	// we want to prep for a tick, but not update
	check_stash[0] = but;
	check_stash[1] = x;
	check_stash[2] = y;
}

// on a tick, update and paint
function ontick() {
	// post("ticker hit\n");
	bucketAdd(check_stash[0], check_stash[1], check_stash[2]);
}

// the routine that updates and paints
function bucketAdd(a: number, x: number, y: number) {
	/*
	// uncomment if you only want to track changes
	if ((check_stash[0] == a) &&
		(check_stash[1] == x) &&
		(check_stash[2] == y))	return;
	*/

	for (let i = 0; i < (trailLength - 1); i++) {
		point_stash[i][0] = point_stash[i + 1][0];
		point_stash[i][1] = point_stash[i + 1][1];
		point_stash[i][2] = point_stash[i + 1][2];
	}

	point_stash[trailLength - 1][0] = a;
	point_stash[trailLength - 1][1] = x;
	point_stash[trailLength - 1][2] = y;

	check_stash[0] = a;
	check_stash[1] = x;
	check_stash[2] = y;

	mgraphics.redraw();
}

export {}