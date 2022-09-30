

function paint()
{
	//const val = box.getvalueof();
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	const boxatoms = box.getattr("boxatoms") as string[];
	const boxtext = text_from_array(boxatoms);

	mgraphics.attr_setfill("bgfillcolor",0,0,width,height)
	mgraphics.rectangle_rounded(0, 0, width, height, 8.,8.);
	mgraphics.fill();

	const textcolor = box.getattr("textcolor") as number[];
	drawtext(boxtext,calc_x_offset(),calc_y_offset(),textcolor);

}

function drawtext(text: string,offset_x: number,offset_y: number,textcolor: number[])
{
	const fontsize = box.getattr("fontsize") as number;
	const fontstyle = box.getattr("fontface") as number;
	const bold = fontstyle == 1 || fontstyle == 3 ? "bold" : 0;
	const italic = fontstyle == 3 || fontstyle == 3 ? "italic" : 0;

	mgraphics.select_font_face(box.getattr("fontname") as string,italic,bold);
    mgraphics.set_font_size(box.getattr("fontsize") as number);
    const ascent = mgraphics.font_extents()[0];

	mgraphics.set_source_rgba(textcolor);
	mgraphics.move_to(offset_x,offset_y+ascent);
    mgraphics.show_text(text);

}

function calc_x_offset()
{
	return 4;
}

function calc_y_offset()
{
	return  4;
}

function array_to_color(a: number[])
{
	return { red:a[0],green:a[1],blue:a[2],alpha:a[3] };
}

function text_from_array(a: string[])
{
	let text = "" + a[0];
	const len = a.length;

	for (let i=1;i<len;i++)
		text = text+" "+a[i];

	return text;
}

export {}