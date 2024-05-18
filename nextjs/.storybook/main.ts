import type { StorybookConfig } from "@storybook/nextjs";
import type { AddonOptionsWebpack} from '@storybook/addon-coverage'

const coverageOptions: AddonOptionsWebpack = {
  istanbul: {
    include: ["**/*"]
  }
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: '@storybook/addon-coverage',
      options: coverageOptions
    }
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
