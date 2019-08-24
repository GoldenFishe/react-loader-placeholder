import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const config = {
    input: 'src/reactLoaderPlaceholder.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'react-loader-placeholder',
        globals: {
            react: "React",
            "styled-components": "styled"
        }
    },
    plugins: [
        resolve({preferBuiltins: true}),
        babel({exclude: "node_modules/**"}),
        commonjs({
            namedExports: {'react-is': [' isElement', 'isValidElementType', 'ForwardRef']}
        }),
        terser(),
        postcss({plugins: []})
    ]
};
export default config
