const g_icon = new MGraphicsSVG("ezadc1.svg");

function paint()
{
	//const val = box.getvalueof()[0]; // not here
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];
	const state = box.getattr("state") as number;
	let srccolor, dstcolor;

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	if (g_icon) {
		mgraphics.save();

		// set up our svg object's color remapper
		const origcolor = [0,0,0,1];
		const replacementcolor =  (state ? box.getattr("color") : box.getattr("elementcolor")) as number[];
		g_icon.mapreset();
		g_icon.mapcolor(origcolor,replacementcolor);

		// provide a rectangle for translate/scale to fit
		mgraphics.svg_render(g_icon, 0.2*width, 0.2*height, 0.6*width, 0.6*height);
		mgraphics.restore();
	}
}

export {}