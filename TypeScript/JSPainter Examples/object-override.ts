function paint()
{
	//const val = box.getvalueof();
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	const boxatoms = box.getattr("boxatoms") as string[];
	const boxtext = text_from_array(boxatoms);
	const textcolor = box.getattr("textcolor") as number[];

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	mgraphics.set_source_rgba(box.getattr("color") as number[]);
	mgraphics.rectangle(0, 0, width, calc_x_offset());
	mgraphics.fill();

	mgraphics.rectangle(0, height-(calc_x_offset()), width, calc_x_offset());
	mgraphics.fill();

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

function text_from_array(a: string[])
{
	let text = "" + a[0];
	const len = a.length;

	for (let i=1;i<len;i++)
		text = text+" "+a[i];

	return text;
}

export {}