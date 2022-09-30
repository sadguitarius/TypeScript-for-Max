const NUMBER_TRI_WIDTH = 6.0;
const NUMBER_TRI_HEIGHT = 12.0;
const NUMBER_BORDERTHICKNESS = 2.0;

const NUMBER_CORNERSIZE = 6;
//const NUMBER_LEFT_MARGIN		(NUMBER_BORDERTHICKNESS + (x->j_triangle? ((NUMBER_TRI_WIDTH * x->j_triscalefactor) + 4.) : (2.)))
const NUMBER_TOP_MARGIN = 4;
const NUMBER_RIGHT_MARGIN = 4;
const NUMBER_BOTTOM_MARGIN = 4;

function paint() {
	let val = box.getvalueof();
	const viewsize = mgraphics.size;
	const valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];
	let cx = 3;

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	// draw the triangle
	if (box.getattr("triangle")) {
		const triheight =
			NUMBER_TRI_HEIGHT * (box.getattr("triscale") as number);
		const triwidth = NUMBER_TRI_WIDTH * (box.getattr("triscale") as number);
		const trimargin = (height - triheight) / 2.0;
		const left = NUMBER_BORDERTHICKNESS + 2;
		mgraphics.set_line_width(1.0);
		mgraphics.set_source_rgba(0, 0, 0, 1.0);
		mgraphics.move_to(left, trimargin);
		mgraphics.line_to(left + triwidth, trimargin + triheight / 2.0);
		mgraphics.line_to(left, trimargin + triheight);
		mgraphics.close_path();

		// mgraphics.stroke_preserve();		// let's just fill the number, for a different look

		//TODO: need something for determining if the object has focus
		if (box.getattr("hasfocus"))
			mgraphics.set_source_rgba(box.getattr("htricolor") as number[]);
		else mgraphics.set_source_rgba(box.getattr("tricolor") as number[]);
		mgraphics.fill();

		cx += triwidth;
	}

	// TODO: we need something for handling/disabling text fields
	/*
	if (x->j_val.a_type == A_FLOAT) {
		// for flonum we handle painting the number ourselves, so we can
		// round to as many decimal places as will fit.

		// if we are editing the text don't draw anything
		t_object *textfield = jbox_get_textfield((t_object *) x);
		t_object *editview = object_attr_getobj(textfield, ps_editview);

		if (editview != view) {
			t_jtextlayout *tl;

			tl = jflonum_createtextlayout(x, view);
			if (tl) {
				if (x->j_hilited)
					jtextlayout_settextcolor(tl, &x->j_hfgcolor);
				else
					jtextlayout_settextcolor(tl, &x->j_fgcolor);
				jtextlayout_draw(tl, g);
				jtextlayout_destroy(tl);
			}
		}
	}
	*/

	const textcolor = box.getattr("textcolor") as number[]; // TODO: test if highlighted
	let valtext: string;
	let precision =
		(width - calc_x_offset()) / (box.getattr("fontsize") as number);
	const textformat = box.getattr("format") as number;

	val = parseFloat(String(val)); // oddly getvalueof() returns a string (to support all formats?)

	if (precision < 2) precision = 2;
	else if (precision > 8) precision = 8;

	switch (textformat) {
		case 1: // hex
			valtext = val.toString(16);
			break;
		case 2: // octal
			valtext = val.toString(8);
			break;
		case 3: // binary
			valtext = val.toString(2);
			break;
		case 4: // MIDI (TODO)
			valtext = val.toString();
			break;
		case 5: // MIDI (C4) (TODO)
			valtext = val.toString();
			break;
		case 6: // decimal floating point
			valtext = val.toFixed(precision).toString();
			// TODO: chomp trailing zeros + float display correction
			break;
		default: //decimal integer
			valtext = val.toString();
	}

	drawtext(valtext, calc_x_offset(), calc_y_offset(), textcolor);
}

function drawtext(
	text: string,
	offset_x: number,
	offset_y: number,
	textcolor: number[]
) {
	const fontsize = box.getattr("fontsize") as number;
	const fontstyle = box.getattr("fontface") as number;
	const bold = fontstyle == 1 || fontstyle == 3 ? "bold" : 0;
	const italic = fontstyle == 3 || fontstyle == 3 ? "italic" : 0;

	mgraphics.select_font_face(box.getattr("fontname") as string, italic, bold);
	mgraphics.set_font_size(box.getattr("fontsize") as number);
	const ascent = mgraphics.font_extents()[0];

	mgraphics.set_source_rgba(textcolor);
	mgraphics.move_to(offset_x, offset_y + ascent);
	mgraphics.show_text(text);
}

function calc_x_offset() {
	return (
		NUMBER_BORDERTHICKNESS +
		(box.getattr("triangle")
			? NUMBER_TRI_WIDTH * (box.getattr("triscale") as number) + 4
			: 2)
	);
}

function calc_y_offset() {
	return NUMBER_TOP_MARGIN;
}

export {};
