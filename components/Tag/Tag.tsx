import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

enum Modificators {
  primary,
  ghost,
  red,
  green,
  gray,
  small,
  medium,
  large,
}

type Modificator = keyof typeof Modificators;

type Props = {
  [key in Modificator]?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Tag: FC<Props> = ({ className, children, ...props }) => {
  const propEntries = Object.entries(props);
  const appliedModificators = propEntries.filter(
    ([key]) => key in Modificators
  );
  const restProps = propEntries.filter(([key]) => !(key in Modificators));

  return (
    <div
      className={cn(
        className,
        styles.tag,
        Object.fromEntries(
          appliedModificators.map(([key, value]) => [
            `${styles[`tag_${key}`]}`,
            value,
          ])
        )
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default memo(Tag);
