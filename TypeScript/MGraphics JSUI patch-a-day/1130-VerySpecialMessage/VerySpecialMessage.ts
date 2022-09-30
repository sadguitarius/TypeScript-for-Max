inlets = 1;
outlets = 2;

mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

let myFont = "Arial";
let mySize = 25.0;
let myMessage = "Thank you for watching!";

// variables for the actual word wrapped drawing
let textHeight = 0;
const wrapText: string[] = [];

mgraphics.redraw();

function loadbang() {
	sendFontList();
}

function paint() {
	doWordWrap();

	mgraphics.set_source_rgb(0, 0, 0);
	mgraphics.select_font_face(myFont);
	mgraphics.set_font_size(mySize);

	// post(wrapText.length, textHeight, '\n');

	for (let i = 0; i < wrapText.length; i++) {
		mgraphics.move_to(5, textHeight * (i + 1));
		mgraphics.text_path(wrapText[i]);
		mgraphics.fill();
	}
}

function setFont(v: string) {
	myFont = v;
	mgraphics.redraw();
}

function setSize(v: number) {
	mySize = myClip(v, 0.5, 200.0);
	mgraphics.redraw();
}

function setMessage(v: string) {
	myMessage = v;
	mgraphics.redraw();
}

function sendFontList() {
	const fl = mgraphics.getfontlist();
	outlet(1, "clear");

	for (let i = 0; i < fl.length; i++) {
		outlet(1, "append", fl[i]);
	}
}

sendFontList.local = 1;

function myClip(v: number, mn: number, mx: number) {
	return Math.min(mx, Math.max(mn, v));
}

myClip.local = 1;

// Here is a quick and dirty word wrapping function...
function doWordWrap() {
	const sw = box.rect[2] - box.rect[0];
	let tmpString: string;

	const wrapText = [];

	mgraphics.select_font_face(myFont);
	mgraphics.set_font_size(mySize);

	let tm = mgraphics.text_measure(myMessage);
	textHeight = tm[1];	// set the text height.

	if (tm[0] <= sw) {
		// good enough to print
		wrapText.push(myMessage);
	} else {
		// have to wrap
		const tmpText = myMessage.split(" ");
		tmpString = "";
		let st = 0;
		let en = -1;

		for (let i = 0; i < tmpText.length; i++) {
			tmpString += tmpText[i] + " ";
			tm = mgraphics.text_measure(tmpString);

			if (tm[0] > (sw - 10)) {
				if (en == -1) {
					// a really big word - just print it
					wrapText.push(tmpString);
					st = i + 1;
					en = -1;
					tmpString = "";
				} else {
					tmpString = "";
					for (let j = st; j <= en; j++) {
						tmpString += tmpText[j] + " ";
					}
					wrapText.push(tmpString);
					tmpString = tmpText[i] + " ";
					st = i;
					en = -1;
				}
			} else {
				en = i;
			}
		}
		// pick up the last line
		wrapText.push(tmpString);
	}

	gc();	// leave a clean campsite...
}

doWordWrap.local = 1;

export {}