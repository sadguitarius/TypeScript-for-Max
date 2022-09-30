const SLIDER_DISPLAYINSET = 5;
const SLIDER_LINEWIDTH = 3;

function paint()
{
	let val = box.getvalueof();
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];
	let thickness = 0.;
	let inset_edge: number;

	if (box.getattr("thickness")>0.)
		thickness = (box.getattr("thickness") as number)/100;

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	const ishoriz = slider_ishorizontal(width, height);
	if (val<0)
		val = 0;
	else if (val>valrange)
		val = valrange;

	const inset_end = SLIDER_DISPLAYINSET;
	if (ishoriz) {
		inset_edge = (height-(height*thickness))/2
	} else {
		inset_edge = (width-(width*thickness))/2;
	}

	const pos = slider_valtopos(val,valrange,width,height,ishoriz);

	mgraphics.set_source_rgba(box.getattr("elementcolor") as number[]);
	if (ishoriz) {
		mgraphics.rectangle(inset_end, inset_edge, width-(inset_end*2), height-(inset_edge*2));
	} else {
		mgraphics.rectangle(inset_edge, inset_end, width-(inset_edge*2), height-(inset_end*2));
	}
	mgraphics.fill();

	const c = box.getattr("knobcolor") as number[];

	c[3] *= 0.8;
	mgraphics.set_source_rgba(c);

	if (ishoriz) {
		mgraphics.rectangle(inset_end, inset_edge, pos-inset_end, height-(inset_edge*2));
	} else {
		mgraphics.rectangle(inset_edge, pos, width-(inset_edge*2), height-pos-inset_end);
	}
	mgraphics.fill();

	if (ishoriz) {
		mgraphics.move_to(pos,inset_edge);
		mgraphics.line_to(pos,height-inset_edge);
	} else {
		mgraphics.move_to(inset_edge,pos);
		mgraphics.line_to(width-inset_edge,pos);
	}
	mgraphics.set_line_width(SLIDER_LINEWIDTH);
	mgraphics.set_source_rgba(box.getattr("knobcolor") as number[]);
	mgraphics.stroke();

}

function slider_ishorizontal(width: number, height: number)
{
	const orient = box.getattr("orientation") as number;

	// 0=automatic, 1=horizontal, 2=vertical
	if (orient==0)
		return (width>height)
	else
		return (orient==1);
}

function slider_valtopos(val: number, valrange: number, width: number, height: number, ishoriz: boolean): number
{
	let pos: number, viewrange: number;

	if (ishoriz)
		viewrange = width;
	else
		viewrange = height;

	if (box.getattr("floatoutput")==0)
		valrange = valrange - 1;

	if (valrange < 0)
		valrange = 0;
	if (valrange)
		pos = (val / valrange) * (viewrange - (SLIDER_DISPLAYINSET*2));
	else
		pos = 0;

	pos += SLIDER_DISPLAYINSET;
	if (ishoriz)
		return pos;
	else
		return height - pos;
}

export {}