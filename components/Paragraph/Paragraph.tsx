import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Paragraph.module.scss';

enum Modificators {
  small,
  medium,
  large,
}

type Modificator = keyof typeof Modificators;

type Props = {
  [key in Modificator]?: boolean;
} & DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Paragraph: FC<Props> = ({ className, children, ...props }) => {
  const appliedModificators = Object.entries(props).filter(
    ([key]) => key in Modificators
  );
  const restProps = Object.entries(props).filter(
    ([key]) => !(key in Modificators)
  );

  return (
    <p
      className={cn(
        className,
        styles.paragraph,
        Object.fromEntries(
          appliedModificators.map(([key, value]) => [
            styles[`paragraph_${key}`],
            value,
          ])
        )
      )}
      {...restProps}
    >
      {children}
    </p>
  );
};

export default Paragraph;
