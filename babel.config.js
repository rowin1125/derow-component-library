const commonPresets = ['@babel/preset-react'];

module.exports = {
  env: {
    test: {
      /* jest requires to be modules => true */
      /* The following plugin makes @storybook/addon-storyshots works */
      plugins: ['require-context-hook', '@babel/plugin-transform-runtime'],
      presets: [['@babel/preset-env'], ...commonPresets]
    }
  }
};
