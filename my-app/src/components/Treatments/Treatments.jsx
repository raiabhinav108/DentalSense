"use client";
import styles from  "./treatment.module.css"
import { useEffect } from "react";
import AOS from 'aos';
const Treatment = () =>{
    useEffect(()=>{
        AOS.init(
            {
                duration:1100,
            }
        );
    },[])
    return(
        <div className={styles.GrandParentTreatment}>
            <div className={styles.ParentTreatment}>
                <div className={styles.treatmentsmalltext}>Top Quality</div>
                <div className={styles.Headergroup}>
                    <div className={styles.bigheadertreatment}><h1>Dentistry for the Whole Family</h1></div>
                    <div className={styles.description}><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consequat.</p><br/><p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consequat.</p></div>
                </div>
                <div className={styles.Treatmentwithimage}>
                    <div className={styles.set1mr} data-aos="fade-up">
                        <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-4.png"></img>
                        <div><h2>Prevention of Cavities</h2></div>

                    </div>
                    
                    <div className={styles.set2mr} data-aos="fade-up" data-aos-delay="50">
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-3.png"></img>
                        <div><h2>Dental Implant Procedure</h2></div>

                    </div>
                   
                    <div className={styles.set3mr}  data-aos="fade-up" data-aos-delay="150">
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-5.png"></img>
                        <div className={styles.rct}><h2>Root Canal Treatment</h2></div>

                    </div>
                    
                    <div className={styles.set4mr}  data-aos="fade-up" data-aos-delay="200">
                    <img src="https://smilepure.thememove.com/wp-content/uploads/2019/06/service-icon-6.png"></img>
                        <div><h2>Regular Dental Check-Up</h2></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Treatment;