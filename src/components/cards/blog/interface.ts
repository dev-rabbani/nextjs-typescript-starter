import { Dimension, IImage } from '@root/src/types';

export interface IBlogCard {
  slug: string;
  image: IImage;
  title: string;
}

export const BLOG_IMAGE_DIMENSION: Dimension = {
  width: 960,
  height: 720,
};
