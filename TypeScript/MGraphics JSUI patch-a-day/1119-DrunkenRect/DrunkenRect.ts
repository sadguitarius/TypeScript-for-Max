mgraphics.init();
mgraphics.relative_coordinates = 0;
mgraphics.autofill = 0;

let currXYform = 0.0;
let currYXform = 0.0;

let jumpXYSize = 0.03;
let jumpYXSize = 0.05;
let maxSize = 0.5;

let directionXY = 1.0;
let directionYX = 1.0;

function XYjump(v: number) {
	jumpXYSize = v;
}

function YXjump(v: number) {
	jumpYXSize = v;
}

function maxWarp(v: number) {
	maxSize = v;
}

function bang() {
	currXYform += (jumpXYSize * directionXY);
	if (Math.abs(currXYform) > maxSize) {
		directionXY = directionXY * -1.0;
	}

	currYXform += (jumpYXSize * directionYX);
	if (Math.abs(currYXform) > maxSize) {
		directionYX = directionYX * -1.0;
	}

	mgraphics.redraw();
}

function paint() {
	const width = box.rect[2] - box.rect[0];
	const height = box.rect[3] - box.rect[1];

	mgraphics.set_line_width(5);
	mgraphics.transform(1.0, currXYform, currYXform, 1.0, 0.0, 0.0);

	for (let x = -50; x < (width + 50); x += 50) {
		for (let y = -100; y < (height + 100); y += 100) {
			mgraphics.rectangle(x + 10, y + 10, 40, 90);
			mgraphics.stroke();
		}
	}
}

export {}