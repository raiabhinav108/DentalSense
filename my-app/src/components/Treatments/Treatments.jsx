import styles from  "./treatment.module.css"
 
const Treatment = () =>{
    return(
        <div className={styles.GrandParentTreatment}>
            <div className={styles.ParentTreatment}>
                <div className={styles.treatmentsmalltext}>Top Quality</div>
                <div className={styles.Headergroup}>
                    <div className={styles.bigheadertreatment}><h1>Dentistry for the Whole Family</h1></div>
                    <div className={styles.description}><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consequat.</p><br/><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consequat.</p></div>
                </div>
                <div className={styles.Treatmentwithimage}>
                    <div className={styles.set1mr}>
                        <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-4.png"></img>
                        <div><h2>Prevention of Cavities</h2></div>
                        <div><span></span><img src="images/right-arrow.png"></img></div>
                    </div>
                    <div className={styles.treatmentline}></div>
                    <div className={styles.set2mr}>
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-3.png"></img>
                        <div><h2>Dental Implant Procedure</h2></div>
                        <div><span></span><img src="images/right-arrow.png"></img></div>
                    </div>
                    <div className={styles.treatmentline2}></div>
                    <div className={styles.set3mr}>
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-5.png"></img>
                        <div><h2>Root Canal Treatment</h2></div>
                        <div><span></span><img className={styles.arrowtreat} src="images/right-arrow.png"></img></div>
                    </div>
                    <div className={styles.treatmentline3}></div>
                    <div className={styles.set4mr}>
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-6.png"></img>
                        <div><h2>Regular Dental Check-Up</h2></div>
                        <div><span></span><img src="images/right-arrow.png"></img></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Treatment;