module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'airbnb-base'],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/attribute-hyphenation': ['error', 'never', {}],
    'no-param-reassign': [0, { props: false }],
  },
};
