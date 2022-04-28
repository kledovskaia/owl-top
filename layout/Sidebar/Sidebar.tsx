import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useMenu } from '../../context/MenuContext';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Sidebar: FC<Props> = (props) => {
  const { menu } = useMenu();

  return (
    <div {...props}>
      <ul>
        {menu.map((firstLevel) => (
          <li key={firstLevel.firstCategory}>
            <h2>{firstLevel.firstCategoryName}</h2>
            <ul>
              {firstLevel.menu.map((secondLevel) => (
                <li key={secondLevel._id.secondCategory}>
                  <h3>{secondLevel._id.secondCategory}</h3>
                  <ul>
                    {secondLevel.pages.map((thirdLevel) => (
                      <li key={thirdLevel._id}>{thirdLevel.title}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
