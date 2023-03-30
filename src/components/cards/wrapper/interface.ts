export interface ICardWrapper {
  cardShadow: CardShadow;
  hoverCardShadow?: CardShadow;
  cardBorderRadius: CardBorderRadius;
}

export const cardWrapperShadow = ['shadow-one', 'shadow-none'] as const;
type CardShadow = (typeof cardWrapperShadow)[number];

export const cardWrapperBorderRadius = [
  'radius-one',
  'radius-two',
  'radius-none',
] as const;
type CardBorderRadius = (typeof cardWrapperBorderRadius)[number];
