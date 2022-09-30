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
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);

	// create a new MGraphics instance
	const mg = new MGraphics(width, height);
	mg.set_source_rgba(1.0, 0.0, 0.0, 0.5);
	mg.rectangle(10, 10, width-20, height-20);
	mg.fill();
	
	// move the image into a global object
	outImage = new Image(mg);

	// force a redraw
	mgraphics.redraw();
}

function paint()
{
	// scale and draw
	mgraphics.scale(0.5, 0.5);
	mgraphics.image_surface_draw(outImage);	
	
	// return to normal and draw
	mgraphics.identity_matrix();
	mgraphics.image_surface_draw(outImage);	
	
	// draw a circle over the top
	mgraphics.set_source_rgba(0.0, 0.0, 1.0, 0.5);
	mgraphics.ellipse(Math.random() * width, Math.random() * height, 60, 60);
	mgraphics.fill();
}

export {}