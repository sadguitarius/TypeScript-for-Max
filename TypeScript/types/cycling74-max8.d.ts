/*
 * Documentation is property of Cycling '74 and published with permission.
 */

/**
 * Max globals
 *
 * https://docs.cycling74.com/max8/vignettes/jsglobal
 */

/**
 * Specifies how many inlets an instance should have. The inlets property must be set in the global code to have any effect. If it isn't set, an object with one inlet will be created.
 */
declare let inlets: number;
/**
 * Specifies how many inlets an instance should have. The inlets property must be set in the global code to have any effect. If it isn't set, an object with one inlet will be created.
 */
declare let outlets: number;
/**
 * Turns on the automatic file recompilation feature where a file is reloaded and recompiled if it changes. This is particularly useful during development of your Javascript code if you have several js instances using the same source file and you want them all to update when the source changes. It can also be used to facilitate the use of an external text editor. When the text editor saves the file, the js object will notice and recompile it. By default, the value of autowatch is 0 (off). If you want to turn on autowatch, it is best to do so in your global code.
 */
declare let autowatch: number;
/**
 * Allows access to the arguments typed into your object when it was instantiated. The filename is jsarguments[0], the first typed-in argument is jsarguments[1]. The number of arguments plus one is jsarguments.length. jsarguments[] is available in global code and any function. It never changes after an object is instantiated, unless the Max js object receives the jsargs message with new typed-in arguments.
 */
declare let jsarguments: (number|string)[];
// eslint-disable-next-line no-shadow-restricted-names
declare let arguments: IArguments;
declare let box: Box;
/**
 * Controls the size of the font shown in the text editing window where you edit a script in points. By assigning the editfontsize property in your global code, you can override the default font size setting for text editing, which is the same size as the text shown in the Max window.
 */
declare let editfontsize: number;
/**
 * During the execution of a function, the inlet property reports the inlet number that received the message that triggered the function, starting at 0 for the leftmost inlet. This property’s value is 0 within global code.
 */
declare let inlet: number;
declare let max: Max;
/**
 * Returns "js" (the standard Javascript class property returns "jsthis”)
 */
declare let maxclass: "js";
/**
 * The name of the message to the js object that invoked the method currently running. In global code, this is a nil value. This is generally useful only from within an anything() function that will be called when no specific function name matches the message sent to the js object. Here is an example of an anything() function that adds a property to a variable declared in global code. Note the use of the tricky Javascript bracket notation to specify a variable property.
 */
declare let messagename: string;
/**
 * Access to the patcher containing the js object. See the Patcher Object for more information on this object.
 */
declare let patcher: Patcher;
/**
 * Sends a red tinged message to the Max window.
 * @param message
 */
declare function error(message: string | (string|number)[]): void;
/**
 * Prints a message to the system console window. See post() below for further details about arguments.
 * @param message
 */
declare function cpost(message?: string | (string|number)[]): void;
/**
 * Prints a representation of the arguments in the Max window. If post() has no arguments, it prints starting on the next line. Otherwise it prints the input on the current line separated by spaces. Arrays are unrolled to one level as with outlet.
 * @param arguments
 */
declare function post(...arguments: (string|number)[]): void;
/**
 * Sends a message to the named Max object. A named Max object is an object associated with a global symbol (not an object with a patcher-specific name). For example, Max receive objects are bound to global symbols. The following code would send the message bang to the named object flower.
 * @param object_name
 * @param message_name
 * @param message_arguments
 */
declare function messnamed(
	object_name: string,
	message_name: string,
	message_arguments?: string
): void;
/**
 * A utility for writing functions that take a variable number of arguments, and/or those that can be called using various messages (such as an anything function). The Function object has an arguments property that can be numerically indexed like an Array but is not an instance of Array. This means that you cannot call Array functions such as sort() on the arguments property, or send the arguments property out an outlet as a list of values. The arrayfromargs() method will convert the arguments property to an Array, optionally with message as the zeroth element of the array. This message usage is useful for processing messages as though they are lists beginning with a symbol, as would be typical in your anything function. Here is an example of a function that allows its arguments to be sorted. Note that messagename is a property of the jsthis object that returns the name of the message that invoked the function.
 * @param message
 * @param arguments
 */
declare function arrayfromargs(message: string, arguments: IArguments): (string|number)[];
/**
 * Sets the patcher assist string for a designated inlet or outlet of a js object box. Designed to be called from the assistance function specified as an argument to the setinletassist() or setoutletassist() method (see example under setoutletassist() below).
 * @param arguments
 */
declare function assist(arguments: string | (string|number)[]): void;
/**
 * Declare an attribute which can be set, queried, and optionally stored in the patcher file. The attributename, argument is required, but the following arguments are optional. If no getterr or setter methods are specified, default ones will be used. These attributes can also be referenced by pattr. A few example uses are below.
 * @param attributenamex
 * @param gettername
 * @param settername
 * @param embed
 */
declare function declareattribute(
	attributenamex: string,
	gettername?: string,
	settername?: string,
	embed?: number
): void;
/**
 * The embedmessage method works only inside of your save() function. You use it to specify the name of a function you want to be called when the js object containing your script is recreated. The function name must be given as a string, followed by the arguments you wish to pass to the function. These arguments will typically be numbers, arrays, or strings (Javascript objects cannot be used in this context) and will reflect the current state of your object.
 *
 * You may use the embedmessage method as many times as you want to specify multiple functions you wish to invoke to restore object state. Here is an example where functions we assume you’ve defined called numchairs(), numtables(), and roomname() are used in separate embedmessage statements within a save function.
 * @param method_name
 * @param arguments
 */
declare function embedmessage(method_name: string, ...arguments: (string|number)[]): void;
/**
 * Notifies any clients (such as the pattr family of objects), that the object’s current value has changed. Clients can then take appropriate action such as sending a js instance the message getvalueof to invoke the getvalueof() method (if defined – see the special function names listed above for more information). The notifyclients() method is useful for objects that define setvalueof() and getvalueof() functions for pattr compatibility.
 */
declare function notifyclients(): void;
/**
 * Sends the data after the first argument out the outlet specified by the outlet_number. 0 refers to the leftmost outlet. If the outlet_number is greater than the number of outlets, no output occurs.
 * @param outlet_number
 * @param arguments
 */
declare function outlet(outlet_number: number, ...arguments: (string|number)[]): void;
/**
 * Associates either a number, string, or function with the numbered inlet (starting at 0 for the left inlet). If -1 is passed as the inlet number, the object argument is used for all inlets. In order to produce any assistance text in the patcher window the assistance function needs to call the assist() method described above. See example at setoutletassist() below. The setinletassist() and setoutletassist() functions are best called in global code but can be called at any time. You can even replace the assistance function or string dynamically.
 * @param inlet_number
 * @param object
 */
declare function setinletassist(inlet_number: number, object: number|string|((...args: (number|string)[]) => void)): void;
/**
 * Associates either a number, string, or function with the numbered outlet (starting at 0 for the left outlet). If -1 is passed as the outlet number, the object argument is used for all outlets. In order to produce any assistance in the patcher, the assistance function needs to call the assist() method described above.
 * @param outlet_number
 * @param object
 */
declare function setoutletassist(outlet_number: number, object: number|string|((...args: (number|string)[]) => void)): void;

/**
 * The Buffer object in JavaScript is a companion to the buffer~ object you instantiate in Max patchers, and provides the ability to access samples and metadata for the buffer~ object with the associated name.
 *
 * https://docs.cycling74.com/max8/vignettes/jsbuffer
 */
declare class Buffer {
	/**
	 * The name is required at the time the object is created.
	 * @param name
	 */
	constructor(name: string);

	/**
	 * Return the number of channels in the buffer~ object.
	 */
	channelcount(): number;

	/**
	 * Return the number of frames (samples in a single channel) in the buffer~ object.
	 */
	framecount(): number;

	/**
	 * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS allocated memory. Once called, the Image object is not available for any other use.
	 */
	freepeer(): void;

	/**
	 * Return the length of the buffer~ object in milliseconds.
	 */
	length(): number;

	/**
	 * Return an array with count samples from channel (1-based counting) starting at frame (zero-based counting).
	 * @param channel
	 * @param frame
	 * @param count
	 */
	peek(channel: number, frame: number, count: number): number[];

	/**
	 * Write into the buffer~ object at channel (1-based counting) and frame (0-based counting). Samples may be a single sample value or an array of sample values. It is computationally more efficient to use an array).
	 * @param channel
	 * @param frame
	 * @param samples
	 */
	poke(channel: number, frame: number, samples: number | number[]): void;

	/**
	 * Send a message to the associated buffer~ object. Can send any message that buffer~ understands.
	 * @param message_name
	 * @param arguments
	 */
	send(message_name: string, ...arguments: (number|string)[]): void;
}

/**
 * The Dict object in JS is a companion to the dict object you create in a Max patcher. It provides the ability to access structured data (a dictionary) associated with a name.
 *
 * https://docs.cycling74.com/max8/vignettes/jsdict
 */
declare class Dict {
	/**
	 * If no name is provided as an argument then a unique name will be generated for the dictionary.
	 * @param name
	 */
	constructor(name?: string);

