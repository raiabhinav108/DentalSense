"use client";
import styles from "./welcome.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import { useEffect } from "react";

const Welcome = () =>{
    useEffect(()=>{
        AOS.init(
            {
                duration:1100,
            }
        );
    },[])
    
    return(
        <div>
        
            <div className={styles.Welcomeparentmr}>
                <div className={styles.leftmr} >
                    <img className={styles.welcomeimagemr} data-aos="fade-up" src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/elementor/thumbs/home1-image1-copyright-q1iv4f3n1e18dm76q6lv97hqgqewi8wwy1fcp8s9hw.jpg" width="520px" height="642px" style={{borderRadius:"10px"}}></img>
                    <div className={styles.overlappingtextmr} ><h3>Impeccable quality, great service</h3></div>
                </div>
                <div className={styles.rightmr}>
                    <div className={styles.aboveheadmr}>WELCOME TO DENTAL SENSE</div>
                    <div className={styles.Headmr}><h1>The Pinnacle of Dental Care</h1></div>
                    <div className={styles.subheadmr}>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</div>
                    <div className={styles.listmr}>
                        <div className={styles.item1mr}><p className={styles.p1}>01</p><p className={styles.p2}>Cosmetic Destistry</p></div>
                        <hr shade ></hr>
                        <div className={styles.item2mr}><p className={styles.p1}>02</p><p className={styles.p2}>Restorative Denstistry</p></div>
                        <div className={styles.buttonmr}>Our Services</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;