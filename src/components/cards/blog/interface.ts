import { Dimension, ImageProps } from '@root/src/types';

export interface BlogCardProps {
  slug: string;
  image: ImageProps;
  title: string;
}

export const BLOG_IMAGE_DIMENSION: Dimension = {
  width: 960,
  height: 720,
};
