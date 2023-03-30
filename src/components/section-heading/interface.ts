export const sectionHeadingColorschemes = [
  'primary',
  'secondary',
  'black',
] as const;
type Colorscheme = (typeof sectionHeadingColorschemes)[number];

export interface ISectionHeading {
  title: string;
  isCenter: boolean;
  colorScheme: Colorscheme;
  hasBottomSpacing: boolean;
  subtitle?: string;
  description?: string;
}
