/*
 * Documentation is property of Cycling '74 and published with permission.
 */

/**
 * JitterObject
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterObject.html
 */
declare class JitterObject extends Maxobj {
	/**
	 * Creates Jitter objects. (use JitterMatrix for jit.matrix) 
	 * @param object_name
	 * @param  ...params
	 */
	constructor(object_name: string, ...params: any[]);

	/**
	 * Deletes the JitterObject
	 */
	freepeer(): void;

	getregisteredname(): string;
}


/**
 * JitterMatrix
 * The jit.matrix object is a named matrix which may be used for data storage and retrieval, resampling, and matrix type and planecount conversion operations.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterMatrix.html
 */
declare class JitterMatrix extends JitterObject {
	constructor(...args: any[]);  	// TODO:
									// From JitterReposUtils.js:
									// var s = new JitterMatrix(2, "long", x, y);

	/**
	 * Matrix adaptation flag. (default = 0 if matrix arguments are present, otherwise 1) When the flag is set, the jit.matrix object will adapt to the incoming matrix planecount, type, and dimensions.
	 */
	adapt: number;

	// TODO: Probably number[] for this and the following {any}.

	/**
	 * The dimensions of matrix data.
	 */
	dim: any;

	/**
	 * The byte stride per dimension.
	 */
	dimstride: any;

	/**
	 * The destination dimension end position. (default = all dim values minus 1)
	 */
	dstdimend: any;

	/**
	 * The destination dimension start position. (default = all 0)
	 */
	dstdimstart: any;

	/**
	 * Matrix interpolation flag. (default = 0) When the flag is set, the input matrix will be interpolated when copied to the internal matrix.
	 */
	interp: number;

	/**
	 * The name of the matrix. (default = UID)
	 */
	name: string;

	/**
	 * The number of planes in matrix data. (default = 4)
	 */
	planecount: number;

	/**
	 * Maps input places to output planes. (default = 0 1 2 3 ...)
	 */
	planemap: any;

	/**
	 * Total byte size of matrix.
	 */
	size: number;

	/**
     * The source dimension end position. (default = all dim values minus 1)
	 */
	srcdimend: any;

	/**
	 * The source dimension start position. (default = all 0)
	 */
	srcdimstart: any;

	/**
	 * The matrix data type. (default = char)
	 *
     * --char: Char data (0-255)
	 * 
     * --long: Long data
	 * 
     * --float32: 32-bit floating-point data
	 * 
     * --float64: 64-bit floating-point data
	 */
	type: string;

	/**
	 * Destdim use flag. (default = 0) When the flag is set, the destination dimension's attributes are used when copying an input matrix to an internal matrix.
	 */
	usedstdim: number;

	/**
	 * Srcdim use flag. (default = 0) When the flag is set, the source dimension's attributes are used when copying an input matrix to an internal matrix.
	 */
	usesrcdim: number;

	/**
	 * Outputs the currently stored matrix.
	 */
	bang(): void;

	/**
	 * Sets all matrix values to zero.
	 */
	clear(): void;

	/**
	 * Export the current frame as an image file with the name specified by the first argument. The optional second argument sets the file type (default = png). Available file types are png, bmp, jpeg, macpaint, photoshop, pict, qtimage, sgi, tga and tiff. An optional use-dialog argument of 1 will open a file dialog to allow you to enter the image file settings.
	 * @param filename
	 * @param file_type
	 * @param use_dialog
	 */
	exportimage(filename: string, file_type: string, use_dialog: 0 | 1): void;

	/**
	 * Exports a matrix as a QuickTime movie. The exportmovie message takes an optional argument to specify a file name. If no filename is specified, a file dialog will open to let you choose a file.
	 * 
	 * The default FPS is 30. frames per second
	 * 
	 * The default codec is raw. Supported codecs are raw, cinepak, graphics, animation, video, componentvideo, jpeg, mjpega, mjpegb, sgi, planarrgb, macpaint, gif, photocd, qdgx, avrjpeg, opendmljpeg, bmp, winraw, vector, qd, h261, h263, dvntsc, dvpal, dvprontsc, dvpropal, flc, targa, png, tiff, componentvideosigned, componentvideounsigned, cmyk, microsoft, sorenson, indeo4, argb64, rgb48, alphagrey32, grey16, mpegyuv420, yuv420, and sorensonyuv9.
	 * 
	 * The default quality is max. Supported quality settings are lossless, max, min, low, normal, and high.
	 * 
	 * Note that minimum quality is, in many cases, the codec's default quality. Use "low" quality for consistent results.
	 * 
	 * The default timescale is 600 units per second.
	 * @param filename
	 * @param FPS
	 * @param codec
	 * @param quality
	 * @param timescale
	 */
	exportmovie(filename: string, FPS: number, codec: string, quality: string, timescale: number): void;

