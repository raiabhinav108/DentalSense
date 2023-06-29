import styles from "./getappointment.module.css"
const GetAppointment =()=>{
    return(
        <div className={styles.Getappointmentgrandparent}>
            <div className={styles.Getappointmentparent}>
                <div className={styles.textmr}>
                    <h4 className={styles.textmr}>Premium Quality,Advanced Dental Technologies with Flat Prices</h4>
                </div>
                <div className={styles.buttoncollectionmr}>
                    <div className={styles.findbutton}><div>FIND AN OFFICE</div></div>
                    <div className={styles.appointmentbuttonmr}><div>GET APPOINTMENT</div></div>
                </div>
            </div>
        </div>
    )
}
export default GetAppointment;