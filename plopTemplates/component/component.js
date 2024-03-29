// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a new React component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter the name of the component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/BuildingBlocks/{{pascalCase componentName}}/index.tsx',
        templateFile: './component.hbs',
      },
    ],
  })
}
