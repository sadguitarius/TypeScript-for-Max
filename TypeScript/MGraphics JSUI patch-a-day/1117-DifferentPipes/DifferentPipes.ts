mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let width = 0;
let height = 0;

let myLines = 500;

mgraphics.redraw();

function bang() {
	mgraphics.redraw();
}

function numLines(v: number) {
	myLines = v;
	if (myLines < 1)
		myLines = 1;

	mgraphics.redraw();
}

function paint() {
	// calculate the current width and height
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);

	let lastPos = [0, 0];
	let firstTime = 1;

	let myPoint: number[];
	let pushAmt: number;
	let isVert = 0;

	for (let i = 0; i < myLines; i++) {
		if (firstTime) {
			mgraphics.move_to(Math.random() * width, Math.random() * height);
			firstTime = 0;
		} else {
			mgraphics.move_to(lastPos[0], lastPos[1]);
		}

		myPoint = mgraphics.get_current_point();
		pushAmt = (Math.random() * 100) - 50;

		// Since we are stroking with every line draw, we can
		// alter the line width and line color for each segment
		mgraphics.set_line_width((Math.random() * 50) + 1);
		mgraphics.set_source_rgb(Math.random(), Math.random(), Math.random());

		if (isVert) {
			if ((myPoint[1] + pushAmt) < 0) {
				pushAmt = pushAmt * -1.0;
			} else if ((myPoint[1] + pushAmt) > height) {
				pushAmt = pushAmt * -1.0;
			}

			mgraphics.rel_line_to(0, pushAmt);

			isVert = 0;
		} else {
			if ((myPoint[0] + pushAmt) < 0) {
				pushAmt = pushAmt * -1.0;
			} else if ((myPoint[0] + pushAmt) > width) {
				pushAmt = pushAmt * -1.0;
			}

			mgraphics.rel_line_to(pushAmt, 0);
			isVert = 1;
		}

		lastPos = mgraphics.get_current_point();
		mgraphics.stroke();
	}
}

export {}