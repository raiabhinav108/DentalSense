import Image from 'next/image'
import styles from './page.module.css'
import Welcome from '@/components/Welcome/Welcome'

export default function Home() {
  return (
    <main className={styles.main}>
        <Welcome/>
    </main>
  )
}
