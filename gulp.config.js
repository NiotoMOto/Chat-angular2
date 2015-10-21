module.exports = function() {
	var config = {
		allTs: './app/**/*.ts',
		typings: './typings/**/*.d.ts',
		allCss: './app/**/*.css',
		allScss: './app/**/*.scss',
		allHtml: './app/**/*.html',
		bowerComonents: './bower_components/**/*',
		tsOutputPath: './app/'
	};

	return config;
};
