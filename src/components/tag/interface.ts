export const tagColors = ['bg-warning', 'bg-error', 'bg-secondary'] as const;
type ITagColor = (typeof tagColors)[number];

export interface ITag {
  label: string;
  color: ITagColor;
}