	/**
	 * Access or set the name of a dict object as a property of the dict object
	 */
	name: string;

	/**
	 * The quiet property functions the same as the @quiet attribute to dict in Max. It suppresses many errors or warnings if set to true.
	 */
	quiet: boolean;

	/**
	 * Add values to the end of an array associated with the specified key.
	 * @param key   [symbol]
	 * @param value [list]
	 */
	append(key: string, value: (number|string)[]): void;

	/**
	 * Erase the contents of the dictionary, restoring to a clean state
	 */
	clear(): void;

	/**
	 * Make a clone of the incoming dictionary.
	 * @param name [symbol]
	 */
	clone(name: string): void;

	/**
	 * Return a 0 or 1 indicating the specified key exists (or doesn't) in the dictionary.
	 * @param key
	 */
	contains(key: string): number;

	/**
	 * Return the value associated with a key.
	 * @param  key    [symbol]
	 */
	get(key: string): number|string|(number|string)[];

	/**
	 * Return a list of all the keys in a dictionary.
	 */
	getkeys(): string[];

	/**
	 * Return a list of all the dictionaries that currently exist.
	 */
	getnames(): string[];

	/**
	 * Return the number of values associated with a key.
	 */
	getsize(): number;

	/**
	 * Return the type of the values associated with a key.
	 */
	gettype(): string;

	/**
	 * Replace the content of a dictionary.
	 * @param key   [symbol]
	 * @param value [symbol]
	 */
	parse(key: string, value: string): void;

	/**
	 * Pull the content of a named coll object into the dictionary.
	 * @param coll_name [symbol]
	 */
	pull_from_coll(coll_name: string): void;

	/**
	 * Push the dictionary's content into a named coll object. The keys in the dictionary will become the indices in the coll, and the values for those indices the values of the dictionary's keys.
	 * @param coll_name [symbol]
	 */
	push_to_coll(coll_name: string): void;

	/**
	 * Read the dictionary contents from a file.
	 * @param filename [symbol]
	 */
	readany(filename: string): void;

	/**
	 * Remove a key and its associated value from the dictionary.
	 * @param key [symbol]
	 */
	remove(key: string): void;

	/**
	 * Set the value for a key to a specified value, creating heirarchy.
	 * @param key   [symbol]
	 * @param value [list]
	 */
	replace(key: string, value: number|string|(number|string)[]): void;

	/**
	 * Set the value for a key to a specified value.
	 * @param key   [symbol]
	 * @param value [list]
	 */
	set(key: string, value: number|string|(number|string)[]): void;

	/**
	 * Set the value for a key to dictionary content defined using JSON.
	 * @param key   [symbol]
	 * @param value [list]
	 */
	setparse(key: string, value: string): void;

	/**
	 * Open a save dialog to write the dictionary contents to a file.
	 */
	writeagain(): void;

	/**
	 * Return the content of the dictionary as a JSON string.
	 */
	stringify(): string;

	/**
	 * Read a file from disk in the JSON format.
	 * @param filename [symbol]
	 */
	import_json(filename: string): void;

	/**
	 * Write a file to disk in the JSON format.
	 * @param filename [symbol]
	 */
	export_json(filename: string): void;

	/**
	 * Read a file from disk in the YAML format.
	 * @param filename [symbol]
	 */
	import_yaml(filename: string): void;

	/**
	 * Write a file to disk in the YAML format.
	 * @param filename [symbol]
	 */
	export_yaml(filename: string): void;
}

/**
 * The File object provides a means of reading and writing files from Javascript.
 *
 * https://docs.cycling74.com/max8/vignettes/jsfileobject
 */
declare class File {
	/**
	 * filename can be a file in the Max search path, an absolute path, or a relative path. Acceptable values for access can be "read", "write", or "readwrite". The default value for access is "read". Acceptable values for typelist are four character filetype codes listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. By default, typelist is empty. If able to, the File constructor opens the file specified by filename, provided it is one of the types in typelist.
	 * @param filename
	 * @param access
	 * @param typelist
	 */
	constructor(
		filename: string,
		access: "read" | "write" | "readwrite",
		typelist: string
	);

	/**
	 * File access permissions: "read", "write", or "readwrite". By default, this value is "read".
	 */
	access: string;

	/**
	 * The assumed file byteorder (endianness): "big", "little", or "native". By default, this value is "native".
	 */
	byteorder: string;

	/**
	 * The location of the end of file, in bytes.
	 */
	eof: number;

	/**
	 * The current filename.
	 */
	filename: string;

	/**
	 * The four-character code associated. See link for possible values.
	 *
	 * https://docs.cycling74.com/max8/vignettes/filetypes
	 */
	filetype: string;

	/**
	 * The absolute path to parent folder.
	 */
	foldername: string;

	/**
	 * Return a true/false indicating if the File constructor is successful in finding and opening the file.
	 */
	isopen: boolean;

	/**
	 * The line break convention to use when writing lines: "dos", "mac", "unix", or "native". By default, this value is "native".
	 */
	linebreak: "dos" | "mac" | "unix" | "native";

	/**
	 * The current file position, in bytes.
	 */
	position: number;

	/**
	 * An array of file type codes to filter by when opening a file. By default, this is the empty array.
	 */
	typelist: string[];

	/**
	 * Opens the file specified by the filename argument. If no argument is specified, it will open the last opened file.
	 * @param filename
	 */
	open(filename?: string): void;

	/**
	 * Closes the currently open file.
	 */
	close(): void; // TODO: Docs say string [symbol] ???

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position, and inserts a line break appropriate to the linebreak property. The file position is updated accordingly.
	 * @param characters
	 */
	writeline(characters: string): void;

	/**
	 * Reads and returns a string containing up to maximum_count characters or up to the first line break as read from the file, starting at the current file position. The file position is updated accordingly. The default maximum count value is 512. This can be increased by specifying a new maximum count as the argument.
	 * @param maximum_count
	 */
	readline(maximum_count: number): string;

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position. Unlike writeline(), no line break is inserted. The file position is updated accordingly.
	 * @param string
	 */
	writestring(string: string): void;

	/**
	 * Reads and returns a string containing up to char_count characters as read from the file, starting at the current file position. Unlike readline(), line breaks are not considered. The file position is updated accordingly.
	 * @param char_count
	 */
	readstring(char_count: number): string;

	/**
	 * Writes the numbers contained in the byte_array argument as bytes to the file, starting at the current file position. The file position is updated accordingly.
	 * @param byte_array
	 */
	writebytes(byte_array: number[]): void;

	/**
	 * Reads and returns an array containing up to byte_count numbers, read as bytes from the file, starting at the current file position. The file position is updated accordingly.
	 * @param byte_count
	 */
	readbytes(byte_count: number): number[];

	/**
	 * Writes the single character strings contained in the char_array argument as characters to the file, starting at the current file position. The file position is updated accordingly.
	 * @param char_array
	 */
	writechars(char_array: string[]): void;

	/**
	 * Reads and returns an array containing the single character strings, read as characters from the file, starting at the current file position. The file position is updated accordingly.
	 * @param char_count
	 */
	readchars(char_count: number): string[];

