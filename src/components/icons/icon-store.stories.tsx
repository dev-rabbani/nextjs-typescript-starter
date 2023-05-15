import Component from '.';
import { Meta, StoryObj } from '@storybook/react';
import { iconNames } from './interface';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    iconName: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

function IconsTemplate() {
  return (
    <div className="py-10">
      <div className="mx-auto w-full max-w-[1800px] px-4">
        {iconNames.map((flaticon, index) => (
          <div
            key={index}
            className="m-3 inline-block w-[9rem] rounded-10 bg-white p-3 text-center  align-top shadow-1"
          >
            <span className="grid place-items-center p-[10px] text-[3rem]/[1] text-success">
              <Component iconName={flaticon} />
            </span>
            <div className="px-2 py-4 text-xs font-bold text-black">
              {flaticon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Default: StoryObj<typeof Component> = {
  render: () => <IconsTemplate />,
};
