import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import Heading from "../Heading/Heading"
import Tag from "../Tag/Tag"
import styles from "./Skills.module.scss"
import cn from "classnames"

type Props = {
  items: Page["tags"]
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Skills: FC<Props> = ({ className, items }) => {
  return (
    <section className={cn(className, styles.skills)}>
      <Heading h4>Получаемые навыки</Heading>
      <ul className={styles.skills__itemsContainer}>
        {items.map((item) => (
          <li key={item} className={styles.skills__item}>
            <Tag primary>{item}</Tag>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
