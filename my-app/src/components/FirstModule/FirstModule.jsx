import styles from "./firstmodule.module.css"
const FirstModule = () =>{
    return(
        <div className={styles.firstgrand}>
            <div className={styles.firstparent}>
                <div className={styles.heroheaderparent}><h1  className={styles.heroheader}>The <img className={styles.lol} src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/elementor/thumbs/blog-image12-copyright-q1kyopwkl3fqyaxccb5nmmnt3mqx49w1njh27b2cw2.jpg"></img> <p className={styles.leading}>leading</p> Dentistry</h1></div>
                <div className={styles.herbuttonset}>

                    <div className={styles.herobut2}>Get an Appointment</div>
                </div>
            </div>
        </div>
    )
}
export default FirstModule;