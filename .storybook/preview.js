/**
 * This is necessary to make tailwind work in storybook
 */
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import '../styles/globals.css';
import { primary, secondary } from '@root/fonts';
import ViewportProvider from 'src/contexts/viewport';
import IsDomReadyProvider from 'src/contexts/dom-ready';
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <IsDomReadyProvider>
        <ViewportProvider>
          <div
            className={`${primary.variable} ${secondary.variable} bg-white font-primary`}
          >
            <Story />
          </div>
        </ViewportProvider>
      </IsDomReadyProvider>
    );
  },
];
