import { CustomImageProps } from 'src/components/custom-image/interface';

/**
 * This is an example of a type that does not belong to a specfic component/section
 * but can be used by multiple components/sections
 */

export const sectionThemes = ['primary', 'secondary', 'black'] as const;
export type SectionTheme = (typeof sectionThemes)[number];

export interface Dimension {
  width: number;
  height: number;
}

export type IImage = Omit<CustomImageProps, 'width' | 'height'>;

export interface ILink {
  href: string;
  label: string;
  isOpenNewTab: boolean;
}

export type ColumnNumber = number;
