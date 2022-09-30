function paint()
{
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	// call original object paint method
	mgraphics.parentpaint();

	// const colorname = box.getattr("elementcolor");
	// post(colorname.maxclass);
	const bordercolor = box.getattr("tricolor") as number[];

	// draw border rectangle over it
	mgraphics.set_source_rgba(bordercolor);
	mgraphics.rectangle(0.5, 0.5, width-1, height-1);
	//mgraphics.set_line_width(2);
	mgraphics.stroke();

}

export {}