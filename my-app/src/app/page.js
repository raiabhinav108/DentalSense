import Image from 'next/image'
import styles from './page.module.css'
import Welcome from '../components/Welcome/Welcome'
import Procedure from '../components/Procedure/Procedure'
import GetAppointment from '../components/GetAppointment/GetAppointment'
import RectangularCard from '../components/RectangularCard/Rectangularcard'
import NewNav from '../components/Navbar/NewNav'
import Testimonials from '../components/Testimonials/Testimonials'
import Treatment from '../components/Treatments/Treatments'
import FirstModule from '../components/FirstModule/FirstModule'
import Footer from '../components/Footer/Footer'
import OurWork from '../components/OurWork/OurWork'
import Brands from '../components/Brands/Brands'

export default function Home() {
  return (
    <main className={styles.main}>
    <NewNav/>
        <FirstModule/>
        <Welcome/>
        <OurWork/>
        <Treatment/>
        <Procedure/>
        <GetAppointment/>
        <RectangularCard/>
        <Brands/>
        <Footer/>
    </main>
  )
}
