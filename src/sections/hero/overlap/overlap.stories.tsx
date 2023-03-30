import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { heroWithOverlapContentProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {},

  decorators: [(Story) => <Story />],
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: { ...heroWithOverlapContentProps },
};
