type ArrowIcons = 'Arrow Left' | 'Arrow Right';
type ChevronIcons = 'Chevron Left' | 'Chevron Right';
type VectorIcons = 'Error Vector' | 'No Data Vector';

export const iconNames = ['Train', 'Airplane', 'Rocket'] as const;
type Icons = (typeof iconNames)[number];

export type IconNames = Icons | ArrowIcons | ChevronIcons | VectorIcons;
