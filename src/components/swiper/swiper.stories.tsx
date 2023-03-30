import Component, { CarouselItem } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { swiperPreviewimages, swiperCommonOptions } from './mock-data';
import Image from 'next/image';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    isCenter: {
      table: {
        disable: true,
      },
    },
    haveOffset: {
      table: {
        disable: true,
      },
    },
    pauseOnHover: {
      table: {
        disable: true,
      },
    },
    isLoop: {
      table: {
        disable: true,
      },
    },
    autoPlay: {
      table: {
        disable: true,
      },
    },
    spaceBetween: {
      table: {
        disable: true,
      },
    },
    showItems: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  args: { ...swiperCommonOptions },
  render: (args) => (
    <div className="section-padding-primary">
      <Component {...args}>
        {swiperPreviewimages.map((swiperPreviewimage, index) => (
          <CarouselItem key={index}>
            <Image
              src={swiperPreviewimage}
              alt={`image-${index}`}
              width={960}
              height={720}
            />
          </CarouselItem>
        ))}
      </Component>
    </div>
  ),
};
