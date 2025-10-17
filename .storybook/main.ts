import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  viteFinal: async (config) => {
    if (config.base) {
      config.base = '/Customers-CRM/storybook/';
    }
    return config;
  },
};

export default config;

