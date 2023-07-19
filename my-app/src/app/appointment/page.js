"use client";
import { useForm, ValidationError } from '@formspree/react';
import styles from "./appointment.module.css"
import Image from 'next/image'
import NewNav from '../../components/Navbar/NewNav';
import Footer from '../../components/Footer/Footer';
import "./newpage.css"
export default function Appointment() {
    
        const [state, handleSubmit] = useForm("mvojpeep");
        if (state.succeeded) {
            return <div className="conf-modal center success">
            <div className="title-icon">
              <img src="images/correct.png" />
            </div>
            <div className="title-text"><h1>Success!</h1></div>
            <p>Your order has been placed. Press "Back" button to jump back to home page. </p>
            <div className="modal-footer">
             <a href='./'> <div className="conf-but green" onClick="">BACK</div></a>

            </div>
          </div>;
        }
    return(
        <div className={styles.denbody}>
            <NewNav/>
            <div className={styles.AppointmentParent}>
                <div className={styles.headandcardcollection}>
                    <div className={styles.apphead}><h1>Make an Appointment</h1></div>
                    <div className={styles.appsubhead} >Let us know your problem, make an appointment and receive the best advice from specialists in the field.</div>
                    <div className={styles.appcard}>
                        <div className={styles.accleftphoto} ><Image src="/images/dental.png" className={styles.cphoto} width={429} height={530} style={{borderRadius:"10px"}}></Image></div>
                        <div className={styles.accform}>
                            <div className={styles.appformhead}>Book <p style={{display:"inline",color:"#00BDE0"}}>Appointment</p>
                            </div>

                            <form className={styles.appform} onSubmit={handleSubmit} action="https://formspree.io/f/mvojpeep" method='POST'>
                                <div className={styles.appgroupoftwo}>
                                <div className={styles.appinnernameele}>
                                <div ><label for="name">Full Name</label></div>
                                <input type="text" id="name" placeholder="eg. John Doe" name='name'></input>
                                </div>
                                <div className={styles.appinnerphonele}>
                                <div><label for="phone">Your Phone</label></div>
                                <input type="text" id="phone" placeholder="Phone" name='phone'></input>
                                </div>
                               
                                </div>
                                <div className={styles.appgroupoftwo}>
                                <div>
                                <div><label for="email">Your Email</label></div>
                                <input type="email" id="email" placeholder="john@gmail.com" name='email'></input>
                                </div>
                                <div>
                                <div><label for="date">Select Date</label></div>
                                <input type="text" id="date" placeholder="dd/mm/yy" name='date'></input>
                                </div>
                                
                                </div>
                                <div className={styles.contbutgrp}style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <button className={styles.appbut} type="submit" disabled={state.submitting}>GET APPOINTMENT</button>
                                <div style={{paddingLeft:"0.5em",paddingRight:"0.5em"}}>OR</div>
                                <button className={styles.appbut2} type="submit" disabled={state.submitting}>APPOINTMENT ON WHATSAPP</button>
                                </div>
                               
                                <div className={styles.appsmalltext}><p style={{display:"inline",color:"red",fontSize:"15px"}}>* </p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                            </form>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

