import styles from "./procedure.module.css"

const Procedure = () =>{
    return(
        <div className={styles.proceduregrandparent}>
            <div className={styles.procedureparent}>
                <div className={styles.approachmr}>Our Approach</div>
                <div className={styles.procedureheadmr}>The Procedure for a Check-up at SmilePure</div>
                <div className={styles.parentprocedure}>
                    <div className={styles.child1mr}>
                        <div className={styles.numberlinegrp}>
                            <div>01</div>
                            <hr></hr>
                        </div>
                        <div className={styles.definations}>
                            <div className={styles.defhead}>Book an Appointment</div>
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