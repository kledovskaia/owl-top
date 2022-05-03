import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Heading.module.scss';
import * as headingVariants from './HeadingVariants';

enum Modifications {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

type Modification = keyof typeof Modifications;

type Props = {
  handleClick?: () => void;
} & {
  [key in Modification]?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const defaultHeadingType = 'h1';

const Heading: FC<Props> = ({ className, children, handleClick, ...props }) => {
  const appliedModifications = Object.keys(props).filter(
    (key) => key in Modifications
  ) as Modification[];
  const headingType = (appliedModifications.pop() ||
    defaultHeadingType) as keyof typeof headingVariants;
  const restProps = Object.entries(props).filter(
    ([key]) => !(key in Modifications)
  );

  const Component = headingVariants[headingType];

  return (
    <Component
      className={cn(
        className,
        styles.heading,
        styles[`heading_${headingType}`]
      )}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
