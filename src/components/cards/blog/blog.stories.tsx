import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/container';
import { blogCardProps } from './mock-data';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    title: { control: 'text' },
    image: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="section-padding-primary">
        <Container>
          <div className="max-w-[300px]">
            <Story />
          </div>
        </Container>
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: { ...blogCardProps },
};
