module.exports = {
  extends: [
    '@youngcapital/eslint-config-yc-base',
    '@youngcapital/eslint-config-yc-react'
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off'
  }
};
