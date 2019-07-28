import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

const config = {
    input: 'src/reactLoaderPlaceholder.js',
    external: ['react', 'styled-components'],
    output: {
        format: 'umd',
        name: 'react-loader-placeholder',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({exclude: "node_modules/**"}),
        terser(),
        postcss({plugins: []})
    ]
}
export default config
