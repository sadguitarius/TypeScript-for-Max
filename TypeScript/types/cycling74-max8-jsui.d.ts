/*
 * Documentation Published with permission of Cycling '74.
 */

/*
 * JSUI: https://docs.cycling74.com/max8/vignettes/jsuiobject
 */

declare let mgraphics: MGraphics;
declare let sketch: Sketch;
/**
 * Specific to the jsui object. The inspector property, if set to 1, causes Max to look for an inspector patch specific to your script rather than the default jsui-insp.pat file. The name used will be the name of your script (without the .js extension) plus –insp.pat. For example, if your script is called foo.js, your inspector file should be named foo-insp.pat. Inspector patches can be placed anywhere in the Max search path.
 */
declare let inspector: number;

/**
 * copies the contents of this.sketch to the screen.
 */
declare function refresh(): void;

declare function gc(): void;

/**
 * https://docs.cycling74.com/max8/vignettes/jsmgraphics
 */
declare class MGraphics {
	size: number[];

	/**
	 * Setup, State and Execution Routines
	 */

	constructor(width?: number, height?: number);

	/**
	 * When autosketch is set to “1”, the drawing commands will immediately be drawn without waiting a drawing execution command. While this is convenient, it is less flexible than working with autosketch set to “0”.
	 * @type {number}
	 */
	autosketch: number;

	/**
	 * When autofill is set to “1”, any shape command will immediately be filled without requiring a fill execution command. While this is convenient, it is less flexible than working with autofill set to “0”.
	 * @type {number}
	 */
	autofill: number;

	/**
	 * The relative_coords setting determines whether the locations in the drawing area range from 0,0 through the size in pixels (relative_coords = 0), or if the drawing area ranges from (-aspect, 1.0) through (aspect, -1.0).
	 * @type {number}
	 */
	relative_coords: number;
	relative_coordinates: number;

	/**
	 * The init routine is the first thing that an mgraphics-based Javascript program needs to call. It initializes the library, sets up the internal mgraphics variables and prepares the jsui object for drawing.
	 */
	init(): void;

	/**
	 * Force a redraw of the display area by calling the paint() function.
	 */
	redraw(): void;

	/**
	 * TODO: what's up with this?
	 */
	parentpaint(): void;

	/**
	 * Restore the Mgraphics system to a previously saved state.
	 */
	restore(): void;

	/**
	 * Save the current Mgraphics state for later restoration. This is particularly useful when doing multiple transformations or matrix manipulation of the user space.
	 */
	save(): void;

	/**
	 * Given a user location (such as from get_current_point()), returns the device location. This helps find one’s position even with transform matrices in place.
	 * @param pos
	 */
	user_to_device(pos: number[]): number[];

	/**
	 * Given a device position, returns the user space location. This will determine a location despite user space deformation (using matrix transforms).
	 * @param pos
	 */
	device_to_user(pos: number[]): number[];

	/**
	 * Query Routines
	 */

	/**
	 * Given a fillable path, determine if a point is within the fill zone. Returns 0 (false) or 1 (true).
	 * @param path
	 */
	in_fill(path: Path): number;

	/**
	 * Determine the enclosing rectangle for the current fill area. Returns an array that contains the top/left and bottom/right points of the fill area.
	 */
	fill_extent(): number[];

	/**
	 * Returns an array with the current X and Y coordinates of the path ending position.
	 */
	get_current_point(): number[];

	/**
	 * Path Setup and Creation Routines
	 */

	/**
	 * Setup Routines
	 */

	/**
	 * Set the appearance of the end-point of a drawn line. The options are butt, round, or square.
	 * @param line_cap
	 */
	set_line_cap(line_cap: "butt" | "round" | "square"): void;

	/**
	 * Retrieve the appearance attribute of the current line_cap setting. The returned value is the same as the values used by set_line_cap.
	 */
	get_line_cap(): "butt" | "round" | "square";

	/**
	 * Set the appearance of the connection point between lines. The options are miter, round, or bevel.
	 * @param line_join
	 */
	set_line_join(line_join: "miter" | "round" | "bevel"): void;

	/**
	 * Retrieve the appearance attribute of the current line_join setting. The returned value is the same as the values used by set_line_join.
	 */
	get_line_join(): "miter" | "round" | "bevel";

	/**
	 * Set the width of path lines drawn using the stroke() function. The width value is dependent on the coordinate system in use.
	 * @param width
	 */
	set_line_width(width: number): void;

	/**
	 * Retrieve the current line width as a floating-point number.
	 */
	get_line_width(): number;

	/**
	 * TODO: docs
	 * @param dash0
	 * @param dash1
	 */
	set_dash(dash0: number, dash1: number): void;
	set_dash(dashes: number[]): void;

	/**
	 * Path Creation Routines
	 */

	/**
	 * Add a circular, clockwise, arc to the current path.
	 * @param x_center The horizontal coordinate of the arc's center.
	 * @param y_center The vertical coordinate of the arc's center.
	 * @param radius   The radius of the arc.
	 * @param angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc(
		x_center: number,
		y_center: number,
		radius: number,
		angle1: number,
		angle2: number
	): void;

	/**
	 * Add a circular, counter-clockwise, arc to the current path.
	 * @param x_center The horizontal coordinate of the arc's center.
	 * @param y_center The vertical coordinate of the arc's center.
	 * @param radius   The radius of the arc.
	 * @param angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc_negative(
		x_center: number,
		y_center: number,
		radius: number,
		angle1: number,
		angle2: number
	): void;

	/**
	 * Add a non-circular arc to the current path.
	 * @param x_center The horizontal coordinate of the arc's center.
	 * @param y_center The vertical coordinate of the arc's center.
	 * @param radius_x The horizontal radius of the arc.
	 * @param radius_y The vertical radius of the arc.
	 * @param angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	ovalarc(
		x_center: number,
		y_center: number,
		radius_x: number,
		radius_y: number,
		angle1: number,
		angle2: number
	): void;

	/**
	 * Add a cubic Bezier spline to the current path.
	 * @param x1 The first control point.
	 * @param y1 The first control point.
	 * @param x2 The second control point.
	 * @param y2 The second control point.
	 * @param x3 The destination point.
	 * @param y3 The destination point.
	 */
	curve_to(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number
	): void;

	/**
	 * Add a cubic Bezier spline to the current path, using coordinates relative to the current point.
	 * @param x1 The first control point.
	 * @param y1 The first control point.
	 * @param x2 The second control point.
	 * @param y2 The second control point.
	 * @param x3 The destination point.
	 * @param y3 The destination point.
	 */
	rel_curve_to(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number
	): void;

	/**
	 * Add a line segment to the current path.
	 * @param x The destination point.
	 * @param y The destination point.
	 */
	line_to(x: number, y: number): void;

