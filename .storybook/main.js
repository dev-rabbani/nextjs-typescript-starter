const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath:
        '/Users/golamrabbani/work-station/dev/front-end/nextjs-typescript-starter/next.config.js',
    },
  },
  staticDirs: ['../public'],
  /**
   * When chromatic hosts your stories it will not have access
   * to your enviroment variables. So in chromatic, your storybook will have errors.
   * If any component needs environment variables to function properly include them here.
   *
   * Return an object of key-value pairs
   */
  env: () => ({}),
  docs: {
    autodocs: false,
  },
};
