mgraphics.init();
mgraphics.relative_coords = 1;
mgraphics.autofill = 0;

const aspect = 1.0;
let pointArray: number[][] = [];

pointArray.push([0.,0.,12.,0.,0.,0.]);
mgraphics.redraw();

function bang()
{
	pointArray.push([(Math.random() * (aspect * 2)) - aspect,
							   (Math.random() * 2) - 1.0,
							   (12 * Math.random()) + 0.5,
							   Math.random(),
							   Math.random(),
							   Math.random()]
					);
	mgraphics.redraw();
}

function clear()
{
	pointArray = new Array([0.,0.,12.,0.,0.,0.]);
	mgraphics.redraw();
}

function paint()
{
	for (let i=0; i<pointArray.length; i++) {

			mgraphics.set_source_rgb(pointArray[i][3],pointArray[i][4],pointArray[i][5]);
			mgraphics.select_font_face(0);
			mgraphics.set_font_size(pointArray[i][2]);

			for (let j=0; j<63; j++) {
				mgraphics.move_to(pointArray[i][0], pointArray[i][1]);
				mgraphics.rotate(j / 10);
				mgraphics.text_path("I am a flower");
				mgraphics.fill();

				// return to the starting poposition
				mgraphics.identity_matrix();
			}
	}
}

export {}