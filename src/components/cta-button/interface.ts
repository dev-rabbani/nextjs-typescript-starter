export interface CtaButtonProps {
  href: string;
  label: string;
  isOpenNewTab: boolean;
  colorScheme: ColorScheme;
  hoverColorScheme?: ColorScheme;
}

export const ctaButtonColorSchemes = ['primary', 'danger', 'black'] as const;
type ColorScheme = (typeof ctaButtonColorSchemes)[number];