	/**
	 * Add a line segment to the current path, using coordinates relative to the current point.
	 * @param x The destination point.
	 * @param y The destination point.
	 */
	rel_line_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath.
	 * @param x The new location.
	 * @param y The new location.
	 */
	move_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath, using coordinates relative to the current point.
	 * @param x The new location.
	 * @param y The new location.
	 */
	rel_move_to(x: number, y: number): void;

	/**
	 * Add a closed rectangle path in the context.
	 * @param x      The horizontal origin.
	 * @param y      The vertical origin.
	 * @param width  The width of the rect.
	 * @param height The height of the rect.
	 */
	rectangle(x: number, y: number, width: number, height: number): void;

	/**
	 * Add a closed rounded-rectangle path in the context.
	 * @param x      The horizontal origin.
	 * @param y      The vertical origin.
	 * @param width  The width of the rect.
	 * @param height The height of the rect.
	 * @param ovalwidth  The width of the oval used for the round corners.
	 * @param ovalheight The height of the oval used for the round corners.
	 */
	rectangle_rounded(
		x: number,
		y: number,
		width: number,
		height: number,
		ovalwidth: number,
		ovalheight: number
	): void;

	/**
	 * Add a closed elliptical path in the context.
	 * @param x      The horizontal origin.
	 * @param y      The vertical origin.
	 * @param width  The width of the rect.
	 * @param height The height of the rect.
	 */
	ellipse(x: number, y: number, width: number, height: number): void;

	/**
	 * Create a line that connects the current path point to the origin of the path, thereby closing the path into a fill-able shape.
	 */
	close_path(): void;

	/**
	 * Utility Routines
	 */

	/**
	 * Returns a copy of the current path to be stored and reused at a later time.
	 */
	copy_path(): Path;

	/**
	 * Appends a stored path to the current path at the current end point.
	 * @param path
	 */
	append_path(path: Path): void;

	/**
	 * Define a starting point for a path execution group. This group can be used for creating an image from a set of path functions without actually drawing the results to the screen.
	 */
	push_group(): void;

	/**
	 * Complete a path execution group, returning the results as an Image object. This image can be used for later drawing of the group results.
	 */
	pop_group(): Image;

	/**
	 * Path Execution Routines
	 */

	/**
	 * Using the current path, round the corners to the radius provided (or as close as possible given the path’s angle).
	 * @param radius
	 */
	path_roundcorners(radius: number): void;

