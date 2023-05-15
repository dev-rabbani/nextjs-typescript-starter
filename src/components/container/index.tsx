import clsx from 'clsx';
import { ContainerProps } from './interface';
import Styles from './container.module.css';

export default function Container({
  children,
  isFluid = false,
  isNoPadding = false,
}: ContainerProps) {
  const containerClasses = clsx(
    [Styles['container']],
    { [Styles['full-width']]: isFluid },
    { [Styles['no-padding']]: isNoPadding }
  );
  return (
    <div role="presentation" className={containerClasses}>
      {children}
    </div>
  );
}
