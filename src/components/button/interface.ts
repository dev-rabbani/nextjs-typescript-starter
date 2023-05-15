import React from 'react';
import { IconNames } from 'src/components/icons/interface';

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface FillButtonProps {
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

export interface FillRedirectButtonProps
  extends Omit<FillButtonProps, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export interface OutlineButtonProps
  extends Omit<
    FillButtonProps,
    'colorScheme' | 'hoverColorScheme' | 'variant'
  > {
  colorScheme: OutlineButtonColorScheme;
  hoverColorScheme: OutlineButtonColorScheme;
  variant: 'outline';
}

export interface OutlineRedirectButtonProps
  extends Omit<OutlineButtonProps, 'clickHandler'> {
  href: string;
  isOpenNewTab: boolean;
}

export type BaseButtonProps =
  | Omit<OutlineButtonProps, 'clickHandler'>
  | Omit<FillButtonProps, 'clickHandler'>;

export const buttonColorSchemes = [
  'bg-primary-text-white',
  'bg-success-text-white',
  'bg-warning-text-black',
  'bg-danger-text-white',
] as const;
type ColorScheme = (typeof buttonColorSchemes)[number];

export const outlineButtonColorSchemes = [
  'bg-transparent-text-primary',
  'bg-transparent-text-warning',
] as const;
type OutlineButtonColorScheme = (typeof outlineButtonColorSchemes)[number];
