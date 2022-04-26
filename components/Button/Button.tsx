import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

enum Modificators {
  primary,
  ghost,
}

type Modificator = keyof typeof Modificators;

type Props = {
  [key in Modificator]?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({ className, children, ...props }) => {
  const propEntries = Object.entries(props);
  const appliedModificators = propEntries.filter(
    ([key]) => key in Modificators
  );
  const restProps = propEntries.filter(([key]) => !(key in Modificators));

  return (
    <button
      className={cn(
        className,
        styles.button,
        Object.fromEntries(
          appliedModificators.map(([key, value]) => [
            styles[`button_${key}`],
            value,
          ])
        )
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
