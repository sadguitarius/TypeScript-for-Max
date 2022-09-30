import * as em from "./ExampleModule"

inlets = 1;
outlets = 1;
autowatch = 1;

function bang() {
	const theObject = new em.TheClass(42);
	post(`theObject.getIndex(): ${theObject.getIndex()}`);
	post(`The square of pi is ${em.square(Math.PI)}`);

	// Cast to <any> to assign properties to objects of type Global.
	const g = new Global("");
	g.newProperty = "I am new.";

	post(`newProperty: ${String(g.newProperty)}`);
}

function msg_float(v: number)
{
	outlet(0, em.square(v));
}

function msg_int(v: number)
{
	outlet(0, em.square(v));
}

export {}