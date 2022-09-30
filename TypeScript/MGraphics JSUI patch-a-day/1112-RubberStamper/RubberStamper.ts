mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let width = 0;
let height = 0;
let outImage: Image;

setup_shapes();
mgraphics.redraw();

function bang()
{
	mgraphics.redraw();
}

function setup_shapes()
{
	// calculate the current width and height
	width = 100;
	height = 100;

	// create a new MGraphics instance
	const mg = new MGraphics(width, height);
	mg.set_source_rgba(0.0, 0.0, 0.0, 0.5);
	mg.move_to(width * .5, 0);
	mg.line_to(10, height);
	mg.line_to(width , height * .33);
	mg.line_to(0, height * .33);
	mg.line_to(width - 10, height);
	mg.close_path();
	
	mg.fill();
	
	// move the image into a global object
	outImage = new Image(mg);

	// force a redraw
	mgraphics.redraw();
}

function paint()
{
	// calculate the current width and height
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);
		
	for (let i=0; i<50; i++) {
		const scalevar = Math.random();
		mgraphics.scale(scalevar, scalevar);
		mgraphics.translate(Math.random() * width, Math.random() * height);
		mgraphics.rotate(Math.random() * 6.283);
		
		mgraphics.image_surface_draw(outImage);
		mgraphics.identity_matrix();
	}
}

export {}