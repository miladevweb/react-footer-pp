import { UpArrow } from '../svg'
import styles from './index.module.css'

export function FloatButton() {
  return (
    <a href="#home">
      <div className={styles.container}>
        <UpArrow />
      </div>
    </a>
  )
}
