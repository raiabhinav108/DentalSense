import Footer from "../../components/Footer/Footer"
import NewNav from "../../components/Navbar/NewNav"
import styles from "./contact.module.css"
const Contact = () =>{
    return(
        <div>
            <NewNav/>
            <div className={styles.contactParent}>
                <div className={styles.ContactHeadmr}>Contacts</div>
                <div className={styles.ContactSubHead}>Great doctor if you need your family member to effective immediate assistance,emergency treatment, or simple consultation.</div>
                <div className={styles.contcardgrp}>
                    <div className={styles.leftsidewritten}>
                        <div className={styles.headWritten}>Have  <p style={{display:"inline",color:"#00BDE0"}}>questions?</p> Get in touch!</div>
                        <div className={styles.subheadWritten}>Give us a call or send an email if you are travelling to our clinic for an appointment, confirm the correct street address with your appointment staff ahead of time to avoid frustration, For more help eith specific addresses see below.</div>
                        <div className={styles.contadressset}>
                            <div className={styles.conaddset1}>
                                <div className={styles.set1head} style={{color:"#00BDE0"}}>Address 1</div>
                                <div>Kankarbagh chandmari road azad path gali no 2</div>
                                <div>9430591530</div>
                                <div>hello@gmail.com</div>
                            </div>
                            <div className={styles.conaddset2}>
                                <div className={styles.set2head} style={{color:"#00BDE0"}}>Address 2</div>
                                <div>Kankarbagh chandmari road azad path gali no 2</div>
                                <div>9430591530</div>
                                <div>hello@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightcontactform}>
                        <div className={styles.formsmallhead}>GET IN TOUCH</div>
                        <div className={styles.formbighead}>Contact Details</div>
                        <form className={styles.contform}>
                            <div className={styles.set1form}>
                                <input placeholder="Enter First Name"></input>
                                <input placeholder="Enter Last Name"></input>
                            </div>
                            <div className={styles.set1form}>
                                <input placeholder="Email" type="email"></input>
                                <input placeholder="Phone Number" type="text"></input>
                            </div>
                            <textarea cols="55" rows="8" placeholder="Message"></textarea>
                            <button className={styles.contsubmitbut}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact