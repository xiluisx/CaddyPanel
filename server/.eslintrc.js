module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: 'standard-with-typescript',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		project: ['tsconfig.json']
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off'
	},
	ignorePatterns: [
		'dist/'
	]
}
