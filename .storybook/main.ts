const config = {
  staticDirs: ['../public'],
  stories: ['..src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-onboarding',

    '@storybook/addon-essentials',

  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
  }
}
export default config
