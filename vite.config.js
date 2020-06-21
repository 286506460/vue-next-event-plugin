export default {
	root: 'example',
	alias: {
		'/@src/': require('path').resolve(__dirname, 'src'),
		'/@dist/': require('path').resolve(__dirname, 'dist'),
	},
	emitIndex: false,
	emitAssets: false,
	assetsDir: '',
}
