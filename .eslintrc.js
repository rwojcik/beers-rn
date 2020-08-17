module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-react', 'react-hooks', 'only-warn'],
    extends: [
        '@react-native-community',
        'prettier/@typescript-eslint',
        'prettier/react',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
        {
            files: ['*.config.js', '*rc.js'],
            env: {
                node: true,
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/ignore': ['react-native'],
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-prototype-builtins': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/display-name': 'error',
        'import/no-unresolved': 'error',
        'import/no-deprecated': 'error',
        'no-else-return': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-target-blank': 'error',
        curly: 'error',
        'no-unreachable': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        eqeqeq: ['error', 'smart'],
    },
};
