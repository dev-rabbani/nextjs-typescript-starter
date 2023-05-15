import clsx from 'clsx';
import { CardWrapperProps } from './interface';
import Styles from './card-wrapper.module.scss';

interface IProps extends CardWrapperProps {
  children: JSX.Element;
}

/**
 * @param {object}  IProps
 * @returns JSX.Element
 * @description This component is a card wrapper component which take a children component.
 */
const CardWrapper = ({
  children,
  cardBorderRadius,
  cardShadow,
  hoverCardShadow,
}: IProps) => {
  const cardClasses = clsx(
    'relative overflow-hidden h-auto',
    [Styles['card']],
    [Styles[cardShadow]],
    { [Styles[`hover-${hoverCardShadow}`]]: hoverCardShadow !== undefined },
    [Styles[cardBorderRadius]]
  );
  return (
    <div className={cardClasses} role="presentation">
      {children}
    </div>
  );
};

export default CardWrapper;
