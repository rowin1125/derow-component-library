const path = require('path');

const basePath = path.join(__dirname, '../../../src');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the name?',
      default: 'FooBar',
    },
    {
      type: 'input',
      name: 'typeOfComponent',
      message: 'Which folder does this belong?',
      default: 'general || slices',
    },
    {
      type: 'input',
      name: 'storyFolder',
      message: 'Where should we display this component in Storybook?',
      default: 'form/Foobar',
    },
  ],
  actions: () => {
    let baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}');
    const templateBaseName = './component/';
    const fileExtensions = [
      ['component.test.js', 'test.js'],
      ['component.stories.js', 'stories.js'],
      ['component.js', 'js'],
      ['index.js', 'js'],
    ];

    const actions = [
      ...fileExtensions.map(fileExtension => {
        if (fileExtension[0] === 'index.js') {
          baseName = path.join(basePath, '{{typeOfComponent}}/{{pascalCase componentName}}/index');
        } else {
          baseName = path.join(
            basePath,
            '{{typeOfComponent}}/{{pascalCase componentName}}/{{pascalCase componentName}}',
          );
        }
        return {
          type: 'add',
          force: true,
          path: `${baseName}.${fileExtension[1]}`,
          templateFile: `${templateBaseName}${fileExtension[0]}.hbs`,
          abortOnFail: true,
        };
      }),
      {
        type: 'prettify',
        path: path.join(baseName, '/{{pascalCase name}}'),
      },
      {
        type: 'append',
        path: `${basePath}/{{typeOfComponent}}/index.js`,
        templateFile: './component/typeIndex.js.hbs',
      },
    ];

    return actions;
  },
};
