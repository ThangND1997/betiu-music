module.exports = {
	globDirectory: 'public',
	globPatterns: [
		'**/*.{html,zip,js,css,less,txt,yml,json,scss,svg,eot,ttf,woff,woff2,jpg,png,jpeg,mp3,mp4}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};