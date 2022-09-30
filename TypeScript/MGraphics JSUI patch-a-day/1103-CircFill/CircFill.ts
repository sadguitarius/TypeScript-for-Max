mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

const circledim = 4;	// make a 4x4 array
const colorarray: number[][] = new Array(circledim * circledim) as number[][];

// load initial array values
for (let i=0; i<colorarray.length; i++) {
	colorarray[i] = [Math.random(), Math.random(), Math.random(), 1.];
}

function bang()
{
	mgraphics.redraw();
}

function paint()
{
	// set up our relative drawing things
	const aspect = (box.rect[2] - box.rect[0]) / (box.rect[3] - box.rect[1]);
	const twotimes = aspect * 2;
	const circ_xsize = twotimes / circledim;

	// pick one colorarray and change it
	const arrentry = Math.floor(Math.random() * colorarray.length);
	colorarray[arrentry] = [Math.random(), Math.random(), Math.random(), 1.];

	// draw the circles
	for (let i=0; i<circledim; i++) {
		for (let j=0; j<circledim; j++) {
				mgraphics.set_source_rgba(colorarray[i*circledim + j][0],
								colorarray[i*circledim + j][1],
								colorarray[i*circledim + j][2],
								colorarray[i*circledim + j][3]);
				mgraphics.ellipse((aspect * -1.0) + (circ_xsize * i),
						-1.0 + (0.5 * j) + 0.5,
						circ_xsize,
						0.5);
				mgraphics.fill();
		}
	}
}

export {}