	/**
	 * Draw the outline of the path with the color and line size chosen. When the drawing is complete, the path is deleted.
	 */
	stroke(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but do not destroy the path when completed. This is useful for situations where you need to both fill a path and draw its outline.
	 */
	stroke_preserve(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but override the alpha value of the color with a new alpha channel value. This allows you to change transparency without resetting the color values.
	 * @param alpha
	 */
	stroke_with_alpha(alpha: number): void;

	/**
	 * A combination of the above two routines, this will draw the line, preserve the path, and override the alpha value in a single routine call.
	 * @param alpha
	 */
	stroke_preserve_with_alpha(alpha: number): void;

	/**
	 * Fill the path with the current source color. When the fill is completed, the path will be destroyed.
	 */
	fill(): void;

	/**
	 * Fill the path with the current source color, but do not destroy the path when the fill is completed.
	 */
	fill_preserve(): void;

	/**
	 * Fill the path with the current source color, but override the alpha value for a fill-specific transparency.
	 * @param alpha
	 */
	fill_with_alpha(alpha: number): void;

	/**
	 * A combination of the two previous routines, this fills the path with the source color, but overrides the alpha value. It does not destroy the path when the fill is complete.
	 * @param alpha
	 */
	fill_preserve_with_alpha(alpha: number): void;

	/**
	 * Transformation Routines
	 */

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param rgba
	 */
	set_source_rgba(rgba: number[]): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param rgb
	 * @param   alpha
	 */
	set_source_rgba(rgb: number[], alpha: number): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	set_source_rgba(
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * TODO: docs
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param rgba
	 */
	set_source_jrgba(rgba: number[]): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param rgb
	 */
	set_source_rgb(rgb: number[]): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param red
	 * @param green
	 * @param blue
	 */
	set_source_rgb(red: number, green: number, blue: number): void;

	/**
	 * Create a transform for the color and alpha channels using scale amounts to determine a color multiplier (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	scale_source_rgba(
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * Create a transform for the color and alpha channels using scale amounts to determine a color multiplier (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	translate_source_rgba(
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * TODO: docs
	 * @param attr
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 */
	attr_setfill(attr: string, x: number, y: number, width: number, height: number): void;

	/**
	 * Modifies the transform matrix that scales all X and Y values by the values provided.
	 *
	 * Note: This affects everything from size to location, and also scales line widths.
	 * @param scale_x
	 * @param scale_y
	 */
	scale(scale_x: number, scale_y: number): void;

	/**
	 * Modifies the transform matrix by rotating it. The rotation values is in radians (2-pi for a complete rotation).
	 * @param rad
	 */
	rotate(rad: number): void;
	/**
	 * Modifies the transform matrix by rotating it in 3d space. The rotation values is in radians (2-pi for a complete rotation).
	 * @param rad
	 */
	rotate(rad: number[]): void;

	/**
	 * Modifies the transform matrix by moving it by absolute (positive or negative) delta amounts.
	 * @param x
	 * @param y
	 */
	translate(x: number, y: number): void;

	/**
	 * Directly modify the transform matrix (and therefore the user space) using six values. The xx and yy values provide scaling support, xy and yx provide rotational warping, and x0 and y0 provide location offset.
	 * @param xx
	 * @param xy
	 * @param yx
	 * @param yy
	 * @param x0
	 * @param y0
	 */
	transform(
		xx: number,
		xy: number,
		yx: number,
		yy: number,
		x0: number,
		y0: number
	): void;

	/**
	 * Directly set the tranform matrix for the current drawing context.
	 * @param xx
	 * @param xy
	 * @param yx
	 * @param yy
	 * @param x0
	 * @param y0
	 */
	set_matrix(
		xx: number,
		xy: number,
		yx: number,
		yy: number,
		x0: number,
		y0: number
	): void;

	/**
	 * Retrieve the current transform matrix for the current drawing context.
	 */
	get_matrix(): number[];

	/**
	 * Revert the transform matrix to default (normal) values.
	 */
	identity_matrix(): void;

	/**
	 * Font Routines
	 */

	/**
	 * Returns a Javascript array where each value is the text name of a font installed on your system. You can determine the length of the array by using the variable fontlist.length.
	 */
	getfontlist(): string[];

	/**
	 * Sets the current font face by name.
	 * @param fontname
	 */
	select_font_face(fontname: string | number): void;
	/**
	 * TODO: docs
	 * @param fontname
	 * @param args
	 */
	select_font_face(fontname: string | number, ...args: (string|number)[]): void;

	/**
	 * Sets the current font size, using either an integer or floating-point value.
	 * @param size
	 */
	set_font_size(size: number): void;

	/**
	 * Create a path that uses the display text, the current font and the current size. The result is subject to all of the transforms ordinarily available to paths.
	 * @param text
	 */
	text_path(text: string): void;

	/**
	 * Places the display text in the drawing area at the current location, and using the current font and size. Since a path is not being created, it does not conform to the transformations otherwise available with paths.
	 * @param text
	 */
	show_text(text: string): void;

	/**
	 * Returns an array with three values: ascent, descent and height.
	 */
	font_extents(): number[];

	/**
	 * Returns an array with two values: width and height. This is the measurement of the provided text using the current font and size.
	 */
	text_measure(text: string): number[];

	/**
	 * Pattern Routines
	 */

	/**
	 * Create a linear gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param  x1
	 * @param  y1
	 * @param  x2
	 * @param  y2
	 */
	pattern_create_linear(
		x1: number,
		y1: number,
		x2: number,
		y2: number
	): Pattern;

	/**
	 * Create a radial gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param x1
	 * @param y1
	 * @param rad1
	 * @param x2
	 * @param y2
	 * @param rad2
	 */
	pattern_create_radial(
		x1: number,
		y1: number,
		rad1: number,
		x2: number,
		y2: number,
		rad2: number
	): Pattern;

	/**
	 * Create a solid color pattern.
	 * @param  red
	 * @param  green
	 * @param  blue
	 * @param  alpha
	 */
	pattern_create_rgba(
		red: number,
		green: number,
		blue: number,
		alpha: number
	): Pattern;

	/**
	 * Create a pattern using an image for the background. Repeating patterns depends on the extend value set using the set_extend() function.
	 * @param image
	 */
	pattern_create_for_surface(image: Image): Pattern;

	/**
	 * TODO: docs
	 * @param pattern
	 * @param index
	 * @param r
	 * @param g
	 * @param b
	 * @param a
	 */
	pattern_add_color_stop_rgba(pattern: Pattern, index: number, r: number, g: number, b: number, a: number): void

	/**
	 * Sets the pattern to be used for the next fill() call. The name parameter must be a previously created pattern.
	 * @param pattern
	 */
	set_source(pattern: Pattern): void;

	/**
	 * TODO: docs
	 * @param pattern
	 */
	pattern_destroy(pattern: Pattern): void

	/**
	 * Image and Surface Routines
	 */

	/**
	 * Place an image (typically stored as an Image object) into the current surface. The drawing is placed at the top-left of the drawing context, changeable using a transform matrix or translate function. You can also choose the section of the image to draw using four optional arguments that describe a rectangle taken from the image.
	 * @param  myImage
	 * @param source_top    optional
	 * @param source_left   optional
	 * @param source_width  optional
	 * @param source_height optional
	 */
	image_surface_draw(
		myImage: Image,
		source_top?: number,
		source_left?: number,
		source_width?: number,
		source_height?: number
	): void;

	/**
	 * Sets the provided surface as the source for drawing routines.
	 * @param surface
	 */
	set_source_surface(surface: MGraphicsSVG): void;

	/**
	 * Render an SVG image in the current MGraphics context.
	 * @param svg
	 */
	svg_render(svg: string): void;
	/**
	 * TODO: docs
	 * @param svg
	 * @param translate_width
	 * @param translate_height
	 * @param scale_width
	 * @param scale_height
	 */
	svg_render(svg: MGraphicsSVG,
			   translate_width: number,
			   translate_height: number,
			   scale_width: number,
			   scale_height: number
	): void;

	/**
	 * TODO: this is a piece of garbage!
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param thing_a
	 * @param bubblepointx
	 * @param bubblepointy
	 * @param bubbleside
	 * @param bubblepoint
	 * @param thing_b
	 */
	bubble(x: number,
		   y: number,
		   width: number,
		   height: number,
		   thing_a: number,
		   bubblepointx: number,
		   bubblepointy: number,
		   bubbleside: number,
		   bubblepoint: number,
		   thing_b: number
	): void;
}

/**
 * No Constructor. Object created by different MGraphics functions.
 * http://max-javascript-reference.tim-schenk.de/symbols/Pattern.html
 */
declare class Pattern {
	/**
	 * Returns the extend value of the pattern.
	 */
	get_extend(): "none" | "repeat" | "reflect" | "pad";

	/**
	 * Determines how the pattern will be created when there is more space than available information.
	 * @param extend_type
	 */
	set_extend(extend_type: "none" | "repeat" | "reflect" | "pad"): void;

	/**
	 * Returns the current transform matrix for the pattern
	 */
	get_matrix(): number[];

	/**
	 * Directly sets the transform matrix used in the creation of the pattern.
	 * @param xx
	 * @param xy
	 * @param yx
	 * @param yy
	 * @param x0
	 * @param y0
	 */
	set_matrix(
		xx: number,
		xy: number,
		yx: number,
		yy: number,
		x0: number,
		y0: number
	): void;

	/**
	 * A function called on a previously created pattern, the add_color_stop_rgba will define a color value for one of the influence points of the pattern.
	 * @param index determines which influence point is being defined
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	add_color_stop_rgba(
		index: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * Revert the user space transform matrix to its default (normal) orientation.
	 */
	identity_matrix(): void;

	/**
	 * Apply a rotation transform on the user space in which the pattern is displayed.
	 * @param rotation
	 */
	rotate(rotation: number): void;

	/**
	 * Scale the pattern by a factor in both X and Y coordinate spaces.
	 * @param x
	 * @param y
	 */
	scale(x: number, y: number): void;

	/**
	 * Apply a translation transform (spatial offset) on the user space in which the pattern is displayed.
	 * @param x
	 * @param y
	 */
	translate(x: number, y: number): void;

	/**
	 * Returns the type of pattern that was created.
	 */
	get_type(): string;
}

declare class MGraphicsSVG {
	/**
	 * Creates a new SVG in memory who's colors can be remapped.
	 * @param filename
	 */
	constructor(filename: string);

	/**
	 * Remaps the color of an MGraphicsSVG instance.
	 * @param source_rgba origin color in RGBA format
	 * @param dest_rgba desired destination color array
	 */
	mapcolor(source_rgba: number[], dest_rgba: number[]): void

	/**
	 * TODO: docs
	 */
	mapreset(): void;
}

/**
 * Sketch
 * Every instance of jsui has an instance of Sketch bound to the variable "sketch". This is often the only instance of Sketch you will need to use. However, if you want to do things like render sprites, have multiple layers of images, or use drawing commands to create alpha channels for images, then you can create additional instances to render in. By default, when any function in your jsui object has been called the context is already set for the instance of Sketch bound to the variable "sketch".
 *
 * https://docs.cycling74.com/max8/vignettes/jssketchobject
 */
declare class Sketch {
	/**
	 * create a new instance of Sketch with default width and height
	 */
	constructor();

	/**
	 * create a new instance of sketch with specified width and height
	 * @param width
	 * @param height
	 */
	constructor(width: number, height: number);

	/**
	 * Sketch Simple Line and Polygon Methods
	 */

	/**
	 * Moves the drawing position to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
	 * @param delta_x
	 * @param delta_y
	 * @param delta_z
	 */
	move(delta_x: number, delta_y: number, delta_z?: number): void;

	/**
	 * Moves the drawing position to the location specified by the x, y, and z arguments.
	 * @param x
	 * @param y
	 * @param z
	 */
	moveto(x: number, y: number, z?: number): void;

	/**
	 * Draws a point at the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the x, y, and z arguments.
	 * @param x
	 * @param y
	 * @param z
	 */
	point(x: number, y: number, z?: number): void;

	/**
	 * Draws a line from the current drawing position to the location specified the sum of the current drawing position and the delta x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
	 * @param delta_x
	 * @param delta_y
	 * @param delta_z
	 */
	line(delta_x: number, delta_y: number, delta_z?: number): void;

	/**
	 * Draws a line from the current drawing position to the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the x, y, and z arguments.
	 * @param x
	 * @param y
	 * @param z
	 */
	lineto(x: number, y: number, z?: number): void;

	/**
	 * Draws a line from the location specified by the x1, y1, and z1 arguments to the location specified by the x2, y2, and z2 arguments. After this method has been called, the drawing position is updated to the location specified by the x2, y2, and z2 arguments.
	 * @param x1
	 * @param y1
	 * @param z1
	 * @param x2
	 * @param y2
	 * @param z2
	 */
	linesegment(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number
	): void;
	linesegment(x1: number, y1: number, x2: number, y2: number): void;

	/**
	 * Draws a filled triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location specified by the x3, y3, and z3 arguments.
	 * @param x1
	 * @param y1
	 * @param z1
	 * @param x2
	 * @param y2
	 * @param z2
	 * @param x3
	 * @param y3
	 * @param z3
	 */
	tri(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number
	): void;
	tri(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number
	): void;

	/**
	 * Draws a framed triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location specified by the x3, y3, and z3 arguments.
	 * @param x1
	 * @param y1
	 * @param z1
	 * @param x2
	 * @param y2
	 * @param z2
	 * @param x3
	 * @param y3
	 * @param z3
	 */
	frametri(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number
	): void;
	frametri(
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		x3: number,
		y3: number
	): void;

	/**
	 * Draws a filled quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated to the location specified by the x4, y4, and z4 arguments.
	 * @param x1
	 * @param y1
	 * @param z1
	 * @param x2
	 * @param y2
	 * @param z2
	 * @param x3
	 * @param y3
	 * @param z3
	 * @param x4
	 * @param y4
	 * @param z4
	 */
	// TODO: test omission of z parameters
	quad(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number
	): void;

	/**
	 * Draws a framed quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated to the location specified by the x4, y4, and z4 arguments.
	 * @param x1
	 * @param y1
	 * @param z1
	 * @param x2
	 * @param y2
	 * @param z2
	 * @param x3
	 * @param y3
	 * @param z3
	 * @param x4
	 * @param y4
	 * @param z4
	 */
	// TODO: test omission of z parameters
	framequad(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number
	): void;

	/**
	 * Shape Methods
	 */

	/**
	 * Draws a filled circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius
	 * @param theta_start
	 * @param theta_end
	 */
	circle(radius: number, theta_start?: number, theta_end?: number): void;

	/**
	 * Draws a cube with width 2*scale_x, height 2*scale_y, depth 2*scale_z, and center point at the current drawing position. If the scale_y and scale_z arguments are not specified, they will assume the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param scale_x
	 * @param scale_y
	 * @param scale_z
	 */
	cube(scale_x: number, scale_y?: number, scale_z?: number): void;

	/**
	 * Draws a cylinder with top radius specified by the radius1 argument, bottom radius specified by the radius2 argument, length specified by the mag argument, and center point at the current drawing position. If the theta_start and theta_end arguments are specified, then a patch will be drawn instead of a full cylinder. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius1
	 * @param radius2
	 * @param mag
	 * @param theta_start
	 * @param theta_end
	 */
	cylinder(
		radius1: number,
		radius2: number,
		mag: number,
		theta_start?: number,
		theta_end?: number
	): void;

	/**
	 * Draws a filled ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius1
	 * @param radius2
	 * @param theta_start
	 * @param theta_end
	 */
	ellipse(
		radius1: number,
		radius2: number,
		theta_start?: number,
		theta_end?: number
	): void;

	/**
	 * Draws a framed circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius
	 * @param theta_start
	 * @param theta_end
	 */
	framecircle(
		radius: number,
		theta_start?: number,
		theta_end?: number
	): void;

	/**
	 * Draws a framed ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius1
	 * @param radius2
	 * @param theta_start
	 * @param theta_end
	 */
	frameellipse(
		radius1: number,
		radius2: number,
		theta_start?: number,
		theta_end?: number
	): void;

	/**
	 * Draws a plane with top width 2*scale_x1, left height 2*scale_y1, bottom width 2*scale_x2, right height 2*scale_y2, and center point at the current drawing position. If scale_y1 is not specified, it will assume the same value as scale_x1. If scale_x2 and scale_y2 are not specified, they will assume the same values as scale_x1 and scale_y1 respectively. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param scale_x1
	 * @param scale_y1
	 * @param scale_x2
	 * @param scale_y2
	 */
	plane(
		scale_x1: number,
		scale_y1?: number,
		scale_x2?: number,
		scale_y2?: number
	): void;

	/**
	 * Draws a rounded plane with width 2*scale_x, and height 2*scale_y and center point at the current drawing position. The size of the rounded portion of the plane is determined by the round_amount argument. If scale_y is not specified, it will assume the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param round_amount
	 * @param scale_x
	 * @param scale_y
	 */
	roundedplane(round_amount: number, scale_x: number, scale_y?: number): void;

	/**
	 * Draws a sphere with radius specified by the radius argument and center point at the current drawing position. If the theta1_start, theta1_end, theta2_start, and theta2_end arguments are specified, then a patch will be drawn instead of a full sphere. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius
	 * @param theta1_start
	 * @param theta1_end
	 * @param theta2_start
	 * @param theta2_end
	 */
	sphere(
		radius: number,
		theta1_start?: number,
		theta1_end?: number,
		theta2_start?: number,
		theta2_end?: number
	): void;

	/**
	 * Draws a torus with major radius specified by the radius1 argument, minor radius specified by the radius2 argument, and center point at the current drawing position. If theta1_start, theta1_end, theta2_start, and theta2_end are specified, then a patch will be drawn instead of a full torus. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
	 * @param radius1
	 * @param radius2
	 * @param theta1_start
	 * @param theta1_end
	 * @param theta2_start
	 * @param theta2_end
	 */
	torus(
		radius1: number,
		radius2: number,
		theta1_start?: number,
		theta1_end?: number,
		theta2_start?: number,
		theta2_end?: number
	): void;

	/**
	 * Sketch Shape Attribute Methods
	 */

	/**
	 * Sets the rotation for drawing internal to any of the "shape" drawing methods to the rotation specified by the x_rot, y_rot, and rotation_x, rotation_y, and rotation_z arguments.
	 *
	 * Example:
	 * ```
	 * with (sketch) {
	 *   glmatrixmode("modelview")
	 *   glpushmatrix()
	 *   glrotate(rotation_x, 1, 0, 0)
	 *   glrotate(rotation_y, 1, 1, 0)
	 *   glrotate(rotation_z, 0, 0, 1)
	 *   torus(0.5, 0.2)
	 *   glpopmatrix()
	 * }
	 * ```
	 * @param rotation_x
	 * @param rotation_y
	 * @param rotation_z
	 */
	shapeorient(
		rotation_x: number,
		rotation_y: number,
		rotation_z?: number
	): void;

	/**
	 * Sets the number of slices to use when rendering any of the "shape" drawing methods. Increasing the slice_a and slice_b arguments will increase the quality at which the shape is rendered, while decreasing these values will improve performance.
	 * @param slice_a
	 * @param slice_b
	 */
	shapeslice(slice_a: number, slice_b: number): void;

	/**
	 * Sets the OpenGL drawing primitive to use within any of the "shape" drawing methods. Acceptable values for the draw_prim argument are the following strings: lines, line_loop, line_strip, points, polygon, quads, quad_grid, quad_strip, triangles, tri_grid, tri_fan, tri_strip.
	 * @param draw_prim
	 */
	shapeprim(draw_prim: "lines" | "line_loop" | "line_strip" | "points" | "polygon" | "quads" | "quad_grid" | "quad_strip" | "triangles" | "tri_grid" | "tri_fan" | "tri_strip"): void;

	/**
	 * Sketch Text Methods
	 */

	/**
	 * Sets the current font to the fontname specified by the fontname argument.
	 * @param fontname
	 */
	font(fontname: string): void;

	/**
	 * Sets the fontsize to the size specified by the points argument. Note that this size is an absolute, rather than relative value.
	 * @param points
	 */
	fontsize(points: number): void;

	/**
	 * Returns an array containing the width and height of the given string in absolute screen coordinates, taking into account the current font and fontsize.
	 * @param str
	 */
	gettextinfo(str: string): number[];

	/**
	 * Draws the text specified by the string argument at the current drawing position, taking into account the current font, fontsize, and text alignment. Text is strictly 2D, and does not take into account any world transformations. After calling the text method, if the x axis text alignment is set to "left", the current drawing position will be updated to reflect the world position associated with the end of the string. If the x axis text alignment is set to "right", the current drawing position will be updated to reflect the world position associated with the end of the string. If the x axis text alignment is set to "center", the current drawing position will remain unchanged.
	 * @param str
	 */
	text(str: string): void;

	/**
	 * Sets the alignment of text to be drawn with respect to the current drawing position. Acceptable values for the x axis alignment are: "left", "right", or "center". Acceptable values for the y axis alignment are: "bottom", "top", or "center". The default alignment is "left", "bottom".
	 * @param align_x
	 * @param align_y
	 */
	textalign(
		align_x: "left" | "right" | "center",
		align_y: "bottom" | "top" | "center"
	): void;

	/**
	 * Sketch Pixel Methods
	 */

	/**
	 * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of pixels is supported. The source object can either be an instance of Image, or Sketch. If blending is enabled in the destination sketch object, alpha blending will be performed and the current alpha color will also be applied globally. The copypixels method is much faster than obtaining the equivalent result using glbindtexture() to texture a plane, and is the recommended means of drawing images when scaling and rotation is not required.
	 * @param source_object
	 * @param destination_x
	 * @param destination_y
	 * @param source_x
	 * @param source_y
	 * @param width
	 * @param height
	 */
	copypixels(
		source_object: string,
		destination_x: number,
		destination_y: number,
		source_x: number,
		source_y: number,
		width: number,
		height: number
	): void;

	/**
	 * Returns the depth value associated with the currently rendered pixel at a given absolute screen coordinate.
	 * @param x
	 * @param y
	 */
	depthatpixel(x: number, y: number): number;

	/**
	 * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS allocated memory. Once called, the Sketch object is not available for any other use.
	 */
	freepeer(): void;

	/**
	 * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 */
	getpixel(x: number, y: number): number[];

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	setpixel(
		x: number,
		y: number,
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * Returns an array containing the x, y, and z world coordinates associated with a given screen pixel using the same the depth from the camera as 0,0,0. Optionally a third depth arg may be specified, which may be useful for hit detection and other applications. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane. The worldtoscreen method can be used to determine the depth value of a given world coordinate, and the depthatpixel method can be used to determine the depth value associated with the currently rendered pixel at a given absolute screen coordinate.
	 * @param x
	 * @param y
	 */
	screentoworld(x: number, y: number): number[];

	/**
	 * Returns an array containing the x, y, and depth screen coordinates associated with a given world coordinate. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane.
	 * @param x
	 * @param y
	 * @param z
	 */
	worldtoscreen(x: number, y: number, z?: number): number[];

	/**
	 * Sketch Stroke Methods
	 */

	/**
	 * Begin definition of a stroked path of the style specified by the stroke_style argument. Currently supported stroke styles are "basic2d" and "line".
	 * @param stroke_style
	 */
	beginstroke(stroke_style: "basic2d" | "line"): void;

	/**
	 * End definition of a stroked path, and render the path.
	 */
	endstroke(): void;

	/**
	 * Set the current value of the parameter specified by the parameter_name argument to be the value specified by parameter_values argument(s). Some parameters are global for the extent of a stroked path definition, while others may vary on a point by point basis.
	 * @param parameter_name
	 * @param args
	 */
	strokeparam(parameter_name: string, ...args: number[]): void;

	/**
	 * Defines an anchor point at the location specified by the x, y, and z arguments. Some stroke styles such as "basic2d" will ignore the z coordinate.
	 * @param x
	 * @param y
	 * @param z
	 */
	strokepoint(x: number, y: number, z?: number): void;

	/**
	 *  The default2d method is a simple way to set the graphics state to default properties useful for 2D graphics. It is called everytime your object is resized if default2d() has been called more recently than default3d().
	 *
	 * It is essentially equivalent to the following set of calls:
	 * ```
	 * with (sketch) {
	 *   glpolygonmode("front_and_back", "fill")
	 *   glpointsize(1)
	 *   gllinewidth(1)
	 *   gldisable("depth_test")
	 *   gldisable("fog")
	 *   glcolor(0, 0, 0, 1)
	 *   glshademodel("smooth")
	 *   gldisable("lighting")
	 *   gldisable("normalize")
	 *   gldisable("texture")
	 *   glmatrixmode("projection")
	 *   glloadidentity()
	 *   glortho(-aspect, aspect, -1, 1, -1, 100)
	 *   glmatrixmode("modelview")
	 *   glloadidentity()
	 *   glulookat(0, 0, 2, 0, 0, 0, 0, 0, 1)
	 *   glclearcolor(1, 1, 1, 1)
	 *   glclear()
	 *   glenable("blend")
	 *   glblendfunc("src_alpha", "one_minus_src_alpha")
	 * }
	 * ```
	 */
	default2d(): void;

	/**
	 * The default3d method is a simple way to set the graphics state to default properties useful for 3D graphics. It is called everytime the jsui object is resized if default3d() has been called more recently than default2d().
	 *
	 * It is essentially equivalent to the following set of calls:
	 * ```
	 * with (sketch) {
	 *   glpolygonmode("front_and_back", "fill")
	 *   glpointsize(1)
	 *   gllinewidth(1)
	 *   glenable("depth_test")
	 *   glenable("fog")
	 *   glcolor(0, 0, 0, 1)
	 *   glshademodel("smooth")
	 *   gllightmodel("two_side", "true")
	 *   glenable("lighting")
	 *   glenable("light0")
	 *   glenable("normalize")
	 *   gldisable("texture")
	 *   glmatrixmode("projection")
	 *   glloadidentity()
	 *   gluperspective(default_lens_angle, aspect, 0.1, 100)
	 *   glmatrixmode("modelview")
	 *   glloadidentity()
	 *   glulookat(0, 0, 2, 0, 0, 0, 0, 0, 1)
	 *   glclearcolor(1, 1, 1, 1)
	 *   glclear()
	 *   glenable("blend")
	 *   glblendfunc("src_alpha", "one_minus_src_alpha")
	 * }
	 * ```
	 */
	default3d(): void;

	/**
	 * The orth3d method is a simple way to set the graphics state to default properties useful for 3D graphics, using an orthographic projection (i.e. object scale is not affected by distance from the camera). It is called every time the jsui object is resized if ortho3d() has been called more recently than default2d(), or default3d().
	 *
	 * It is essentially equivalent to the following set of calls:
	 * ```
	 * with (sketch) {
	 *   glpolygonmode("front_and_back", "fill")
	 *   glpointsize(1)
	 *   gllinewidth(1)
	 *   glenable("depth_test")
	 *   glenable("fog")
	 *   glcolor(0, 0, 0, 1)
	 *   glshademodel("smooth")
	 *   gllightmodel("two_side", "true")
	 *   glenable("lighting")
	 *   glenable("light0")
	 *   glenable("normalize")
	 *   gldisable("texture")
	 *   glmatrixmode("projection")
	 *   glloadidentity()
	 *   glortho(-aspect, aspect, -1, 1, -1, 100)
	 *   glmatrixmode("modelview")
	 *   glloadidentity()
	 *   glulookat(0, 0, 2, 0, 0, 0, 0, 0, 1)
	 *   glclearcolor(1, 1, 1, 1)
	 *   glclear()
	 *   glenable("blend")
	 *   glblendfunc("src_alpha", "one_minus_src_alpha")
	 * }
	 * ```
	 */
	ortho3d(): void;

	glbegin(draw_prim: any[]): void;

	glbindtexture(image_object: string): void;

	glblendfunc(src_function: string, dst_function: string): void;

	glclear(): void;

	glclearcolor(red: number, green: number, blue: number, alpha: number): void;

	glcleardepth(depth: number): void;

	glclipplane(
		plane: number,
		coeff1: number,
		coeff2: number,
		coeff3: number,
		coeff4: number
	): void;

	glcolor(red: number, green: number, blue: number, alpha: number): void;

	glcolormask(red: number, green: number, blue: number, alpha: number): void;

	glcolormaterial(face: number, mode: any[]): void;

	glcullface(face: number): void;

	gldepthmask(on: number): void;

	gldepthrange(near: number, far: number): void;

	gldisable(capability: number): void;

	gldrawpixels(image: string): void;

	gledgeflag(on: number): void;

	glenable(capability: number): void;

	glend(): void;

	glfinish(): void;

	glflush(): void;

	glfog(parameter_name: string, value: number): void;

	glfrustum(
		left: number,
		right: number,
		bottom: number,
		top: number,
		near: number,
		far: number
	): void;

	glhint(target: string, mode: number): void;

	gllight(light: string, parameter_name: string, value: number): void;

	gllightmodel(parameter_name: string, value: number): void;

	gllinestipple(factor: any[], bit_pattern: any[]): void;

	gllinewidth(width: number): void;

	glloadidentity(): void;

	glloadmatrix(matrix_array: number[]): void;

	gllogicop(opcode: any[]): void;

	glmaterial(): void;

	glmatrixmode(mode: string): void;

	glmultmatrix(matrix_array: any[]): void;

	glnormal(x: number, y: number, z?: number): void;

	glortho(
		left: number,
		right: number,
		bottom: number,
		top: number,
		near: number,
		far: number
	): void;

	glpointsize(size: number): void;

	glpolygonmode(face: number, mode: number): void;

	glpolygonoffset(factor: number, units: number): void;

	glpopattrib(): void;

	glpopmatrix(): void;

	glpushattrib(): void;

	glpushmatrix(): void;

	glrect(x1: number, y1: number, x2: number, y2: number): void;

	glrotate(angle: number, x: number, y: number, z?: number): void;

	glscale(x_scale: number, y_scale: number, z_scale?: number): void;

	glscissor(x: number, y: number, width: number, height: number): void;

	glshademodel(mode: any[]): void;

	gltexcoord(s: number[], t: number[]): void;

	gltexenv(
		parameter_name: string,
		val1: string,
		val2: string,
		val3: string,
		val4: string
	): void;

	gltexgen(
		coord: number[],
		parameter_name: string,
		val1: string,
		val2: string,
		val3: string,
		val4: string
	): void;

	gltexparameter(
		parameter_name: string,
		val1: string,
		val2: string,
		val3: string,
		val4: string
	): void;

	gltranslate(delta_x: number, delta_y: number, delta_z?: number): void;

	glulookat(
		eye_x: number,
		eye_y: number,
		eye_z: number,
		center_x: number,
		center_y: number,
		center_z: number,
		up_x: number,
		up_y: number,
		up_z: number
	): void;
	glulookat(
		eye_x: number,
		eye_y: number,
		center_x: number,
		center_y: number,
		up_x: number,
		up_y: number
	): void;

	gluortho2d(left: number, right: number, bottom: number, top: number): void;

	gluperspective(
		fovy: number,
		aspect: number,
		near: number,
		far: number
	): void;

	glvertex(x: number, y: number, z?: number): void;

	glviewport(x: number, y: number, width: number, height: number): void;
}

/**
 * TODO: Does this need to exist? Does it need methods?
 */
declare class Path {

}

/**
 * The Image object can be used to draw images in an instance of the Sketch. It is possible to load image files from disk, create images from instances of Sketch, or generate them manually. The Image object has several methods to assist in manipulating images once generated. Note that alphablending is on by default in sketch. Certain file formats which contain alpha channels such as PICT or TIFF may have their alpha channel set all off. File formats which do not contain an alpha channel such as JPEG, by default have an alpha channel of all on. If you are having trouble seeing an image when attempting to draw in an instance of Sketch, you may want to either turn off blending with gldisable("blend"), or set the alpha channel to be all on with clearchannel("alpha",1.).
 *
 * https://docs.cycling74.com/max8/vignettes/jsimageobject
 */
declare class Image {
	/**
	 * create a new Image instance with default width and height
	 */
	constructor(mg?: MGraphics);

	/**
	 * create a new Image instance with the specified width and height
	 * @param width
	 * @param height
	 */
	constructor(width: number, height: number);

	/**
	 * create a new Image instance from a file from disk
	 * @param filename
	 */
	constructor(filename: string);

	/**
	 * create a new Image instance from another instance of Image
	 * @param image
	 */
	constructor(image: Image);

	/**
	 * create a new Image instance from an instance of Sketch
	 * @param sketch
	 */
	constructor(sketch: Sketch);

	/**
	 * Access or set the size of an image. Size[0] is width size[1] is height.
	 */
	size: number[];

	/**
	 * Adjusts all channel values in the image channel specified by the channel argument, by multiplying the channel value by the value specified by the scale argument and then adding the value specified by the bias argument. The resulting channel is clipped to the range 0.-1. Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
	 * @param channel
	 * @param scale
	 * @param bias
	 */
	adjustchannel(
		channel: "red" | "green" | "blue" | "alpha",
		scale: number,
		bias: number
	): void;

	/**
	 * Generates an alpha channel based on the chromatic distance from the specified RGB target color. If no tolerance, fade or minkey arguments are specified they are assumed to be 0. If no maxkey argument is specified, it is assumed to be 1.
	 * @param red
	 * @param green
	 * @param blue
	 * @param tolerance
	 * @param fade
	 * @param minkey
	 * @param maxkey
	 */
	alphachroma(
		red: number,
		green: number,
		blue: number,
		tolerance: number,
		fade: number,
		minkey: number,
		maxkey?: number
	): void;

	/**
	 * Similar to the copychannel method, except supports a blend amount specified by the alpha argument. The source object can only be an instance of Image (not Sketch). If the source object is not the same size as the destination object, then rectangle composed of the minimum width and height of each, is the rectangle of values which will be blended. Acceptable values for the channel arguments are the strings: "red", "green", "blue", or "alpha".
	 * @param source_object
	 * @param alpha
	 * @param source_channel
	 * @param destination_channel
	 */
	blendchannel(
		source_object: Image | string,
		alpha: number,
		source_channel: "red" | "green" | "blue" | "alpha",
		destination_channel: "red" | "green" | "blue" | "alpha"
	): void;

	/**
	 * Similar to the copypixels method, except supports alpha blending, including a global alpha value specified by the alpha argument. This global alpha value is multiplied by the source object's alpha channel at each pixel. Instances of Sketch do not contain an alpha channel, which is assumed to be all on. The source object can either be an instance of Image, or Sketch.
	 * @param source_object
	 * @param alpha
	 * @param dest_x
	 * @param dest_y
	 * @param rc_x
	 * @param src_y
	 * @param width
	 * @param height
	 */
	blendpixels(
		source_object: Image | Sketch | string,
		alpha: number,
		dest_x: number,
		dest_y: number,
		rc_x: number,
		src_y: number,
		width: number,
		height: number
	): void;

	/**
	 * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
	 */
	clear(): void;

	/**
	 * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	clear(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Sets all channel values in the image channel specified by the channel argument to be the value specified by the value argument. If no value argument is specified, it is assumed to be 0. Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
	 * @param channel
	 * @param value
	 */
	clearchannel(
		channel: "red" | "green" | "blue" | "alpha",
		value?: number
	): void;

	/**
	 * Copies the channel values from the source object's channel specified by the source_channel argument to the destination object's channel specified by the destination_channel argument. The source object can only be an instance of Image (not Sketch). If the source object is not the same size as the destination object, then rectangle composed of the minimum width and height of each, is the rectangle of values which will be copied. Acceptable values for the channel arguments are the strings: "red", "green", "blue", or "alpha".
	 * @param source_object
	 * @param source_channel
	 * @param destination_channel
	 */
	copychannel(
		source_object: Image | string,
		source_channel: "red" | "green" | "blue" | "alpha",
		destination_channel: "red" | "green" | "blue" | "alpha"
	): void;

	/**
	 * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of pixels is supported. The source object can either be an instance of Image, or Sketch.
	 * @param source_object
	 * @param dest_x
	 * @param dest_y
	 * @param src_x
	 * @param src_y
	 * @param width
	 * @param height
	 */
	copypixels(
		source_object: Image | Sketch | string,
		dest_x: number,
		dest_y: number,
		src_x: number,
		src_y: number,
		width: number,
		height: number
	): void;

	copypixels(
		source_object: Image | Sketch | string,
		dest_x: number,
		dest_y: number,
	): void;

	/**
	 * Flips the image horizontally and or vertically. Arguments can be 0 or 1, where 0 is no flip, and 1 is flip.
	 * @param horizontal_flip
	 * @param vertical_flip
	 */
	flip(horizontal_flip: 0 | 1, vertical_flip: 0 | 1): void;

	/**
	 * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS allocated memory. Once called, the Image object is not available for any other use.
	 */
	freepeer(): void;

	/**
	 * Copies the pixels from the jit.matrix object specified by matrixname to the image.
	 * @param matrixname
	 */
	fromnamedmatrix(matrixname: string): void;

	/**
	 * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 */
	getpixel(x: number, y: number): number[];

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	setpixel(
		x: number,
		y: number,
		red: number,
		green: number,
		blue: number,
		alpha?: number
	): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 * @param rgba
	 */
	setpixel(x: number, y: number, rgba: number[]): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param x
	 * @param y
	 * @param rgb
	 * @param a
	 */
	setpixel(x: number, y: number, rgb: number[], a?: number): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param position
	 * @param red
	 * @param green
	 * @param blue
	 * @param alpha
	 */
	setpixel(
		position: number[],
		red: number,
		green: number,
		blue: number,
		alpha: number
	): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param position
	 * @param rgba
	 */
	setpixel(position: number[], rgba: number[]): void;

	/**
	 * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
	 * @param position
	 * @param rgb
	 * @param a
	 */
	setpixel(position: number[], rgb: number[], a?: number): void;

	/**
	 * Swaps the axes of the image so that width becomes height and vice versa. The effective result is that the image is rotated 90 degrees counter clockwise, and then flipped vertically.
	 */
	swapxy(): void;

	/**
	 * Copy the pixels from the image to the jit.matrix object specified by matrixname.
	 * @param matrixname
	 */
	tonamedmatrix(matrixname: string): void;
}

/**
 * MaxCanvas
 */
// TODO: use mozilla docs
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

declare class MaxCanvas {
	constructor(jsui: object);

	getContext(type: string): CanvasRenderingContext2D;
}

/**
 * CanvasRenderingContext2D
 */

declare class CanvasRenderingContext2D {
	/**
	 * Aspect ratio of the rendering context. ( this.width / this.height )
	 */
	aspect: number;
	fillstyle: string;
	/**
	 * no support for generic font families (e.g. sans-serif), use case-sensitive font-family name e.g. Verdana
	 */
	font: string;
	fontlist: string[];
	/**
	 * for compositing
	 */
	globalAlpha: number;
	/**
	 * The height of the rendering context
	 */
	height: number;
	/**
	 * default value: "butt"
	 */
	lineCap: "butt" | "round" | "square";
	/**
	 * default value: "miter"
	 */
	lineJoin: "round" | "bevel" | "miter";
	/**
	 * default value: 1
	 */
	lineWidth: number;
	/**
	 * The MGraphics object.
	 */
	mg: MGraphics;
	/**
	 * default value: "rgba(0,0,0,1.0)"
	 */
	shadowColor: string;
	/**
	 * default value: 0
	 */
	shadowOffsetX: number;
	/**
	 * default value: 0
	 */
	shadowOffsetY: number;
	stateStack: any[];
	strokeStyle: string;
	textAlign: string;
	textBasline: string;
	width: number;

	constructor(maxCanvas: MaxCanvas);

	save(): void;

	restore(): void;

	scale(x: number, y: number): void;

	rotate(x: number): void;

	translate(x: number, y: number): void;

	transform(
		m11: number,
		m12: number,
		m21: number,
		m22: number,
		dx: number,
		dy: number
	): void;

	setTransform(
		m11: number,
		m12: number,
		m21: number,
		m22: number,
		dx: number,
		dy: number
	): void;

	createLinearGradient(
		x0: number,
		y0: number,
		x1: number,
		y1: number
	): CanvasGradient;

	createRadialGradient(
		x0: number,
		y0: number,
		r0: number,
		x1: number,
		y1: number,
		r1: number
	): CanvasGradient;

	createPattern(
		image: Image,
		repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"
	): CanvasPattern;

	clearRect(x: number, y: number, w: number, h: number): void;

	fillRect(x: number, y: number, w: number, h: number): void;

	strokeRect(x: number, y: number, w: number, h: number): void;

	beginPath(): void;

	closePath(): void;

	moveTo(x: number, y: number): void;

	lineTo(x: number, y: number): void;

	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

	bezierCurveTo(
		cp1x: number,
		cp1y: number,
		cp2x: number,
		cp2y: number,
		x: number,
		y: number
	): void;

	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

	rect(x: number, y: number, w: number, h: number): void;

	arc(
		x: number,
		y: number,
		r: number,
		startAngle: number,
		endAngle: number,
		anticlockwise: number
	): void;

	fill(): void;

	stroke(): void;

	isPointInPath(x: number, y: number): boolean;

	fillText(text: string, x: number, y: number, maxWidth: number): void;

	strokeText(text: string, x: number, y: number, maxWidth: number): void;

	measureText(text: string): number;

	drawImage(image: Image, dx: number, dy: number): void;
	drawImage(
		image: Image,
		dx: number,
		dy: number,
		dw: number,
		dh: number
	): void;
	drawImage(
		image: Image,
		sx: number,
		sy: number,
		sw: number,
		sh: number,
		dx: number,
		dy: number,
		dw: number,
		dh: number
	): void;

	createImageData(sw: number, sh: number): ImageData;
	createImageData(imagedata: ImageData): ImageData;

	//getImageData(): ... not yet implemented in CanvasExtension.js
	putImageData(
		imagedata: ImageData,
		dx: number,
		dy: number,
		not_used_dirtyX: number,
		not_used_dirtyY: number,
		not_used_dirtyWidth: number,
		not_used_dirtyHeight: number
	): void;

	redraw(): void;

	paint(): void;

	roundedRect(
		x: number,
		y: number,
		w: number,
		h: number,
		ow: number,
		oh: number
	): void;

	setTimeout(expression: object, timeout: number): Task;

	clearInterval(task: Task): void;

	setSource(style: CanvasPattern | CanvasGradient | string): void;

	parseFontString(font: string): any[];

	getTextAlign(textString: string): number;

	getTextBaseline(): number;
}

/**
 * CanvasGradient
 */

declare class CanvasGradient {
	constructor(patternObj: Pattern, radiHelper: any); // TODO: radiHelper: any ?
	addColorStop(offset: number, color: any): void; // TODO: color: any ?
}

/**
 * CanvasPattern
 */

declare class CanvasPattern {
	constructor(pat: any, rep: any); // TODO: any?
}

/**
 * ImageData
 */

declare class ImageData {
	constructor(sketchimage: any); // TODO: any?
	set(index: number, value: number): void;
}

/**
 * CanvasPixelArray
 */

declare class CanvasPixelArray {
	readonly length: number;

	array(index: number): number;
	array(index: number, value: number): void;
}

/**
 * RGBAColor
 */

declare class RGBAColor {
	constructor(color: string, globalAlpha: number);

	readonly ok: boolean;
	r: number;
	g: number;
	b: number;
	a: number;

	toRGB(): string;

	toHex(): string;
}

declare function hslToRgba(
	h: number,
	s: number,
	l: number,
	a: number
): number[];
