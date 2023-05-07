import React from 'react';
import { IconNames } from 'src/components/icons/interface';

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface IFillButton {
  label: string;
  colorScheme: ColorScheme;
  size: Size;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  hoverColorScheme?: ColorScheme;
  iconName?: IconNames;
  iconIsLeft?: boolean;
  isDisabled?: boolean;
  variant: 'fill';
}

export interface IFillRedirectButton extends Omit<IFillButton, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export interface IOutlineButton
  extends Omit<IFillButton, 'colorScheme' | 'hoverColorScheme' | 'variant'> {
  colorScheme: OutlineButtonColorScheme;
  hoverColorScheme: OutlineButtonColorScheme;
  variant: 'outline';
}

export interface IOutlineRedirectButton
  extends Omit<IOutlineButton, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export type IBaseButton =
  | Omit<IOutlineButton, 'clickHandler'>
  | Omit<IFillButton, 'clickHandler'>;

export const buttonColorSchemes = [
  'bg-primary-text-white',
  'bg-success-text-white',
  'bg-warning-text-black',
  'bg-error-text-white',
] as const;
type ColorScheme = (typeof buttonColorSchemes)[number];

export const outlineButtonColorSchemes = [
  'bg-transparent-text-primary',
  'bg-transparent-text-warning',
] as const;
type OutlineButtonColorScheme = (typeof outlineButtonColorSchemes)[number];
