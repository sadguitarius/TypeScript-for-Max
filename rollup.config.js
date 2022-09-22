// rollup.config.js
import typescript from "@rollup/plugin-typescript";

const createConfig = (filename) => ({
	input: `TypeScript/${filename}.ts`,
	output: {
		file: `JavaScript/${filename}.js`,
		format: 'cjs',
		esModule: false,
	},
	plugins: [typescript()],
	treeshake: false,
});
  
const configs = [
	'ExampleJS',
	'ExampleJSUI',
	'ExampleModule'
].map((filename) => createConfig(filename));

export default configs