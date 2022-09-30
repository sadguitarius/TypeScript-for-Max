module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: "TypeScript",
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		// 'plugin:@typescript-eslint/strict',
		"prettier",
	],
	rules: {
		"@typescript-eslint/no-unused-vars": "off",
		// '@typescript-eslint/no-non-null-assertion': "warn",
		// 'prettier/prettier': "warn",
		// '@typescript-eslint/no-unnecessary-condition': "warn",
		// '@typescript-eslint/require-await': "warn",
		// '@typescript-eslint/promise-function-async': "warn",
		// '@typescript-eslint/no-floating-promises': "warn",
		// '@typescript-eslint/switch-exhaustiveness-check': "warn",
		// '@typescript-eslint/no-unnecessary-type-assertion': "warn",
		// '@typescript-eslint/no-explicit-any': "warn",
		// '@typescript-eslint/no-inferrable-types':"warn"
	},
};