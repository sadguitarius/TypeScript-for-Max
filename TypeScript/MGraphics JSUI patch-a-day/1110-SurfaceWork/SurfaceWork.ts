mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let width = 0;
let height = 0;
let outImage: Image;

redoshapes();
mgraphics.redraw();

function bang()
{
	mgraphics.redraw();
}

function redoshapes()
{
	// calculate the current width and height
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);

	// create a new MGraphics instance
	const mg = new MGraphics(width, height);

	// draw to the instance (rather than to mgraphics)
	for (let i=0; i<1000; i++) {
		mg.set_source_rgba(Math.random(), Math.random(), Math.random(), Math.random());
		mg.rectangle(   (Math.random() * width),
						(Math.random() * height),
						(Math.random() * width),
						(Math.random() * height));
		mg.fill();
	}
	
	// move the image into a global object
	outImage = new Image(mg);

	// force a redraw
	mgraphics.redraw();
}

function paint()
{
	// use our image/surface to draw our saved graphic
	mgraphics.image_surface_draw(outImage);	
}

export {}