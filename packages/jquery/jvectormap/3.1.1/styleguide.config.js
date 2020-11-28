module.exports = {
  skipComponentsWithoutExample: true,
  getExampleFilename: componentPath => componentPath.replace(/\.[jt]sx?$/, '.md'),
  exampleMode: 'expand',
  sections: [
    {
      name: 'jvectormap-next',
      content: 'jvectormap-next/README.md',
    },
    {
      name: 'react-vectormap',
      components: 'react-vectormap/src/*.{js,jsx,ts,tsx}',
    },
  ],
  styleguideDir: 'docs'
};
