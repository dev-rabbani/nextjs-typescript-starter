import Link from 'next/link';
import clsx from 'clsx';
import {
  BaseButtonProps,
  FillButtonProps,
  FillRedirectButtonProps,
  OutlineButtonProps,
  OutlineRedirectButtonProps,
} from './interface';
import IconStore from '@components/icons';
import Styles from './button.module.scss';

const btnWrapperClasses = clsx(
  `inline-flex focus:outline-none focus-visible:outline-none focus:shadow-none focus-visible:shadow-none`
);

const BaseButton = ({
  label,
  colorScheme,
  size,
  hoverColorScheme,
  iconName,
  iconIsLeft,
  isDisabled,
  variant,
}: BaseButtonProps) => {
  const btnClasses = clsx(
    'relative z-10 group/button overflow-hidden inline-flex items-center justify-center gap-3 cursor-pointer text-white hover:text-white leading-[1.1]',
    [Styles['button']],
    { [Styles['outline']]: variant === 'outline' },
    [Styles[colorScheme]],
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme },
    [Styles[size]],
    { 'flex-row-reverse': iconName !== undefined && iconIsLeft },
    { 'pointer-events-none opacity-60': isDisabled }
  );

  const btnBgClasses = clsx(
    'absolute z-[-1] inset-0 invisible opacity-0 group-hover/button:visible group-hover/button:opacity-100',
    [Styles['button-bg']]
  );

  return (
    <span className={btnClasses} aria-label={label}>
      <span>{label}</span>
      {iconName !== undefined && (
        <span className={clsx('leading-[1]', Styles['button-icon'])}>
          <IconStore iconName={iconName} />
        </span>
      )}
      <span className={btnBgClasses}></span>
    </span>
  );
};

const Button = (props: FillButtonProps | OutlineButtonProps) => {
  const btnWrapperWithNotAllowedClass = clsx(btnWrapperClasses, {
    'cursor-not-allowed': props.isDisabled,
  });
  return (
    <button
      type="button"
      className={btnWrapperWithNotAllowedClass}
      onClick={(e) => {
        if (props.isDisabled !== true) {
          props.clickHandler(e);
        }
      }}
    >
      <BaseButton {...props} />
    </button>
  );
};

Button.Redirect = (
  props: FillRedirectButtonProps | OutlineRedirectButtonProps
) => {
  return (
    <Link
      href={props.href}
      className={btnWrapperClasses}
      target={props.isOpenNewTab ? '_blank' : '_self'}
      passHref
    >
      <BaseButton {...props} />
    </Link>
  );
};

export default Button;
