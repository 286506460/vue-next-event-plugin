import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
	input: 'src/index.ts',
	plugins: [
		typescript({
			// declarationDir: 'src',
			// useTsconfigDeclarationDir: true,
		}),
		babel({
			exclude: 'node_modules/**',
			extensions: ['.js', '.ts'],
		}),
		terser(),
	],
	output: {
		name: 'VueNextPluginEvent',
		file: 'dist/vue-next-event-plugin.js',
		format: 'es',
		sourcemap: true,
	},
}
