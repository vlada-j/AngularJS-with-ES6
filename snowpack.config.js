module.exports = {
	buildOptions: {
		out: 'public_html/'
	},
	mount: {
		source: '/'    // From 'source' folder to 'public_html' in path from build options ('public_html')
	},
	optimize: {
		entrypoints: ['main.js', 'vendors.js'], // 'auto' | string[] | ((options: {files: string[]}) => string[]);
		bundle: true,
		minify: true,
		clear: true,
		sourcemap: false, // boolean | 'external' | 'inline' | 'both';
		target: 'es2015', // 'es2020' | 'es2019' | 'es2018' | 'es2017'
	},
	plugins: [
		["@snowpack/plugin-sass", {
			compilerOptions: {
				style: "compressed",
				sourceMap: false,
			}
		}],
		["snowpack-plugin-inliner"],
	],
};