	/**
	 * Evaluates expression to fill the matrix. If a plane argument is provided, the expression is applied to a single plane. Otherwise, it is applied to allphanes in the matrix. See jit.expr for more information on expressions. Unlike the jit.expr object, there is no support for providing multiple expressions to fill multiple planes at once with different expressions. Call this method multiple times once for each plane you wish to fill.
	 * @param plane
	 * @param expression
	 */
	exprfill(plane: number, expression: string): void;

	/**
	 * The word fillplane, followed by an integer that specifies a plane number and a value, will fill the specified plane with the single value.
	 * @param plane
	 * @param value
	 */
	fillplane(plane: number, value: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data. Value is specified as a list whose length is equal to the number of dimensions (dimcount).
	 * @param values
	 */
	float(values: number[]): void;

	/**
	 * Sends the value(s) in the cell specified by position out the right outlet of the object as a list in the form cell cell-position0... cell-positionN val plane0-value... planeN-value.
	 * @param position
	 */
	getcell(position: number[]): void;

	/**
	 * Imports a QuickTime movie into the matrix. If no filename is specified, a file dialog will open to let you choose a file. The time-offset argument may be used to set a time offset for the QuickTime movie being imported (the default is 0).
	 * @param filename
	 * @param time_offset
	 */
	importmovie(filename: string, time_offset: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data. Position is specified of a list whose length is equal to the number of dimensions (dimcount).
	 * @param values
	 */
	int(values: number[]): void;

	/**
	 * Copies the texture specified by texture-name to the matrix.
	 * @param texture_name
	 */
	jit_gl_texture(texture_name: string): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data. Position is specified of a list whose length is equal to the number of dimensions (dimcount).
	 * @param values
	 */
	list(values: number[]): void;

	/**
	 * The word op, followed by the name of a jit.op object operator and a set of values, is equivalent to including a jit.op object with the specified operator set as an attribute and this jit.matrix object specified as the output matrix. The additional value arguments may either be a matrix name or a constant. If only one value argument is provided, this matrix is considered both the output and the left operand. For example, "op + foo bar" is equivalent to the operation thismatrix = foo + bar, and "op * 0.5" is equivalent to the operation thismatrix = thismatrix * 0.5.
	 * @param ...params
	 */
	op(...params: any[]): void;

	/**
	 * Reads Jitter binary data files (.jxf) into a matrix set. If no filename is specified, a file dialog will open to let you choose a file. 
	 * @param filename
	 */
	read(filename?: string): void;

	/**
	 * Sets all cells to the value specified by value(s). Position is specified of a list whose length is equal to the number of dimensions (dimcount).
	 * @param values
	 */
	setall(values: number[]): void;

	/**
	 * Sets the cell specified by position to the value specified by value. Position is specified of a list whose length is equal to the number of dimensions (dimcount). The optional arguments plane plane-number can be used to specify a plane. If a plane is specified, value should be a single number, otherwise it should be a list of numbers of size planecount - 1.
	 * @param position
	 * @param plane
	 * @param plane_number
	 * @param val
	 * @param values
	 */
	setcell(position: number[], plane: number, plane_number: number, val: number | number[], values: number[]): void;

	/**
	 * The word setcell1d, followed by a number specifying an x coordinate and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed.
	 * @param x
	 * @param ...params
	 */
	setcell1d(x: number, ...params: number[]): void;

	/**
	 * The word setcell2d, followed by a pair of numbers specifying x and y coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed.
	 * @param x
	 * @param y
	 * @param ...params
	 */
	setcell2d(x: number, y: number, ...params: number[]): void;

	/**
	 * The word setcell3d, followed by three numbers specifying x, y, and z coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (3) is fixed.
	 * @param x
	 * @param y
	 * @param z
	 * @param ...params
	 */
	setcell3d(x: number, y: number, z: number, ...params: number[]): void;
	
	/**
	 * The word setplane1d, followed by a number specifying an x coordinate, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param x
	 * @param ...params
	 */
	setplane1d(x: number, ...params: number[]): void;

	/**
	 * The word setplane2d, followed by a pair of numbers specifying x and y coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed, or use the "plane" token to specify which plane to set.
	 * @param x
	 * @param y
	 * @param ...params
	 */
	setplane2d(x: number, y: number, ...params: number[]): void;

	/**
	 * The word setplane3d, followed by three numbers specifying x, y, and z coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param x
	 * @param y
	 * @param z
	 * @param ...params
	 */
	setplane3d(x: number, y: number, z: number, ...params: number[]): void;

	/**
	 * Sets all cells to the value specified by value(s). Position is specified of a list whose length is equal to the number of dimensions (dimcount) and outputs the data.
	 * @param ...params
	 */
	val(...params: number[]): void;

	/**
	 * Writes matrix set as a Jitter binary data file (.jxf). If no filename is specified, a file dialog will open to let you choose a file.
	 * @param filename
	 */
	write(filename?: string): void;
}


/**
 * JitterReposUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterReposUtils.html
 */
declare class JitterReposUtils {
	/**
	 * how many bits of interpolation we want in our maps
	 */
	static interpbits: number;

	static cartopolmatrix2dfloat32(impulse: JitterMatrix, xs: number, ys: number, issigned: boolean) : JitterMatrix;
	static genkernel2dfloat32(): JitterMatrix;
	static makemap_cartopol(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_multi(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_normal(x: number, y: number) : JitterMatrix;
	static makemap_pinch(x: number, y: number, kx: number, ky: number, xpinch: number, ypinch: number, xamp: number,
		yamp: number, power: number) : JitterMatrix;
	static pack2plane(uno: JitterMatrix, dos: JitterMatrix) : JitterMatrix;
	static pinch2dfloat32(impulse: JitterMatrix, xpinch: number, ypinch: number, xamp: number, yamp: number,
		power: number) : JitterMatrix;
	static rel2abs(rela: JitterMatrix) : JitterMatrix;
	static unpack2plane(cero: JitterMatrix, uno: JitterMatrix, dos: JitterMatrix) : void;
	static upsample1d(inmat: JitterMatrix, l: number) : JitterMatrix;
	static upsample2d(inmat: JitterMatrix, x: number, y: number) : JitterMatrix;
}


/**
 * JitterListener
 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event. Our JitterListener object is set to listen to our jit.window object (mywindow). The getregisteredname() property of a JitterObject object returns the name by which that object can be accessed by the JitterListener (in the case of jit.window objects, this will be the same as name of the drawing context). Whenever our jit.window object generates an event, a function called thecallback() will be triggered in our JavaScript code. Now that we’ve instantiated a JitterListener, we can (in most cases) leave it alone and simply deal with the mechanics of the callback function it triggers in response to an event from the object it listens to. 
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterListener.html
 */
declare class JitterListener extends JitterObject {
	/**
	 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event.
	 * @param object_name
	 * @param callback
	 */
	constructor(object_name: string, callback: Object);

	/**
	 * The callback function to handle the event
	 */
	function: Object;

	/**
	 * The object to listen to.
	 */
	object: JitterObject;

	/**
	 * Unknown
	 */
	subjectname: string;
} 	


/**
 * JitterGUIUtils
 * classes for managing 3D UI objects.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIUtils.html 
 */
declare class JitterGUIUtils { 	
	static trackers: JitterGUITracker[];
	static add_client(dest: any, newclient: any): any;
	/**
	 * add tracker for a given destination.
	 * @param dest
	 */
	static add_tracker(dest: any): any;
	static delete_bogus_clients(dest: any): any;
	/**
	 * init tracker for a given destination.
	 * @param dest 
	 */
	static init(dest: any): any;
}


/**
 * JitterGUITracker
 * Data and interface are considered private. Arbitrates between subclasses of JitterGUIElement on a given render destination.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUITracker.html
 */
declare class JitterGUITracker {
 	constructor(dest: any);
	add_client(newclient: any): any;
	/**
	 *  Call before handling events. Delete any clients which have been deleted in the patcher.
	 */
	delete_bogus_clients(): any;
	/**
	 *  Called when adding a new client. Delete any old clients matching new one.
	 * @param newclient
	 */
	delete_duplicate_clients(newclient: any): any;
	/**
	 *  Make a new listener if needed. Otherwise just set destination.
	 */
	make_listener(): any;
} 	


/**
 * JitterEvent
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterEvent.html
 */
declare class JitterEvent {
	/**
	 * depends on event type
	 */
	args: any;

	/**
	 * Name of the event to be handled
	 */
	eventname: string;

	/**
	 * The name of the object to listen to.
	 */
	subjectname: string;
}


/**
 * JitterGUIElement
 * Subclass this to make a UI object.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIElement.html
 */
declare class JitterGUIElement {
	constructor(mobj: any);
	delete_me: any;
	destination: any;
	frontmost: any;
	highlight: any;
	intersect: any;
	jitterobj: JitterObject;
	localint: number[];	 	
	maxobj: Maxobj;
	stilldown: any;

	/**
	 * Set true to get events even if we are behind another object
	 */	
	unblockable: boolean;
	unique_index: any;
	val: number;
	was_frontmost: any;
	worldint: number[];	
	drawto(destination: any): void;
	free(): void;

	/**
	 * Return the intersection of the unit quad in world space with the line defined by raystart and rayend. Pass intersect in world coordinates back to the caller in p1. Stores local and world intersections locally. 
	 * @param raystart
	 * @param rayend
	 * @param p1
	 */
	get_intersect(raystart: any, rayend: any, p1: any): any;

	/**
	 * Handle a UI event. 
	 * @param event
	 */
	handle_event(event: JitterEvent): any;

	/**
	 * Set the drawing destination.
	 * @param destination
	 */
	init(destination: any): any;

	/**
	 * Parse jitter-style js arguments. If attr name is a property of JitterGUIElement, set the property. Otherwise set attribute of our jitter object. 
	 * @param ...args
	 */
	set_attr_args(...args: any[]): void;

	/**
	 * Adding the unique_index property allows one js instance to own multiple JitterGUIElements
	 * @param k
	 */
	set_unique_index(k: any): any;
	update(): any;
}


/**
 * Jitter3dUtils
 * 
 * http://max-javascript-reference.tim-schenk.de/symbols/Jitter3dUtilsInterface.html
 * 
 * Max folder/jsextensions/jitter/Jitter3DUtils.js
 */

declare class Jitter3DUtils {
	/**
	 * Add quats
	 * @param q1
	 * @param q2
	 * @param q3
	 */
	static add_quats(q1: number[], q2: number[], q3: number[]): void;

	/**
	 * Convert angle/axis rotation to quaternion.
	 * @param axis
	 * @param quat
	 */
	static axis_to_quat(axis: number[], quat: number[]): void;

	/**
	 * Build rotation matrix m for the quaternion q.
	 * @param m
	 * @param q
	 */
	static build_rotmatrix(m: number[], q: number[]): void;

	/**
	 * Set p1 to the point on sphere closest to line segment.
	 * @param line_a
	 * @param line_b
	 * @param center
	 * @param r
	 * @param p1
	 */
	static closest_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): void;

	/**
	 * Return true if the ray defined by the line's two points intersects the quad.
	 * @param line_a
	 * @param line_b
	 * @param pos
	 * @param rot
	 * @param scale
	 * @param p1
	 * @param p2
	 */
	static intersect_line_quad(line_a: number[], line_b: number[], pos: number[], rot: number[], scale: number[],
		p1: number[], p2: number[]): boolean;

	/**
	 * If the ray defined by the line's two points intersects the sphere, set p1 to the closest point of intersection.
	 * @param line_a
	 * @param line_b
	 * @param center
	 * @param r
	 * @param p1
	 */
	static intersect_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): boolean;
	
	static normalize_quat(q: number[]): void;

	/**
	 * Convert quaternion to angle/axis rotation.
	 * @param quat
	 * @param axis
	 */
	static quat_to_axis(quat: number[], axis: number[]): void;

	/**
	 * @param p_in
	 * @param m
	 */
	static transform_point(p_in: number[], m: number[]): void;

	/**
	 * Add src1 and src2, save the result in dst
	 * @param src1
	 * @param src2
	 * @param dst
	 */
	static vadd(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * Copy the three indicies from v1 to v2
	 * @param v1
	 * @param v2
	 */
	static vcopy(v1: number[], v2: number[]): void;

	/**
	 * Create the cross product of v1 and v2?
	 * @param v1
	 * @param v2
	 * @param cross
	 */
	static vcross(v1: number[], v2: number[], cross: number[]): void;

	/**
	 * Divide src1 and src2, save the result in dst
	 * @param src1
	 * @param src2
	 * @param dst
	 */
	static vdiv(src1: number[], src2: number[], dst: number[]): void;

	static vdot(v1: number[], v2: number[]): number;

	/**
	 * Distance-squared function
	 * @param v
	 */
	static vlength(v: number[]): number; 	

	/**
	 * Cheaper distance-squared function
	 * @param v
	 */
	static vlength2(v: number[]): number;

	/**
	 * Multiply src1 and src2, save the result in dst
	 * @param src1
	 * @param src2
	 * @param dst
	 */
	static vmul(src1: number[], src2: number[], dst: number[]): void;

	static vnormal(v: number[]): void;

	/**
	 * Scale the vector
	 * @param v
	 * @param div
	 */
	static vscale(v: number[], div: number): void;

	/**
	 * Set all three indicies of v to x, y, z
	 * @param v
	 * @param x
	 * @param y
	 * @param z
	 */
	static vset(v: number[], x: number, y: number, z: number): void;

	/**
	 * Subtract src1 and src2, save the result in dst
	 * @param src1
	 * @param src2
	 * @param dst
	 */
	static vsub(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * Set all three indicies of v to 0.0
	 * @param v
	 */
	static vzero(v: number[]): void;

	/**
	 * Convert rotation in Euler angles (xyz) to angle/axis rotation.
	 * @param xyz
	 * @param axis
	 */
	static xyz_to_axis(xyz: number[], axis: number[]): void;
}

