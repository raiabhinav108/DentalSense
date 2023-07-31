"use client";
import Footer from "../../components/Footer/Footer";
import * as React from "react";
import NewNav from "../../components/Navbar/NewNav";
import styles from "./doctorsprofile.module.css";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { style } from "@mui/system";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ height: 8, borderRadius: 10 }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const DoctorsProfile = () => {
  const [progress, setProgress] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [progress3, setProgress3] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(80);
      setProgress2(90);
      setProgress3(88);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={styles.profileGrandparent}>
      <NewNav />
      <div className={styles.profileParent}>
        <div className={styles.profilesmallHead}>DENTIST</div>
        <div className={styles.profilesbigHead}>Dr Ravi Singh</div>
        <div className={styles.photoslidercontentgrp}>
          <div className={styles.doctorsimagediv}>
            <img
              className={styles.doctorsimage}
              src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2020/04/team-image7-copyright.jpg"
            ></img>
          </div>
          <div className={styles.progresscontentgrp}>
            <div className={styles.progressSlider}>
              <div className={styles.progressheading}>General Dentistry</div>
              <Box sx={{ width: "113%", marginBottom: "1em" }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
              <div className={styles.progressheading}>General Dentistry</div>
              <Box sx={{ width: "113%", marginBottom: "1em" }}>
                <LinearProgressWithLabel value={progress2} />
              </Box>
              <div className={styles.progressheading}>General Dentistry</div>
              <Box sx={{ width: "113%", height: "10", marginBottom: "1.5em" }}>
                <LinearProgressWithLabel value={progress3} />
              </Box>
            </div>
            <div className={styles.doctorsAbout}>
              qonsectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, sed do eiusm od tempor incididunt ut labore. Adipiscing
              elit, sed do eiusm consectetur aonsectetur sed do eiusm od tempor
              adipiscing elit, sed do eiusm od tempor.{" "}
              <div>
                Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
                elit, sed do eiusm od tempor incididunt ut labore. Consectetur
                adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do
                eiusm od tempor.
              </div>
            </div>
          </div>
          <div className={styles.doctorsocials}></div>
        </div>
      </div>
      <div style={{backgroundColor:"white"}}>
              <div className={styles.doctorsBiography}>
        <div className={styles.BiographySection}>
          <div className={styles.BiographyHead}>Biography</div>
          <div className={styles.BioPara}>
            <div>
              Ignissimos ducimus quin blandiitis praesentium voluptatem deleniti
            atque corrupti quos dolores et quas molestias excepturi. scint
            occaecatti gnissimus.
            </div>
            
          </div>
          <div className={styles.bioemail}>info@example.com</div>
          <div className={styles.biophone}>+1 840 841 25 69</div>
        </div>
        <div className={styles.BioFormsection}>
            <div className={styles.bioformHead}>Contact Form</div>
            <form>
              <p><input size="80" className={styles.bioinput} type="text" placeholder="👦🏻 Name"></input></p>
              <p><input size="80" className={styles.bioinput} type="text" placeholder="✉️ Email"></input></p>

            <textarea cols="80"  className={styles.bioinput} type="text" placeholder="🖊️ How can we help you? Feel free to get in touch!"></textarea><br></br>
            <button className={styles.BioformButt}>Get In Touch</button>
            </form>
            
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorsProfile;
