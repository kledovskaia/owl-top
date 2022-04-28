import { FC, SVGAttributes } from 'react';

type Props = SVGAttributes<SVGElement>;

export const Courses: FC<Props> = (props) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 15.4055C24 14.4901 23.4104 13.7169 22.5938 13.4257V6.14159L24 5.56179L12 0.74707L0 5.56179L12 10.3766L21.1875 6.70624V13.4257C20.3708 13.7169 19.7812 14.4901 19.7812 15.4055C19.7812 16.2437 20.2762 16.9631 20.986 17.3031L19.8177 20.8081L21.1511 21.253L21.8906 19.0345L22.6301 21.253L23.9636 20.8081L22.7953 17.3031C23.505 16.9632 24 16.2437 24 15.4055Z" />
    </svg>
  );
};
