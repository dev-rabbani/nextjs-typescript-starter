import Link from 'next/link';
import { CtaButtonProps } from './interface';
import Styles from './cta-button.module.scss';
import clsx from 'clsx';

export default function CtaButton({
  href,
  label,
  colorScheme,
  isOpenNewTab,
  hoverColorScheme,
}: CtaButtonProps) {
  const btnClasses = clsx(
    'relative z-10 no-underline font-semibold text-base leading-[1.1]',
    [Styles['cta-button']],
    [Styles[colorScheme]],
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme }
  );

  return (
    <Link
      className={btnClasses}
      href={href}
      target={isOpenNewTab ? '_blank' : '_self'}
      passHref
    >
      {label}
    </Link>
  );
}
