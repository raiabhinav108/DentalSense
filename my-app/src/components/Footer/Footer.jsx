import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-sec">
      
      <div className="footerparent">
      <p className="navbarbakchodi">1. Electric vehicle routing requires iPhone with iOS 15 or later and a
      compatible vehicle. </p>
      <p className="navbarbakchodi">2.Available on iPhone with A12 Bionic and later. </p>
      <p className="navbarbakchodi">3. Flyover is available in selected cities on iPhone 4s or later, iPad Pro, iPad (2nd
      generation or later), iPad Air or later, iPad mini or later, and iPod
      touch (5th generation or later). To experience Flyover as you move your
      device through space, you need iPhone 6s or later, iPad Pro, or iPad (5th
      generation or later). Cellular data charges may apply. </p>
      <p className="navbarbakchodi">4. Guides in Maps are available in selected cities. Some features may not be available for all
      countries or regions. View the complete list.</p>
        <div className="footer-header">
          <img src="images/Footer-Dental.svg" className="manik" alt="" />
          <hr />
        </div>
        <div className="main">
          <div className="col_main">
            <div clasName="col_sub1">
              <div className="logo-row">
                <div className="logo-des">
                  <h3>Office</h3>

                  <p>
                    Road no - 6, Waranga Colony beside New Bridge, Nagpur-800024
                  </p>
                  <a href="#">manikmaity.haker2003@gmail.com</a>
                  <p>+91 90545841512</p>
                </div>
                <div className="s_tags">
                  <span>
                    <AiOutlineInstagram />
                  </span>
                  <span>
                    <AiOutlineTwitter />
                  </span>
                  <span>
                    <BsFacebook />
                  </span>
                </div>
              </div>
            </div>

            <div className="col_sub2">
              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Quick Links</h3>
                </div>
                <div className="link-des">
                  <a href="#" className="footer-links">
                    Home
                  </a>
                  <a href="#" className="footer-links">
                    About Us
                  </a>
                  <a href="#" className="footer-links">
                    Our Mission
                  </a>
                  <a href="#" className="footer-links">
                    Galary
                  </a>
                  <a href="#" className="footer-links">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Our Services</h3>
                </div>

                <div className="link-des">
                  <a href="#" className="footer-links">
                    Orthopaedics
                  </a>
                  <a href="#" className="footer-links">
                    Spine Surgery
                  </a>
                  <a href="#" className="footer-links">
                    Cardiology
                  </a>
                  <a href="#" className="footer-links">
                    Robotic Surgery
                  </a>
                </div>
              </div>
            </div>
            <div className="col_sub3">
              <div className="link-row">
                <div className="footer-header_sub">
                  <h3>Active Hours</h3>
                </div>

                <div className="link-des">
                  <a href="#" className="footer-links">
                    Mon - Sat 24hr
                  </a>
                  <a href="#" className="footer-links">
                    Sunday - Closed
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="disclaimer">
          <div className="head_disc">
            <h3>Disclaimer</h3>
          </div>
          <div className="para_disc">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et corrupti quos dolores
            </p>
          </div>
        </div>

        <div className="copyright_main">
          <hr classname="f2_hr" />

          <div class="col-12">
            <span class="copyright">
              ©Copyright 2023-2026 Satvika Group. All Rights Reserved | Designed
              with Polardot.in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
