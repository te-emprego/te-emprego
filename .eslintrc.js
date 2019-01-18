// https://eslint.org/docs/user-guide/configuring
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
        'alias': [
          ['App', './src'],
          ['Config', './src/Config'],
          ['Components', './src/Components'],
        ]
      },
    }
  },
  // add your custom rules here
  rules: {
    'linebreak-style': 'off',
    'no-console': isProd ? 'error' : 'off',
    'no-alert': isProd ? 'error' : 'off',
    'no-unused-expressions': 'off',
    'array-callback-return': 'off',
    'no-nested-ternary': 'off',
    'prefer-template': 'off',
    'curly': 'off',
    'max-len': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