	/**
	 * Writes the numbers contained in the int16_array argument as signed 16-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param int16_array
	 */
	writeint16(int16_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 16-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param int16_count
	 */
	readint16(int16_count: number): number[];

	/**
	 * Writes the numbers contained in the int32_array argument as signed 32-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param int32_array
	 */
	writeint32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 32-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param int32_count
	 */
	readint32(int32_count: number): number[];

	/**
	 * Writes the numbers contained in the float32_array argument as 32-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param int32_array
	 */
	writefloat32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 32-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param float32_count
	 */
	readfloat32(float32_count: number): number[];

	/**
	 * Writes the numbers contained in the float64_array argument as 64-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param int64_array
	 */
	writefloat64(int64_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 64-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  float64_count
	 */
	readfloat64(float64_count: number): number[];
}

/**
 * The Folder object is a js “external object” defined in the Max object called jsfolder. It is used to iterate through files in a folder.
 *
 * https://docs.cycling74.com/max8/vignettes/jsfolderobject
 */
declare class Folder {
	/**
	 * pathname can either be the name of a folder in the search path or a complete pathname using Max path syntax.
	 * @param pathname
	 */
	constructor(pathname: string);

	/**
	 * Non-zero (true) if there are no more files to examine in the folder, or if the pathname argument to the Folder object didn’t find a folder.
	 */
	readonly end: boolean;

	/**
	 * The total number of files of the specified type(s) contained in the folder.
	 */
	readonly count: number;

	/**
	 *  The full pathname of the folder
	 */
	readonly pathname: string;

	/**
	 * The list of file types that will be used to find files in the folder. To search for all files (the default), set the typelist property to an empty array.
	 */
	typelist: string[];

	/**
	 * The name of the current file.
	 */
	readonly filename: string;

	/**
	 * An array containing the values year, month, day, hour, minute, and second with the last modified date of the current file. These values can be used to create a Javascript Date object.
	 */
	readonly moddate: number[];

	/**
	 * The four-character code associated with the current file's filetype. These codes are listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. If there is no mapping for the file's extension, a nil value is returned.
	 */
	filetype: string;

	/**
	 * The extension of the current file's name, including the period. If there are no characters after the period, a nil value is returned.
	 */
	extension: string;

	/**
	 * Start iterating at the beginning of the list of files. Re-opens the folder if it was previously closed with the close() function.
	 */
	reset(): void;

	/**
	 * Moves to the next file.
	 */
	next(): void;

	/**
	 * Closes the folder. To start using it again, call the reset() function.
	 */
	close(): void;
}

/**
 * The Global object is a fairly generic Javascript object that allows you to share data among js instances by adding and accessing properties. You can also access Global object properties from Max messages completely outside of js. Executing methods stored in Global objects from Max is not supported. However, methods are certainly among the kinds of things you can store within a Global object.
 *
 * A Global is basically a reference to a Javascript object that you can't access directly. The object is connected to the Max symbol with the name you supplied as an argument (this allows it to be accessed from Max). Every time you access a Global, it hands off the access to the secret hidden Javascript object. This means you can create any number of Global objects in your code, in any number of js instances, and if they all have the same name, they will all share the same data. In this way, a Global resembles a namespace.
 *
 * https://docs.cycling74.com/max8/vignettes/jsglobalobject
 */
declare class Global {
	/**
	 * @param name represents a String that uniquely identifies the Global.
	 */
	constructor(name: string);

	/**
	 * Sends the value of the named property property_name to the named Max receive object (or other Max object) bound to the specified receive_name symbol.
	 * @param receive_name
	 * @param property_name
	 */
	sendnamed(receive_name: string, property_name: string): void;

	/**
	 * Can have any property assigned to it
	 */
	[properties: string]: unknown;
}

/**
 * The LiveAPI object provides a means of communicating with the Live API functions from JavaScript. For background information on this functionality, please see the Live API Overview and Live Object Model documents, as well as the Reference pages for live.path, live.object and live.observer objects, which provide the same basic functionality as the LiveAPI object, but from the Max patcher.
 *
 * https://docs.cycling74.com/max8/vignettes/jsliveapi
 * https://docs.cycling74.com/max8/vignettes/live_api_overview
 * https://docs.cycling74.com/max8/vignettes/live_object_model
 */
declare class LiveAPI {
	/**
	 * callback is an optional JavaScript function. This function will be called when the LiveAPI object refers to a new object in Live (if the LiveAPI object's path change, for instance), or when an observed property changes. path refers to the object in Live "pointed to" by the LiveAPI object (e.g. "live_set tracks 0 devices 0"). Alternately, a valid id can be used to refer a LiveAPI object to an object in Live.
	 *
	 * Technical note: you cannot use the LiveAPI object in JavaScript global code. Use the live.thisdevice object to determine when your Max Device has completely loaded (the object sends a bang from its left outlet when the Device is fully initialized, including the Live API).
	 *
	 * Legacy note: previous versions of the LiveAPI object required the jsthis object's this.patcher property as the first argument. For backward-compatibility, this first argument is still supported, but is no longer necessary.
	 * @param path
	 */

	constructor(path: string);
	constructor(id: number);
	constructor(callback: () => void, path: string);
	constructor(callback: () => void, id: number);

	/**
	 * The id of the Live object referred to by the LiveAPI object. These ids are dynamic and awarded in realtime from the Live application, so should not be stored and used over multiple runs of Max for Live.
	 */
	readonly id: number;

	/**
	 * The path to the Live object referred to by the LiveAPI object. These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 */
	readonly path: string;

	/**
	 * The path to the Live object referred to by the LiveAPI object, without any quoting (the path property contains a quoted path). These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 */
	readonly unquotedpath: string;

	/**
	 * An array of children of the object at the current path.
	 */
	readonly children: string[];

	/**
	 * The follow mode of the LiveAPI object. 0 (default) means that LiveAPI follows the object referred to by the path, even if it is moved in the Live user interface. For instance, consider a Live Set with two tracks, "Track 1" and "Track 2", left and right respectively. If your LiveAPI object's path is live_set tracks 0, the left-most track, it will refer to "Track 1". Should the position of "Track 1" change, such that it is now to the right of "Track 2", the LiveAPI object continues to refer to "Track 1". A mode of 1 means that LiveAPI updates the followed object based on its location in the Live user interface. In the above example, the LiveAPI object would always refer to the left-most track, updating its id when the object at that position in the user interface changes.
	 */
	mode: number;

	/**
	 * The type of the object at the current path. Please see the Live API Overview and Live Object Model documents for more information.
	 */
	readonly type: string;

	/**
	 * A description of the object at the current path, including id, type, children, properties and functions.
	 */
	readonly info: string;

	/**
	 * The observed property, child or child-list of the object at the current path, if desired. For instance, if the LiveAPI object refers to "live_set tracks 1", setting the property to "mute" would cause changes to the "mute" property of the 2nd track to be reported to the callback function defined in the LiveAPI Constructor.
	 */
	property: string;

	/**
	 * The type of the currently observed property or child. The types of the properties and children are given in the Live Object Model.
	 *
	 * https://docs.cycling74.com/max8/vignettes/live_object_model
	 */
	readonly proptype: string;

	/**
	 * The patcher of the LiveAPI object, as passed into the Constructor.
	 */
	readonly patcher: string;

	/**
	 * The count of children of the object at the current path, as specified by the child argument.
	 * @param child
	 */
	getcount(child: string): number;

	/**
	 * Navigates to the path and causes the id of the object at that path out be sent to the callback function defined in the Constructor. If there is no object at the path, id 0 is sent.
	 * @param path
	 */
	goto(path: string): void;

	/**
	 * Returns the value or list of values of the specified property of the current object.
	 * @param property
	 */
	get(property: string): number|string|(number|string)[];

	/**
	 * Returns the value or list of values of the specified property of the current object as a String object.
	 * @param property
	 */
	getstring(property: string): string;

	/**
	 * Sets the value or list of values of the specified property of the current object.
	 * @param property
	 * @param value
	 */
	set(property: string, value: number|string|(number|string)[]): void;

	/**
	 * Calls the given function of the current object, optionally with a list of arguments.
	 * @param func
	 * @param arguments
	 */
	call(func: string, ...arguments: (number|string)[]): void;
}

declare class Db {
	constructor();

	/**
	 * Causes Max to write the metadata information currently stored in the database to a file. An optional argument can be used to specify a filename. If no filename is specified, the metadata is backed up to a file in your preferences folder.
	 */
	exportmetadata(): void;

	/**
	 * Causes Max to load metadata information from a previously stored file into the Max database. An optional argument can be used to specify a filename - when no argument is specified, Max will look for a backup file from a previous call to db.exportmeta in your preferences folder.
	 */
	importmetadata(): void;

	/**
	 * Causes Max to recreate the database Max uses when operating (e.g. the File Browser).
	 */
	reset(): void;
}

/**
 * Returns a Javascript representation of the "max" object (i.e., the recipient of ; max preempt 1 in a message box). Lets you send any message to the object that controls the Max application. In addition, the max object has js-specific properties listed in the section on js Max Object Properties.
 *
 * https://docs.cycling74.com/max8/vignettes/jsmaxobject#maxobjectproperties
 */
declare class Max {
	/**
	 * The pathname of the Max application
	 */
	readonly apppath: string;

	/**
	 * The currently running Max architecture ('x64' or 'x86').
	 */
	readonly arch: "x64" | "x86";

	/**
	 * The Patcher object of the frontmost patcher window, or a nil value if no patcher window is visible.
	 */
	readonly frontpatcher: Patcher;

	/**
	 * 1 if the js object is within a plug-in; note that this would be 1 if the js object was within a plug-in loaded into the vst~ object in Max.
	 */
	readonly isplugin: 0 | 1;

	/**
	 * 1 if the currently executing Max application environment does not allow editing, 0 if it does
	 */
	readonly isruntime: 0 | 1;

	/**
	 * 1 if the user has disabled loadbang for the currently loading patch. If your object implements a loadbang method, it can test this property and choose to do nothing if it is true.
	 */
	readonly loadbangdisabled: 0 | 1;

	/**
	 * The name of the platform (e.g., “windows” or “macintosh”)
	 */
	readonly os: "windows" | "macintosh";

	/**
	 * The current OS version number.
	 */
	readonly osversion: string;

	/**
	 * The current scheduler time in milliseconds - will be a floating-point value.
	 */
	readonly time: number;

	/**
	 * The version of the Max application, in the following form: "451"
	 */
	readonly version: string;

	/**
	 * Max Modifier Key Properties
	 */

	/**
	 * 1 if the command (Macintosh) or control (Windows) key is currently held down
	 */
	readonly cmdkeydown: 0 | 1;

	/**
	 * 1 if the control key is currently held down
	 */
	readonly ctrlkeydown: 0 | 1;

	/**
	 * 1 if the option (Macintosh) or alt (Windows) key is currently held down
	 */
	readonly optionkeydown: 0 | 1;

	/**
	 * 1 if the shift key is currently held down
	 */
	readonly shiftkeydown: 0 | 1;

	readonly db: Db;

	/**
	 * Returns an Array value containing the names of available attributes for the object.
	 */
	getattrnames(): void;

	/**
	 * Returns the value of the attribute specified by attribute_name. Lists are returned as JS Array objects.
	 * @param attribute_name
	 */
	getattr(attribute_name: string): (number|string)[];

	/**
	 * Sets the value of the attribute specified by attribute_name.
	 * @param attribute_name
	 * @param anything
	 */
	setattr(attribute_name: string, anything: string): void;

	/**
	 * Controlling Max with Messages
	 *
	 * You can control Max, MSP, and Jitter using the message box object. Normally, the message box contains an object, and you click on it or replace a variable typed into the message box to send a message down a patch cord to another Max object. However, if the message in a message box begins with a semicolon (;) followed by the word max, any message which follows will be sent directly to the Max application itself, just as though there were a receive object named "max".
	 *
	 * https://docs.cycling74.com/max8/vignettes/messages_to_max
	 */

	/**
	 * The word buildcollective, followed by a reference name symbol and an output filename, builds a collective using the patcher associated with the symbol. The collective is named with the output filename.
	 * @param name
	 * @param filename
	 */
	buildcollective(name: string, filename: string): void;

	/**
	 * The word checkpreempt, followed by a symbol, sends the current Overdrive mode to the receive object named by the symbol.
	 * @param receive_object
	 */
	checkpreempt(receive_object: string): void;

	/**
	 * Causes Max not to show a Save Changes dialog when you close a window or quit, even if there are windows that have been modified. This is useful in conjunction with the quit message below.
	 */
	clean(): void;

	/**
	 *  Clear the Max Console.
	 */
	clearmaxwindow(): void;

	/**
	 * The word closefile, followed by a symbol, closes the patcher file previously opened with the openfile message to Max associated with the symbol.
	 * @param symbol
	 */
	closefile(symbol: string): void;

	/**
	 * The word crash causes the Max application to terminate and generate a standard crashlog. When relaunched, The Max application will perform standard crash recovery (if crash recovery is enabled in the Max preferences).
	 */
	crash(): void;

	/**
	 * The word debug, followed by a zero or one, toggles the sending of Max's internal debugging output to the Max Console. Debug information may be of limited use for anyone who isn't debugging Max itself.
	 * @param enable
	 */
	debug(enable: 0 | 1): void;

	/**
	 * The word disablevirtualmididestinations, followed by a one, causes the Core MIDI driver to not create virtual destinations. If an argument of zero is given, the virtual destinations are created again.
	 * @param enable
	 */
	disablevirtualmididestinations(enable: 0 | 1): void;

	/**
	 * The word disablevirtualmidisources, followed by a one, causes the Core MIDI driver to not create virtual sources. If an argument of zero is given, the virtual sources are created again.
	 */
	disablevirtualmidisources(enable: 0 | 1): void;

	/**
	 * The word enablepathcache, followed by a zero or one, turns on (or off) Max's search path cache. This should only be done if you noticed unusual behavior when opening files.
	 * @param enable
	 */
	enablepathcache(enable: 0 | 1): void;

	/**
	 * (Macintosh only) The word enablerefresh, followed by a zero or one, toggles an alternative to the standard way in which the screen contents are updated, resulting in better visual performance. This feature is enabled by default. The rate at which refresh is done can be set by using the setrefreshrate message.
	 * @param enable
	 */
	enablerefresh(enable: 0 | 1): void;

	/**
	 * The word externaleditor followed by a symbol sets the text editor used for editing text file content - such as saved coll files, text files and Javascript code.
	 * @param editor
	 */
	externaleditor(editor: string): void;

	/**
	 * List all of the external objects currently loaded in the Max Console.
	 */
	externs(): void;

	/**
	 * The word fileformat, followed by two symbols that specify a file extension and a four-character file type, tells Max to associate a filename extension with a particular filetype. The message max fileformat .tx TEXT associates the extension .tx with TEXT (text) files. This allows a user to send a message read george and locate a file with the name george.tx. It also ensures that files with the extension .tx will appear in a standard open file dialog where text files can be chosen.
	 * @param extension
	 * @param filetype
	 */
	fileformat(extension: string, filetype: string): void;

	/**
	 * The word fixwidthratio, followed by a floating-point number, sets the ratio of the box to the width of the text when the user chooses Fix Width from the Object menu. The default value is 1.0. A value of 1.1 would make boxes wider than they needed to be, and a value of 0.9 would make boxes narrower than they need to be.
	 * @param ratio
	 */
	fixwidthratio(ratio: number): void;

	/**
	 * The word getarch, followed by a symbol used as the name of a receive object, sends the currently running Max architecture (always 'x64') to the named receive object.
	 * @param object_name
	 */
	getarch(object_name: string): void;

	/**
	 * The word getdefaultpatcherheight followed by a symbol used as the name of a receive object, causes Max to report the current default patcher height in pixels to the named receive object (See also the setdefaultpatcherheight message to Max.)
	 * @param object_name
	 */
	getdefaultpatcherheight(object_name: string): void;

	/**
	 * The word getdefaultpatcherwidth, followed by a symbol used as the name of a receive object, causes Max to report the current default patcher width in pixels to the named receive object (See also the setdefaultpatcherwidth message to Max.)
	 * @param object_name
	 */
	getdefaultpatcherwidth(object_name: string): void;

	/**
	 * The word getenablepathcache, followed by a symbol used as the name of a receive object, will report whether the path cache is enabled to the named receive object. (See also the enablepathcache message to Max.)
	 * @param object_name
	 */
	getenablepathcache(object_name: string): void;

	/**
	 * (Macintosh only.) The word getenablerefresh, followed by a symbol used as the name of a receive object, will report whether enhanced refresh is enabled to the named receive object. (See also the enablerefresh message to Max.)
	 * @param object_name
	 */
	getenablerefresh(object_name: string): void;

	/**
	 * The word geteventinterval, followed by a symbol used as the name of a receive object, will report the event interval to the named receive object. (See also the seteventinterval message to Max.)
	 * @param object_name
	 */
	geteventinterval(object_name: string): void;

	/**
	 * The word getfixwidthratio, followed by a symbol used as the name of a receive object, reports the current fix with ratio value to the named receive object. (See also the fixwidthratio message to Max.)
	 * @param object_name
	 */
	getfixwidthratio(object_name: string): void;

	/**
	 * The word getpollthrottle, followed by a symbol used as the name of a receive object, reports the current poll throttle value to the named receive object. (See also the setpollthrottle message to Max.)
	 * @param object_name
	 */
	getpollthrottle(object_name: string): void;

	/**
	 * The word getqueuethrottle, followed by a symbol used as the name of a receive object, causes Max to report the current queue throttle value to the named receive object. (See also the setqueuethrottle message to Max.)
	 * @param object_name
	 */
	getqueuethrottle(object_name: string): void;

	/**
	 * (Macintosh only) The word getrefreshrate, followed by a symbol used as the name of a receive object, causes Max to report the current refresh rate in Hertz to the named receive object. (See also the setrefreshrate message to Max.)
	 * @param object_name
	 */
	getrefreshrate(object_name: string): void;

	/**
	 * The word getruntime, followed by a symbol used as the name of a receive object,sends a 1 to the named receive object if the current version of Max is a runtime version, and a 0 if not.
	 * @param object_name
	 */
	getruntime(object_name: string): void;

	/**
	 * The word getslop, followed by a symbol used as the name of a receive object, reports the scheduler slop value to the named receive object. (See also the setslop message to Max.)
	 * @param object_name
	 */
	getslop(object_name: string): void;

	/**
	 * The word getsysqelemthrottle, followed by a symbol used as the name of a receive object, reports the maximum number of patcher UI update events processed at a time to the named receive object. (See also the setsysqelemthrottle message to Max.)
	 * @param object_name
	 */
	getsysqelemthrottle(object_name: string): void;

	/**
	 * The word getsystem, followed by a symbol used as the name of a receive object, will report the name of the system (macintosh or windows) to the named receive object.
	 * @param object_name
	 */
	getsystem(object_name: string): void;

	/**
	 * The word getversion, followed by a symbol used as the name of a receive object, will report the Max version number as a decimal value, which needs to be converted to a hexidecimal value (e.g. Max version 7.3.4 is reported as '1844'), and output from the named receive object.
	 * @param object_name
	 */
	getversion(object_name: string): void;

	/**
	 * Hides the cursor if it is visible.
	 */
	hidecursor(): void;

	/**
	 * Hides the menu bar. Although the pull-down menus are not available when the menu bar is hidden, menu shortcut (accelerator) keys continue to work.
	 */
	hidemenubar(): void;

	/**
	 * The word htmlref, followed by an object name as a symbol, looks for a file called <object-name>.html in the search path. If found, a web browser is opened to view the page.
	 * @param object_name
	 */
	htmlref(object_name: string): void;

	/**
	 * The word interval, followed by a number from 1 to 20, sets the timing interval of Max's internal scheduler in milliseconds. The default value is 1. This message only affects the scheduler when Overdrive is on and scheduler in audio interrupt (available with MSP) is off. (When using scheduler in audio interrupt mode the signal vector size determines the scheduler interval.) Larger scheduler intervals can improve CPU efficiency on slower computer models at the expense of timing accuracy.
	 * @param value
	 */
	interval(value: number): void;

	/**
	 * The word launchbrowser, followed by a URL as a symbol, opens a web browser to view the URL.
	 * @param url
	 */
	launchbrowser(url: string): void;

	/**
	 * The word maxcharheightforsubpixelantialiasing, followed by a number, sets a threshold font size (in points) for native subpixel aliasing. Since the look of subpixel antialiasing may be undesirable when working with large fonts as compared to regular antialiasing, this attribute lets you specify a threshold font size; if a font is larger than the specified size, it will be rendered using regular rather than subpixel antialiasing.
	 * Note that Max honors your computer's system preferences - Max won't use subpixel aliasing if you've disabled it for your system. Setting this attribute value to zero value is 0 will always use regular antialiasing, and setting a very high value will always use subpixel antialiasing (unless it is disabled in system preferences).
	 * @param points
	 */
	maxcharheightforsubpixelantialiasing(points: number): void;

	/**
	 * When using the runtime version of Max *and* an active custom menubar object, maxinwmenu, followed by the number 1, will place an item called Status in the Windows menu, allowing users to see the Max Console (labeled Status in the runtime version). When maxinwmenu is followed by 0 the menu item is not present. The default is for the Status item to be present in the Windows menu.
	 * @param enable
	 */
	maxinwmenu(enable: 0 | 1): void;

	/**
	 * Displays the Max Console. If the Max Console if not currently open, the window will be displayed. If the window is currently open, it will bring it to the front.
	 */
	maxwindow(): void;

	/**
	 * Prints the names of all current MIDI devices in the Max window. (See also MIDI Messages to Max.)
	 */
	midilist(): void;

	/**
	 * The word nativetextrendering, followed by a zero or one, toggles between using JUCE font rendering (0) and the platform-native font rendering for your computer (1) when displaying text in Max.
	 * @param enable
	 */
	nativetextrendering(enable: 0 | 1): void;

	/**
	 * (Macintosh) The word notypeinfo, followed by zero or one, sets whether Max saves files with traditional Mac OS four-character type information. By default, Max does save this information in files.
	 * @param enable
	 */
	notypeinfo(enable: 0 | 1): void;

	/**
	 * The word objectfile, followed by two symbols that specify an object name and a file name, creates a mapping between the external object and its filename. For example, the *~ object is in a file called times~ so at startup Max executes the command max objectfile *~ times~.
	 * @param object_name
	 * @param file_name
	 */
	objectfile(object_name: string, file_name: string): void;

	/**
	 * The word openfile, followed by two symbols that specify an reference name and a file name or path name, attempts to open the patcher with the specified name. If successful, the patcher is associated with the reference symbol, which can be passed as argument to the buildcollective, buildplugin, and closefile messages to Max. The openfile message is intended for batch collective building.
	 * @param reference_name
	 * @param file_name
	 */
	openfile(reference_name: string, file_name: string): void;

	/**
	 * List the current search paths in the Max Console. There is a button in the File Preferences window that does this.
	 */
	paths(): void;

	/**
	 * The word preempt, followed by a one (on) or zero (off), toggles Overdrive mode.
	 * @param mode
	 */
	preempt(mode: 0 | 1): void;

	/**
	 * The word pupdate, followed by two integer values that specify horizontal and vertical position, moves the mouse cursor to that global location.
	 * @param x
	 * @param y
	 */
	pupdate(x: number, y: number): void;

	/**
	 * Purge the missing MIDI device cache; Max maintains a cache of the MIDI Setup settings for known, but detached MIDI devices. Sending the message purgemididevices to Max will 'forget' any missing devices.
	 */
	purgemididevices(): void;

	/**
	 * Quits the Max application; equivalent to choosing Quit from the File menu. If there are unsaved changes to open files, and you haven't sent Max the clean message, Max will ask whether to save changes.
	 */
	quit(): void;

	/**
	 * Causes all Max windows to be updated.
	 */
	refresh(): void;

	/**
	 * (Macintosh only) The word setrefreshrate, followed by a number, sets the rate, in frames per second, at which the visual display is updated. On Macintosh systems, the rate at which the screen is refreshed is unrelated to the rate at which you change its contents. Better visual performance can be achieved - at the cost of a slight performance decrease in Jitter, and little or no performance decrease for audio processing - by specifying a higher frame rate. When enabled using the enablerefresh 1 message, the default rate is 28.57 FPS. Refresh enable is off by default.
	 * @param fps
	 */
	refreshrate(fps: number): void;

	/**
	 * The word relaunchmax causes the Max application to close and relaunch. If relaunchmax is followed by an optional symbol that specifies a file name or path name, the Max patch referenced by that file name or path will be opened at launch. This is useful in conjunction for situations involving patches which are intended to run unattended (e.g. installations).
	 * @param file_or_path
	 */
	relaunchmax(file_or_path: string): void;

	/**
	 * The word runtime, followed by a zero or one and a message, executes the message if the current version of Max is a runtime version (1) or non-runtime (0).
	 * @param isRuntime
	 * @param message
	 */
	runtime(isRuntime: 0 | 1, message: string): void;

	/**
	 * The word sendinterval, followed by a symbol, sends the current scheduler interval to the receive object named by the symbol.
	 * @param object_name
	 */
	sendinterval(object_name: string): void;

	/**
	 * The word sendapppath, followed by a symbol, sends a symbol with the path of the Max application to the receive object named by the symbol.
	 * @param object_name
	 */
	sendapppath(object_name: string): void;

	/**
	 * The word setdefaultpatcherheight, followed by an integer value greater than 100, sets the default patcher height in pixels.
	 * @param height
	 */
	setdefaultpatcherheight(height: number): void;

	/**
	 * The word setdefaultpatcherwidth, followed by an integer value greater than 100, sets the default patcher width in pixels.
	 * @param width
	 */
	setdefaultpatcherwidth(width: number): void;

	/**
	 * The word seteventinterval, followed by an integer value, sets the time between invocations of the event-level timer (The default value is 2 milliseconds). The event-level timer handles low priority tasks like drawing user interface updates and playing movies.
	 * @param interval
	 */
	seteventinterval(interval: number): void;

	/**
	 * The word setmixergbitmode, followed by a 0, 1 or 2, sets the state of the Enable Mixer Crossfade preference for top-level patcher mixers. A value of 0 sets the preference to `Off`, 1 to `On`, and 2 to `Auto`.
	 */
	setmixergbitmode(mode: 0 | 1 | 2): void;

	/**
	 * The word setmixerlatency, followed by a number, sets the Mixer Crossfade Latency preference for top-level patcher mixers to the specified number of milliseconds.
	 * @param latency
	 */
	setmixerlatency(latency: number): void;

	/**
	 * The word setmixerparallel, followed by a 0 or 1, disables or enables the Enable Mixer Parallel Processing preference for top-level patcher mixers.
	 * @param enable
	 */
	setmixerparallel(enable: 0 | 1): void;

	/**
	 * The word setmixerramptime, followed by a number, sets the Mixer Crossfade Ramp Time preference for top-level patcher mixers to the specified number of milliseconds.
	 * @param time
	 */
	setmixerramptime(time: number): void;

	/**
	 * The word setmirrortoconsole, followed by a 1 or 0, turns on or off (default is 0, off) mirroring of Max Console posts to the system console. The system console is available on the Mac using Console.app, or on Windows using the DbgView program (free download from Microsoft).
	 * @param enable
	 */
	setmirrortoconsole(enable: 0 | 1): void;

	/**
	 * The word setsleep, followed by a number, sets the time between calls to get the next system event, in 60ths of a second. The default value is 2.
	 * @param interval
	 */
	setsleep(interval: number): void;

	/**
	 * The word setpollthrottle, followed by an integer, sets the maximum number of events the scheduler executes each time it is called (The default value is 20). Setting this value lower may decrease accuracy of timing at the expense of efficiency.
	 * @param event_count
	 */
	setpollthrottle(event_count: number): void;

	/**
	 * The word setqueuethrottle, followed by an integer value, sets the maximum number of events handled at low-priority each time the low-priority queue handler is called (The default value is 2). Changing this value may affect the responsiveness of the user interface.
	 * @param event_count
	 */
	setqueuethrottle(event_count: number): void;

	/**
	 * The word setslop, followed by a floating-point value, sets the scheduler slop value - the amount of time a scheduled event can be earlier than the current time before the time of the event is adjusted to match the current time. The default value is 25 milliseconds.
	 * @param slop_value
	 */
	setslop(slop_value: number): void;

	/**
	 * The word setsysqelemthrottle, followed by a number, sets the maximum number of patcher UI update events to process at a time. Lower values can lead to more processing power available to other low-priority Max processes, and higher values make the user interface more responsive (especially when using many bpatchers).
	 * @param event_count
	 */
	setsysqelemthrottle(event_count: number): void;

	/**
	 * Shows the cursor if it is hidden.
	 */
	showcursor(): void;

	/**
	 * Shows the menu bar after it has been hidden with hidemenubar.
	 */
	showmenubar(): void;

	/**
	 * Prints the number of symbols in the symbol table in the Max Console.
	 */
	size(): void;

	/**
	 * The word system, followed by the name of an Operating System (windows or macintosh) and a message, will execute the message if Max is running on the named OS.
	 * @param os
	 * @param message
	 */
	system(os: "windows" | "macintosh", message: string): void;

	/**
	 * The word useexternaleditor followed by a one (on) or zero (off) toggles using an external editor for text. If enabled, any situation where an external editor can be used will launch the editor. If disabled, an external editor will only be used when selected from the menu.
	 * @param enable
	 */
	useexternaleditor(enable: 0 | 1): void;

	/**
	 * The word useslowbutcompletesearching, followed by a one (on) or zero (off), toggles complete file searching. When enabled, it causes files not found in Max's cache of the search path to be searched in the file system. This is necessary only in extremely rare cases where the file cache does not update properly. One such case is copying a file into the search path using a version of the Mac OS prior to 10.5.5 over a network. This option may cause patcher files to be loaded more slowly. The setting defaults to off with each launch of the application, and is not stored in the user's preferences. useslowbutcompletesearching 0 turns the setting off.
	 * @param enable
	 */
	useslowbutcompletesearching(enable: 0 | 1): void;

	/**
	 * The word midi, followed by a variable-length message, allows messages to be sent to configure the system MIDI object.
	 * TODO: find out options
	 * @param message
	 */
	midi(...message: (number|string)[]): void;

	/**
	 * innum specifies an input port, outnum specifies an output port, portname is the name of the port as a single symbol (i.e. It is necessary to use double quotes). An abbrev value is 0 for no abbrev (- in menu), 1 for 'a' and 26 for 'z'.
	 * @param message
	 */
	portabbrev(...message: (number|string)[]): void; // TODO: Documentation is unclear

	/**
	 * Enables (1) or disables (0) the port specified by portname. All ports are enabled by default.
	 * TODO: Seems to be missing a parameter
	 * @param portname
	 */
	portenable(portname: string): 0 | 1;

	/**
	 * Similar to portabbrev, but offset is the channel offset added to identify input or output ports when a MIDI object can send to or receive from multiple ports by channel number. Must be a multiple of 16 (e.g. max midi portoffset innum PortA 16 sets the channel offset for PortA device to 16).
	 * @param message
	 */
	portoffset(...message: (number|string)[]): void;
}

/**
 * A Maxobj is a Javascript representation of a Max object in a patcher. It is returned by various methods of a Javascript Patcher object, such as newobject().One important thing to keep in mind about a Maxobj is that it could eventually refer to an object that no longer exists if the underlying Max object is freed. The valid property can be used to test for this condition.
 *
 * https://docs.cycling74.com/max8/vignettes/jsmaxobj
 */
declare class Maxobj {
	constructor();

	/**
	 * The location of an object in a patcher. When the object's rectangle is changed, it will move on screen if it is visible. The coordinates are stored in the following order: left, top, right, bottom.
	 */
	rect: number[];

	/**
	 * The Max class (as opposed to the Javascript class, which is "Maxobj" and accessed via the standard class property) of the object.
	 */
	readonly maxclass: string;

	/**
	 * The Patcher object that contains the Maxobj
	 */
	readonly patcher: Patcher;

	/**
	 * Is the object set to be hidden in a locked patcher?
	 */
	hidden: boolean;

	/**
	 * If the object is set to use one of the standard 16 colors, this property is the index of the color
	 */
	colorindex: number;

	/**
	 * If there is another object after this one in the Patcher's list of objects, this property returns it, otherwise it returns a nil value
	 */
	readonly nextobject: Maxobj;

	/**
	 * The patcher-specific name of the object, as set with the Name... dialog
	 */
	varname: string;

	/**
	 * Whether the object can be selected for text entry (a number box would be an example of an object whose canhilite property returns true)
	 */
	canhilite: boolean;

	/**
	 * Whether the object is in the Patcher's background layer
	 */
	background: boolean;

	/**
	 * Whether the object ignores clicks
	 */
	ignoreclick: boolean;

	/**
	 * Whether the object is selected in an unlocked patcher window.
	 */
	readonly selected: boolean;

	/**
	 * If the Maxobj refers to an object is of Max class js, this returns the associated jsthis object
	 * TODO: Correct return type
	 */
	readonly js: Maxobj;

	/**
	 * Returns whether the Maxobj refers to a valid Max object
	 */
	valid: boolean;

	/**
	 * Sends the object the message specified by the string, followed by any additional arguments provided. This is useful for sending messages to object which dynamically dispatch messages with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param message
	 * @param anything
	 */
	message(message: string, ...anything: (number|string)[]): void;

	/**
	 * Opens a help file describing the object, if it exists
	 */
	help(): void;

	/**
	 * If the object contains a patcher, this function returns a (Javascript) Patcher object. The optional index is used for specifying an instance number, which only applies to poly~ objects. If the object does not contain a subpatcher, a nil value is returned.
	 * @param index
	 */
	subpatcher(index: number): Patcher;

	/**
	 * Returns a Boolean value if the object has an entry in its message list for the message specified by the string. If the entry is not a message that can be sent by a user within Max (i.e., it's a C-level “untyped” message), false is returned. This doesn’t work for messages which are dynamically dispatched with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param message
	 */
	understands(message: string): boolean;

	/**
	 * Returns an Array value containing the names of available attributes for the object.
	 */
	getattrnames(): void;

	/**
	 * Returns the value of the attribute specified by attribute_name. Lists are returned as JS Array objects.
	 * @param attribute_name
	 */
	getattr(attribute_name: string): number|string|(number|string)[];

	/**
	 * Sets the value of the attribute specified by attribute_name.
	 * @param attribute_name
	 * @param anything
	 */
	setattr(attribute_name: string, anything: string): void;

	/**
	 * Returns an Array value containing the names of available attributes for the object's box.
	 */
	getboxattrnames(): string[];

	/**
	 * Returns the value of the object's box attribute specified by box_attribute_name. Lists are returned as JS Array objects.
	 */
	getboxattr(): string | number | string[] | number[];

	/**
	 * Sets the value of the object's box attribute specified by box_attribute_name.
	 * @param box_attribute_name
	 * @param anything
	 */
	setboxattr(box_attribute_name: string, anything: string): void;
}

/**
 * The Patcher object is a Javascript representation of a Max patcher. You can find, create, modify, and iterate through objects within a patcher, send messages to a patcher that you would use with the thispatcher object, etc.
 *
 * There are currently three ways to get a Patcher:
 *
 * --Use the Constructor
 *
 * --Access the patcher property of a jsthis (accessed as this.patcher)
 *
 * --Use the subpatcher() method of a Maxobj object
 *
 * https://docs.cycling74.com/max8/vignettes/jspatcherobject
 */
declare class Patcher {
	/**
	 * Uses 100, 100, 400, 400 as default window coordinates
	 */
	constructor();

	/**
	 * left, top, bottom, right: global screen coordinates of the Patcher window
	 * @param left
	 * @param top
	 * @param bottom
	 * @param right
	 */
	constructor(left: number, top: number, bottom: number, right: number);

	/**
	 * If the patcher is a subpatcher, the box property returns the Maxobj that contains it. To traverse up to the top-level patcher:
	 * ```
	 * var prev = 0
	 * var owner = this.patcher.box
	 * while (owner) {
	 *   prev = owner
	 *   owner = owner.patcher.box
	 * }
	 * if (prev) post("top patcher is", prev.patcher.name)
	 * ```
	 */
	readonly box: Maxobj;

	/**
	 * Number of objects in the patcher
	 */
	readonly count: number;

	/**
	 * The patcher’s file path on disk
	 */
	readonly filepath: string;

	/**
	 * If the patcher contains objects, this is the first one in its list. You can iterate through all objects in a patcher using the nextobject property of a Maxobj.
	 */
	readonly firstobject: Maxobj;

	/**
	 * The patcher's name (its window title, without any brackets that appear for subpatchers)
	 */
	name: string;

	/**
	 * The patcher's locked state. This property is read-only in the runtime version of Max.
	 */
	locked: boolean;

	/**
	 * Returns "patcher"
	 */
	readonly maxclass: "patcher";

	/**
	 * Returns the Max class name of the parent object if this is a subpatcher, or a nil value if this is a top-level patcher.
	 */
	readonly parentclass: string;

	/**
	 * If the patcher is a subpatcher, this returns the parent patcher. Otherwise it returns a nil value.
	 */
	readonly parentpatcher: Patcher;

	/**
	 * X/Y coordinate array for the scroll offset of a patcher's window
	 */
	scrolloffset: number[];

	/**
	 * X/Y coordinate array for the patcher's fixed origin
	 */
	scrollorigin: number[];

	/**
	 * A Javascript representation of the window associated with the patcher. For more information, see the Wind Object.
	 */
	wind: Wind;

	/**
	 * Creates a new object of Max class classname in a patcher using the specified parameters and returns a Maxobj (see below) that represents it.
	 *
	 *Example:
	 *
	 * ```
	 * a = patcher.newobject("toggle", 122, 90, 15, 0)
	 * ```
	 * @param classname
	 * @param params
	 */
	newobject(classname: string, ...params: (number|string)[]): Maxobj;

	/**
	 * Creates a new object of class classname in a patcher using the specified parameters and return a Maxobj (see below) that represents it.
	 *
	 * Example:
	 * ```
	 * a = patcher.newdefault(122, 90, "toggle")
	 * ```
	 *
	 * The newdefault() method also accepts additional arguments for non-user interface objects that represent the created object’s typed-in arguments.
	 *
	 * Example:
	 * ```
	 * a = patcher.newdefault(122, 90, "pack", "rgb", 255, 128, 64)
	 * ```
	 * @param left
	 * @param top
	 * @param classname
	 * @param args
	 */
	newdefault(
		left: number,
		top: number,
		classname: string,
		...args: (number|string)[]
	): Maxobj;

	// TODO: Are from_object: any actually strings, or Maxobjs?

	/**
	 * Connects two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 *
	 * Example:
	 * ```
	 * p = this.patcher
	 * a = p.newobject("toggle", 122, 90, 15, 0)
	 * b = p.newobject("toggle", 122, 140, 15, 0)
	 * p.connect(a, 0, b, 0)
	 * ```
	 * @param from_object
	 * @param outlet
	 * @param to_object
	 * @param inlet
	 */
	connect(
		from_object: Maxobj,
		outlet: number,
		to_object: Maxobj,
		inlet: number
	): void;

	/**
	 * Connects two objects (of type Maxobj) in a patcher with a hidden patch cord. Arguments are the same as for the connect message.
	 * @param from_object
	 * @param outlet
	 * @param to_object
	 * @param inlet
	 */
	hiddenconnect(
		from_object: Maxobj,
		outlet: number,
		to_object: Maxobj,
		inlet: number
	): void;

	/**
	 * Disconnects an existing connection between two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 * Example:
	 * ```
	 * p = this.patcher
	 * a = p.newobject("toggle", 122, 90, 15, 0)
	 * b = p.newobject("toggle", 122, 140, 15, 0)
	 * p.connect(a, 0, b, 0)
	 *
	 * p.disconnect(a, 0, b, 0)
	 * ```
	 * @param from_object
	 * @param outlet
	 * @param to_object
	 * @param inlet
	 */
	disconnect(
		from_object: Maxobj,
		outlet: number,
		to_object: Maxobj,
		inlet: number
	): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument. Does not recurse into subpatchers. The following example prints the name of each object's class in the Max window:
	 *
	 * ```
	 * function printobj(a) {
	 *   post(a.maxclass)
	 *   post()
	 *   return
	 * }
	 * this.patcher.apply(printobj)
	 * ```
	 * @param func
	 */
	apply(func: (object: Maxobj) => void): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument.
	 * Same as apply() except that applydeep() recurses into subpatchers (depth first).
	 *
	 * ```
	 * function printobj(a) {
	 *   post(a.maxclass)
	 *   post()
	 *   return
	 * }
	 * this.patcher.applydeep(printobj)
	 * @param func
	 */
	applydeep(func: (object: Maxobj) => void): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
	 * @param action_function
	 * @param test_function
	 */
	applyif(
		action_function: (object: Maxobj) => void,
		test_function: (object: Maxobj) => void
	): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
	 * Same as applyif() except that applydeepif() recurses into subpatchers
	 * @param action_function
	 * @param test_function
	 */
	applydeepif(
		action_function: (object: Maxobj) => void,
		test_function: (object: Maxobj) => void
	): void;

	/**
	 * Removes the object (a Maxobj passed as an argument) from a patcher
	 * @param obj
	 */
	remove(obj: Maxobj): void;

	/**
	 * Returns the first object found in a patcher with the given name. The name is a local name as specified by the Name... dialog in a patcher, not the name of a send or receive object. You can also set an object's name using the varname property of a Maxobj.
	 * @param name
	 */
	getnamed(name: string): Maxobj;

	/**
	 * Calls the function on each object in a patcher, passing it as a Maxobj argument to the function. If the function returns true, the iteration stops and the Maxobj object is returned as the value of the getlogical() method. Otherwise getlogical() returns a nil value. Please note that access to patcher attributes in global code is not supported. This requires the use of loadbang().
	 *
	 * Example:
	 * ```
	 * 	 // post the patching rectangle and Max class of each object in the current patch
	 * function logical(a) {
	 *   if (a) return 1
	 *   else return 0
	 * }
	 *
	 * function loadbang() {
	 *   e = patcher.getlogical(logical) //uses the return value as an array
	 *   if (e && e.length) {
	 *     for (var i = 0; i < e.length; i++) {
	 *       post(e[i].maxclass + ": " + e[i].rect + "\n")
	 *     }
	 *   }
	 * }
	 *
	 * function bang() {
	 *   loadbang()
	 * }
	 * ```
	 * @param func
	 */
	getlogical(func: (test: Maxobj) => boolean): Maxobj;

	/**
	 * Moves the object to the front of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param obj
	 */
	bringtofront(obj: Maxobj): void;

	/**
	 * Moves the object to the back of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param obj
	 */
	sendtoback(obj: Maxobj): void;

	/**
	 *  Returns an Array value containing the names of available attributes for the Patcher.
	 */
	getattrnames(): string[];

	/**
	 * Returns the value of the Patcher attribute specified by attribute_name. Lists are returned as JS Array objects.
	 */
	getattr(): string | string[];

	/**
	 * Sets the value of the Patcher attribute specified by attribute_name.
	 * @param attribute_name
	 * @param anything
	 */
	setattr(attribute_name: string, anything: string): void;
}

/**
 * TODO: is this in the docs somewhere?
 */
declare class Box {
	rect: number[]
	/**
	 * TODO: just guessing here
 	 */
	inbang(inlet: number): void;

	/**
	 * Returns the value of the attribute specified by attribute_name. Lists are returned as JS Array objects.
	 * @param attribute_name
	 */
	getattr(attribute_name: string): number|string|(number|string)[];

	/**
	 * TODO: docs
	 */
	getvalueof(): number;
}

/**
 * The PolyBuffer object in JS is a companion to the polybuffer~ object you create in a Max patcher. It provides the ability to access a group of buffer~ objects associated with a name.
 *
 * https://docs.cycling74.com/max8/vignettes/live_object_model
 */
declare class PolyBuffer {
	/**
	 * If no name is provided as an argument then instantiation will fail.
	 * @param name
	 */
	constructor(name: string);

	readonly name: string;
	readonly count: number;
	readonly size: number;
	open(): void;
	wclose(): void;
	readfolder(folder_path: string): void;
	writefolder(folder_path: string): void;
	append(soundfile_path: string): void;
	appendempty(duration: number, channels: number): void;
	clear(): void;
	print(): void;
	send(index: number, ...msg: (number|string)[]): void;

	/**
	 * Return an array containing index, name, path, duration, channel, and sample rate.
	 */
	dump(): [number, string, string, number, number, number];

	/**
	 * Return an array containing names of the buffer~ objects and file names.
	 * @param filename
	 */
	getshortname(filename: string): string[];

	/**
	 * Return an array containing names of all the buffer~ objects.
	 * @param filename
	 */
	getbufferlist(filename: string): void;
}

/**
 * A task is a function that can be scheduled or repeated. You can set the arguments to the function as well as the object that will be this when the function is called.
 *
 * https://docs.cycling74.com/max8/vignettes/jstaskobject
 */
declare class Task {
	/**
	 * The object argument represents the this during the execution of the function. Use the this keyword (referring to the jsthis object) to be able to use outlets and other js object features. The function argument represents the function you want to execute, and arguments (an array) represents the arguments to pass to the function. The object and arguments arguments are optional. If not present, the parent of the function object (typically jsthis) will be assumed, and there will be no arguments supplied to the function.
	 *
	 * Example:
	 * ```
	 * function ticker(a, b, c) {
	 *   post("tick")
	 * }
	 *
	 * args = new Array(3)
	 * args[0] = 1
	 * args[1] = 2
	 * args[2] = 3
	 * t = new Task(ticker, this, args)
	 * ```
	 *
	 * Although the overall timing accuracy of a Task function is high, the latency between the scheduled time and the actual execution time of a Task function is variable because the function runs in a low-priority thread. Therefore you should avoid using a Task function in a time-critical operation.
	 *
	 * For convenience, a Task object is a property of the function executed in a Task. To access the Task from within its function, use the following standard Javascript syntax:
	 *
	 * arguments.callee.task

	 * @param func
	 * @param obj
	 * @param args
	 */
	constructor(func: (...args: (number|string)[]) => void, obj?: Maxobj, ...args: (number|string)[]);

	/**
	 * The arguments passed to the task function. arguments[0] is the first argument.
	 */
	arguments: (number|string)[];

	/**
	 * The function that is executed in the Task. You can even change this within the task function itself.
	 */
	function: (...args: (number|string)[]) => void;

	/**
	 * Whether the Task is running or not. Within a function executing within a task, this will always be 1.
	 */
	readonly running: boolean;

	/**
	 * The time in milliseconds between repeats of the task function. The default interval is 500 ms. Here is an example of a Task with a function that causes the Task to run 10% more slowly each time the function is called, which uses the arguments.callee.task syntax:
	 *
	 * ```
	 * function taskfun() {
	 *   var intv = arguments.callee.task.interval
	 *   arguments.callee.task.interval = intv + intv * 0.1
	 * }
	 * ```
	 */
	interval: number;

	/**
	 * The object that is assigned to be the this in the task function. Most often this will be your jsthis object, so you can, for example access the outlet() method. You set up your jsthis object to be the this by creating a task with the keyword this as the first argument. Example: If the object property of a task is a js object, the following three lines of code are identical from within a task function:
	 *
	 * ```
	 * arguments.callee.task.object.outlet(1, "bang")
	 * outlet(1, "bang")
	 * this.outlet(1, "bang")
	 * ```
	 */
	object: Maxobj;

	/**
	 * The number of times the task function has been called. Outside of a task function, the value of iterations is always 0. The value resets each time the task is started (using the repeat(), execute(), or schedule() methods.
	 */
	readonly iterations: number;

	/**
	 * Whether the Task object has been invalidated and is awaiting garbage collection. An invalid object will no longer respond to the execute() or schedule() methods. See the description of the freepeer() method.
	 */
	readonly valid: boolean;

	/**
	 * Repeat a task function. The optional number argument specifies the number of repetitions. If the argument is not present or is negative, the task repeats until it is cancelled. The optional initialdelay argument sets the delay in milliseconds until the first iteration. Example:
	 * ```
	 * tsk = new Task(repeater_function, this)
	 * tsk.interval = 1000 // every second
	 * tsk.repeat(3) // do it 3 times
	 * ```
	 *
	 * Here is a repeater function that posts its iteration count to the Max window:
	 * ```
	 * function repeater_function() {
	 *   post(arguments.callee.task.iterations)
	 * }
	 * ```
	 * In the above example, the Max window output would be:
	 *
	 * 1
	 *
	 * 2
	 *
	 * 3
	 * @param times
	 */
	repeat(times?: number): void;

	/**
	 * Run the task once, right now. Equivalent to calling the task function with its arguments.
	 */
	execute(): void;

	/**
	 * Run the task once, with a delay. The optional delay argument sets the time (in milliseconds) before the task function will be executed.
	 * @param delay
	 */
	schedule(delay?: number): void;

	/**
	 * If a task is scheduled or repeating, any future executions are cancelled. This method can be used within a task function for a self-canceling Task. The following example is a task function that will run only once, even if it is started using the repeat() function.
	 *
	 * Example:
	 * ```
	 * function once() {
	 *   arguments.callee.task.cancel()
	 * }
	 * ```
	 */
	cancel(): void;

	/**
	 * Invalidate the Task and make it available for garbage collection by the JS engine. Task objects persist beyond their code scope (otherwise, the object could be garbage collected before its scheduled function is called). The user is responsible for invalidating the Task when it is no longer in use. All Tasks (valid or invalid) will be garbage collected and freed when the parent JS object reloads its script or is itself freed.
	 *
	 * Example:
	 * ```
	 * function bang() {
	 *   var tsk = new Task(cb) // Task will not be freed when the bang() function returns
	 *   tsk.schedule(200)
	 * }
	 *
	 * function cb() {
	 *   post("right on schedule!\n")
	 *   arguments.callee.task.freepeer() // ensure that the caller can be GC'd
	 * }
	 * ```
	 */
	freepeer(): void;
}

/**
 * The Wind object is a property of a Patcher that represents its window. You cannot create a new Wind or access other types of windows such as that of a Max table object.
 *
 * https://docs.cycling74.com/max8/vignettes/jswindobj
 */
declare class Wind {
	/**
	 * The Patcher object associated with the window.
	 */
	readonly assoc: Patcher;

	/**
	 * The Max class of the object associated with the window.
	 */
	readonly assocclass: string;

	/**
	 * Has the window’s contents been modified? This property is read-only in the runtime version of Max.
	 */
	dirty: boolean;

	/**
	 * Does the window have a grow area?
	 */
	hasgrow: boolean;

	/**
	 * Does the window have a horizontal scroll bar?
	 */
	hashorizscroll: boolean;

	/**
	 * Does the window have a vertical scroll bar?
	 */
	hasvertscroll: boolean;

	/**
	 * Does the window have a zoom box?
	 */
	haszoom: boolean;

	/**
	 * Does the window have a window title bar?
	 */
	hastitlebar: boolean;

	/**
	 * An array of four coordinates (left, top, right, bottom) representing the window’s location in global coordinates.
	 */
	location: number[];

	/**
	 * The Wind object of the next patcher visible in the application’s list of windows The first Wind object can be accessed using the frontpatcher property of the Max object (as max.frontpatcher.wind).
	 */
	next: Wind;

	/**
	 * An array of two coordinates (width, height) representing the window’s size.
	 */
	size: number[];

	/**
	 * The window’s title.
	 */
	title: string;

	/**
	 * Can you see the window?
	 */
	visible: boolean;

	/**
	 * Move the window in front of all other windows.
	 */
	bringtofront(): void;

	/**
	 * Scroll the window so that x and y are at the top-left corner.
	 * @param x
	 * @param y
	 */
	scrollto(x: number, y: number): void;

	/**
	 * Moves the window behind all other windows.
	 */
	sendtoback(): void;

	/**
	 * Set the global location of the window according to the coordinates passed in as arguments.
	 * @param left
	 * @param top
	 * @param bottom
	 * @param right
	 */
	setlocation(left: number, top: number, bottom: number, right: number): void;
}

/**
 * The SQLite object provides access to the SQLite database system (see http://www.sqlite.org for more information). A companion object, SQLResult, is required for most database operations.
 *
 * https://docs.cycling74.com/max8/vignettes/jssqliteobject
 */
declare class SQLite {
	/**
	 * No arguments are required for the instantiation of an SQLite object. However, all future calls to the database will be through this instance of the object.
	 */
	constructor();

	/**
	 * Open an SQLite-format file for database operations. The required filename argument is the file to access. The optional on_disk argument determines if the file should be memory-based (0) or disk-based (1). The optional must_exist argument, if non-zero, requires the file to exist to be opened. If zero, then a file will be created if it does not exist.
	 *
	 * This method returns an error code if unsuccessful, or a zero if the call results in an opened database.
	 * @param filename
	 * @param on_disk
	 * @param must_exist
	 */
	open(filename: string, on_disk: 0 | 1, must_exist: number): number;

	/**
	 * Closes a previously opened SQLite database.
	 */
	close(): void;

	/**
	 * Perform an SQL command on the database. This command must be in standard SQL language syntax, limited to the operations that SQLite supports. The result argument will return with an SQLResult object with any applicable results.
	 *
	 * The method returns an error code if unsuccessful, or a zero if the call results in a completed operation.
	 *
	 * Example:
	 * ```
	 * var res = new SQLResult;
	 * var rtn = sqlite.exec(“CREATE TABLE Persons (PersonID INTEGER, LastName TEXT, FirstName TEXT);”, res);
	 * ```
	 * @param command
	 * @param result
	 */
	exec(command: string, result: string): number;

	/**
	 * Start an SQL transaction on the database. This allows you to batch database updates, and to roll back sets of changes if they do not all complete. When you are done with batch updates, a call to endtransaction() should be executed.
	 */
	begintransaction(): void;

	/**
	 * Complete a transaction and flush all database writes to the file.
	 */
	endtransaction(): void;
}

/**
 * An SQLResult object is a container for results obtained in an SQLite.exec call. Not every exec() call will produce results, but any database query (SELECT in particular) will generate an SQLResult object even if the result is empty.
 *
 * https://docs.cycling74.com/max8/vignettes/jssqlresultobject
 */
declare class SQLResult {
	constructor();

	/**
	 * Returns the number of records that were returned in the SQLResult object.
	 */
	numrecords(): number;

	/**
	 * Returns the number of fields in the dataset returned in the SQLResult object.
	 */
	numfields(): number;

	/**
	 * Returns the name of a column at the requested index.
	 * @param index
	 */
	fieldname(index: number): string;

	/**
	 * Returns the value of the column identified by index, and in the record identified by record_no.
	 *
	 * Example:
	 * ```
	 * function print_everything(sqlres) {
	 *   var numrecs = sqlres.numrecords()
	 *   var numflds = sqlres.numfields()
	 *
	 *   var field_names = new Array()
	 *   for (var i = 0; i < numflds; i++) {
	 *     field_names[i] = sqlres.fieldname(i)
	 *   }
	 *
	 *   for (var i = 0; i < numrecs; i++) {
	 *     for (var j = 0; j < numflds; j++) {
	 *       post(
	 *         "Rec: ",
	 *         i,
	 *         " field ",
	 *         field_names[j],
	 *         " value ",
	 *         sqlres.value(j, i),
	 *         "\n"
	 *       )
	 *     }
	 *   }
	 * }
	 * ```
	 * @param index
	 * @param record_no
	 */
	value(index: number, record_no: number): number|string|(number|string)[];
}
