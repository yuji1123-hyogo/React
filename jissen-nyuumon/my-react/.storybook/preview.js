import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // backgrounds: {
    //   values: [
    //     { name: 'ghostwhite', value: '#f8f8ff' },
    //     { name: 'aquamarine', value: '#7fffd4' },
    //     { name: 'coral', value: '#ff7f50' },
    //   ],
    // },
    // viewport: {
    //   viewports: INITIAL_VIEWPORTS,
    //   // defaultViewport: 'iphonex',
    // }
  },
};

export default preview;
