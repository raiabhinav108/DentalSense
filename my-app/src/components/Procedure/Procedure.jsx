"use client";
import styles from "./procedure.module.css"
import { useEffect } from "react";
import AOS from 'aos';
const Procedure = () =>{
    useEffect(()=>{
        AOS.init(
            {
                duration:1100,
            }
        );
    },[])
    return(
        <div className={styles.proceduregrandparent}>
            <div className={styles.procedureparent}>
                <div className={styles.approachmr}>Our Approach</div>
                <div className={styles.procedureheadmr}><h3>The Procedure for a Check-up at SmilePure</h3></div>
                <div className={styles.parentprocedure}>
                    <div className={styles.child1mr}>
                        <div className={styles.numberlinegrp}>
                            <div className={styles.numbersdivmr}>01</div>
                            <div style={{height:"1px",backgroundColor:"black",width:"300px",backgroundColor:"#abb8c3"}}></div>
                        </div>
                        <div className={styles.definations}  data-aos="fade-up">
                            <div className={styles.defhead}>01.Book an Appointment</div>
                            <div className={styles.defabout}>Filling the form for an appointment 
                                                            to  have our specialists evaluate your overall
                                                            health and oral hygine.</div>
                        </div>
                    </div>
                    <div className={styles.child1mr}>
                        <div className={styles.numberlinegrp}>
                            <div className={styles.numbersdivmr}>02</div>
                            <div style={{height:"1px",backgroundColor:"black",width:"300px",backgroundColor:"#abb8c3"}}></div>
                        </div>
                        <div className={styles.definations} data-aos="fade-up" data-aos-delay="100">
                            <div className={styles.defhead} >02.Get Confirmation</div>
                            <div className={styles.defabout}>Filling the form for an appointment 
                                                            to  have our specialists evaluate your overall
                                                            health and oral hygine.</div>
                        </div>
                    </div>
                    <div className={styles.child1mr}>
                        <div className={styles.numberlinegrp}>
                            <div className={styles.numbersdivmr}>03</div>
                            <div style={{height:"1px",backgroundColor:"black",width:"300px",backgroundColor:"#abb8c3"}}></div>
                        </div>
                        <div className={styles.definations} data-aos="fade-up" data-aos-delay="200">
                            <div className={styles.defhead}>03.Get an Appointment</div>
                            <div className={styles.defabout}>Filling the form for an appointment 
                                                            to  have our specialists evaluate your overall
                                                            health and oral hygine.</div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Procedure;