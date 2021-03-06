module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-unused-vars': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        '_': true
    }
}