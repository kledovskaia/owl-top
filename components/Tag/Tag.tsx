import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

const modificators = ['primary', 'ghost', 'green', 'red'];

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Tag: FC<Props> = ({ className, children, ...props }) => {
  const appliedModificators = Object.entries(props).filter(([key]) =>
    modificators.includes(key)
  );

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
      {...props}
    >
      {children}
    </div>
  );
};

export default memo(Tag);
