module.exports = {
  extends: [
    '@youngcapital/eslint-config-yc-base',
    '@youngcapital/eslint-config-yc-react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/sort-prop-types': 1,
    'import/prefer-default-export': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'comma-dangle': 'always',
  },
};
