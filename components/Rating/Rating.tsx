import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from 'react';
import StarIcon from '../icons/Star';
import cn from 'classnames';
import styles from './Rating.module.scss';

enum Modificators {
  editable,
}

type Modificator = keyof typeof Modificators;

type Props = {
  score?: number;
} & {
  [key in Modificator]?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Rating: FC<Props> = ({ className, score, ...props }) => {
  const propEntries = Object.entries(props);
  const appliedModificators = propEntries.filter(
    ([key]) => key in Modificators
  );
  const restProps = propEntries.filter(([key]) => !(key in Modificators));

  return (
    <div
      className={cn(
        className,
        styles.rating,
        Object.fromEntries(
          appliedModificators.map(([key, value]) => [
            styles[`rating_${key}`],
            value,
          ])
        )
      )}
      {...restProps}
    >
      {new Array(score).fill(null).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};

export default Rating;
