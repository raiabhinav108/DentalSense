import styles from "./dentalimplants.module.css"
import Footer from "../../components/Footer/Footer";
import NewNav from "../../components/Navbar/NewNav";


const DentalImplants = () =>{
    return(
        <div>
            <NewNav/>
            <div className={styles.parentimplant}>
                <div className={styles.implantmainhead}>Dental Implants</div>
                <div className={styles.stickygrp}>
                    <div className={styles.implantsleft}>
                        <img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2020/04/service-image1-copyright.jpg"></img>
                        <div className={styles.implantpara1}>
                        Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.
                        </div>
                        <div className={styles.implantsubhead}>Sed ut perspiciatis unde omnis iste natus et</div>
                        <div className={styles.implantdescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        <p className={styles.implantsecondpara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et acc</p></div>
                        <div className={styles.implantsimageset}>
                            <img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2020/04/blog-image13-copyright.jpg"></img>
                            <img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/02/about-image2-copyright.jpg"></img>
                        </div>
                        <div className={styles.implantsmall}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div className={styles.implantsright}>
                        <div className={styles.leftformhead}>Get in touch</div>
                        <form>
                            <input type="text" placeholder="Name"></input>
                            <input type="text" placeholder="Email"></input>
                            <input type="text" placeholder="Message"></input>
                            <button>Get in Touch</button>
                        </form>
                        <div className={styles.Implantscontactinfo}>
                            <div className={styles.implantscontactinfp}>Contact Info</div>
                            <div className={styles.implantsaddresspart}>
                            <div>Germany - <br/>785 15h Street, Office 478 Berlin, De 81566 </div>
                            <div className={styles.implantemail}>info@email.com</div>
                            <div className={styles.implantphone}>+91 9430591530</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default DentalImplants;