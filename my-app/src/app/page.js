import Image from 'next/image'
import styles from './page.module.css'
import Welcome from '@/components/Welcome/Welcome'
import Procedure from '@/components/Procedure/Procedure'

export default function Home() {
  return (
    <main className={styles.main}>
        <Welcome/>
        <Procedure/>
    </main>
  )
}
