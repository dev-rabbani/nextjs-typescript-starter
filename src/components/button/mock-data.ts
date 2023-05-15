import {
  FillButtonProps,
  FillRedirectButtonProps,
  OutlineButtonProps,
  OutlineRedirectButtonProps,
} from './interface';

export const buttonProps: FillButtonProps = {
  label: 'Button',
  colorScheme: 'bg-primary-text-white',
  hoverColorScheme: 'bg-danger-text-white',
  size: 'lg',
  clickHandler: () => {},
  variant: 'fill',
};

export const redirectButtonProps: FillRedirectButtonProps = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Redirect Button',
  colorScheme: 'bg-primary-text-white',
  hoverColorScheme: 'bg-danger-text-white',
  size: 'lg',
  variant: 'fill',
};

export const outlineButtonProps: OutlineButtonProps = {
  label: 'Outline Button',
  colorScheme: 'bg-transparent-text-primary',
  hoverColorScheme: 'bg-transparent-text-warning',
  size: 'lg',
  clickHandler: () => {},
  variant: 'outline',
};

export const redirectOutlineButtonProps: OutlineRedirectButtonProps = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Outline Redirect Button',
  colorScheme: 'bg-transparent-text-primary',
  hoverColorScheme: 'bg-transparent-text-warning',
  size: 'lg',
  variant: 'outline',
};
