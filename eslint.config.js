import globals from 'globals'
import pluginJs from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    {
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            '@stylistic/js': stylisticJs,
        },
        rules: {
            'no-useless-assignment': 'error',
            '@stylistic/js/indent': ['error', 4],
        }
    },
    pluginJs.configs.recommended,
]
