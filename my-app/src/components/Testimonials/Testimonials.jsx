import styles from "./Testimonials.module.css"

const Testimonials = () =>{
    return(
        <div>
            <div className={styles.carouselparent}>
                <div className={styles.carousel}></div>
                <div className={styles.beforeafter}></div>
            </div>
        </div>
    )
}
export default Testimonials;