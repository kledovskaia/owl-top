import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Heading.module.scss';
import * as headingVariants from './HeadingVariants';

enum Modificators {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

type Modificator = keyof typeof Modificators;

type Props = {
  [key in Modificator]?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const defaultHeadingType = 'h1';

const Heading: FC<Props> = ({ className, children, ...props }) => {
  const appliedModificators = Object.keys(props).filter(
    (key) => key in Modificators
  ) as Modificator[];
  const headingType = (appliedModificators.pop() ||
    defaultHeadingType) as keyof typeof headingVariants;
  const restProps = Object.entries(props).filter(
    ([key]) => !(key in Modificators)
  );

  const Component = headingVariants[headingType || 'h1'];

  console.log(headingType);

  return (
    <Component
      className={cn(
        className,
        styles.heading,
        styles[`heading_${headingType}`]
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
