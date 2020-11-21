const path = require('path');

const basePath = path.join(__dirname, '../../../src'); // TODO: Add option to use core,  to

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
      name: 'storyFolder',
      message: 'Where should we display this component in Storybook?',
      default: 'example: form/Foobar',
    },
  ],
  actions: () => {
    let baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}');
    const templateBaseName = './component/component';
    const fileExtensions = ['tsx', 'test.tsx', 'stories.tsx', 'ts'];

    const actions = [
      ...fileExtensions.map((fileExtension) => {
        if (fileExtension === 'ts') {
          baseName = path.join(basePath, '{{pascalCase componentName}}/index');
        } else {
          baseName = path.join(basePath, '{{pascalCase componentName}}/{{pascalCase componentName}}');
        }
        return {
          type: 'add',
          force: true,
          path: `${baseName}.${fileExtension}`,
          templateFile: `${templateBaseName}.${fileExtension}.hbs`,
          abortOnFail: true,
        };
      }),
      {
        type: 'prettify',
        path: path.join(basePath, '{{pascalCase name}}'),
      },
    ];

    return actions;
  },
};
