"use client";
import './ourwork.css'
import { useEffect } from "react";
import AOS from 'aos';
const OurWork = () => {
  useEffect(()=>{
    AOS.init(
        {
            duration:1100,
        }
    );
},[])
  return (
    <div className="ourwork">
        <div className="main_image">
            <img data-aos="fade-up" src="https://demo.templatic.com/medical/wp-content/uploads/2022/03/hp-sec-1.jpg" alt=""/>
        </div>
        <div className="main_desc">
            <div className="sub_head">Who We Are</div>
            <div className="main_head"><h1>Why Choose Dental Healthcare ?</h1></div>
            <div className="para_head"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p></div>
            <div className="facilities">
          <div className="box1">
            <div className="box1_sub"><p><span className="tick">✔</span>1000+ Healing Hands</p></div>
            <div className="box1_sub"><p><span className="tick">✔</span>Advanced Care Technology</p></div>
          </div>
          <div className="box2">
            <div className="box2_sub"><p><span className="tick">✔</span>1200+ Pharmacies</p></div>
            <div className="box2_sub"><p><span className="tick">✔</span>Best Clinical Outcomes</p></div>
          </div>
        </div>

        <hr/>
        <div className="intro_sec">
          <div className="sub_img">
            <img src="	https://demo.templatic.com/medical/wp-content/uploads/2022/03/user1.jpg" alt=""/>
          </div>
          <div className="sub_para">
            <h3>Silvia Copeland</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        </div>
    
    </div>
  )
}

export default OurWork