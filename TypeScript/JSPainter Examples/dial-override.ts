function paint()
{
	const val = box.getvalueof();
	const viewsize = mgraphics.size;
	let valrange = box.getattr("size") as number;
	const width = viewsize[0];
	const height = viewsize[1];

	mgraphics.set_source_rgba(box.getattr("bgcolor") as number[]);
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	const ndegrees = box.getattr("degrees") as number;
	const start = (270 - ndegrees * 0.5) * (2*Math.PI / 360);
	let end = (270 + ndegrees * 0.5) * (2*Math.PI / 360);

	mgraphics.arc(width * .5, height * .5, width * .375, start, end);
	mgraphics.set_line_width(width * 0.1 * ((box.getattr("thickness") as number) * 0.01));
	mgraphics.set_source_rgba(box.getattr("outlinecolor") as number[]);
	mgraphics.stroke();

	valrange = valrange <= 1? 1 : valrange - 1;
	const prop = val / valrange;
	end -= ndegrees * (2*Math.PI / 360) * (1 - prop);

	mgraphics.set_source_rgba(box.getattr("needlecolor") as number[]);
	mgraphics.arc(width * .5, height * .5, width * .375, start, end);
	mgraphics.stroke();

}

function DialValToAngle(val: number,valrange: number): number
{
	let m;

	if (box.getattr("floatoutput"))
		m = valrange;
	else
		m = valrange - 1;

	return (val * ((box.getattr("degrees") as number)-1)) / m;
}

function DialPtFromAngleAmp(width: number, height: number, angle: number, amp: number): {x: number, y: number}
{
	const half = ((box.getattr("degrees") as number) - 1) * 0.5;
	const center = {x: 0, y: 0};
	const loc = {x: 0, y: 0};
	const pt = {x: 0, y: 0};

	if (angle < half)
		angle += 360-half;
	else
		angle -= half;

	center.x = width * 0.5;
	center.y = height * 0.5;

	loc.x = amp * Math.sin(angle/57.29577951289617); // sin/cos switcheroo because centered around top
	loc.y = amp * Math.cos(angle/57.29577951289617);

	pt.x = center.x + loc.x;
	pt.y = center.y - loc.y;
	return pt;
}

export {}