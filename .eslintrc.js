module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {},
  extends: [
    // The order here is important because of overwrites!
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // keep this entry last to avoid rule clashes
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // External packages
          ['^@?\\w'],
          // Internal packages and parent packages
          [
            '^(@|components|constants|hooks|layouts|modules|pages|queries|styles|types|utils|public|src)(/.*|$)',
            '^',
            '^\\.',
          ],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    /* ESlint rules not included in eslint:recommended by default */
    'no-duplicate-imports': 'warn',
    'no-unneeded-ternary': 'error', // Disallow a === b ? true : false
    'no-plusplus': 'error', // Disallow a[i++] = x, loops should be replaced by for..of or forEach
    camelcase: 'error', // Disallow const my_variable_one = 5;
    'no-nested-ternary': 'error', // Disallow a ? b : c ? e : 1,
    'no-else-return': 'warn', // Disallow if (x) { return <div />; } else { code(); } - else block redundant
    // Disallow import of the whole package, use 'import module_name from 'package/module' instead'
    'no-restricted-imports': ['error', { paths: ['lodash', 'braintree-web', 'next/link'] }],

    // TODO: It's a known issue with next.js 11.1.2 that eslint shows a false positive that Document should
    // not be imported out of pages/_document.tsx file.
    // https://github.com/vercel/next.js/issues/28596
    // We need to remove this line once it is fixed in next.js
    '@next/next/no-document-import-in-page': 'off',
  },
};
