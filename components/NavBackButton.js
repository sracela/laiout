import { useRouter } from 'next/router'
import styles from './NavBackButton.module.css'

export default function NavBackButton() {
    const router = useRouter()

    return (
        <button className={styles.button}  onClick={() => router.back()}>
          <span className={styles.circle} aria-hidden="true">
            <span className={`${styles.icon} ${styles.arrow}`}></span>
          </span>
        <span className={styles.buttonText}>Previous page</span>
        </button>
        ) 
}
   