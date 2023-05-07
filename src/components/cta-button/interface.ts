export interface ICtaButton {
  href: string;
  label: string;
  isOpenNewTab: boolean;
  colorScheme: ColorScheme;
  hoverColorScheme?: ColorScheme;
}

export const ctaButtonColorSchemes = ['primary', 'error', 'black'] as const;
type ColorScheme = (typeof ctaButtonColorSchemes)[number];
