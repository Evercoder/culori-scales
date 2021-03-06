const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const definition = require("../package.json");

const babel_configuration = () => babel({
	babelrc: false,
	presets: ["es2015-rollup"],
	plugins: ["transform-object-rest-spread"]
});
const bundles = [

	// UMD
	{
		input: "index.js",
		output: {
			extend: true,
			file: `build/${definition.name}.js`,
			format: 'umd',
			globals: Object.keys(definition.dependencies || {}).reduce((p, v) => (p[v] = "culori", p), {}),
			name: 'culori',
		},
		plugins: [ babel_configuration() ]
	},

	// UMD, minified
	{
		input: "index.js",
		output: {
			extend: true,
			file: `build/${definition.name}.min.js`,
			format: 'umd',
			globals: Object.keys(definition.dependencies || {}).reduce((p, v) => (p[v] = "culori", p), {}),
			name: 'culori',
		},
		plugins: [ babel_configuration(), uglify() ]
	},

	// ES6 modules
	{
		input: 'index.js',
		output: {
			file: 'build/index.js',
			format: 'es'
		},
		plugins: [ babel_configuration() ]
	}

];

bundles.reduce(
	(promise, config) => 
		promise.then(() => 
			rollup.rollup(config).then(bundle => bundle.write(config.output))
		), 
	Promise.resolve()
).then(() => {
	console.log('🌈');
});