// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default [
	{
		input: "TypeScript/ExampleJS.ts",
		output: {
			// dir: "JavaScript",
            file: "JavaScript/ExampleJS.js",
			format: "cjs",
			esModule: false,
		},
		plugins: [typescript()],
		treeshake: false,
	},
	{
		input: "TypeScript/ExampleJSUI.ts",
		output: {
			// dir: "JavaScript",
            file: "JavaScript/ExampleJSUI.js",
			format: "cjs",
			esModule: false,
		},
		plugins: [typescript()],
		treeshake: false,
	},
];
