"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwiperCore from 'swiper/core';
// Import Swiper styles
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useScroll,motion,useTransform } from "framer-motion";
import './brands.css'
import AOS from 'aos';
const Brands = () => {
  useEffect(()=>{
    AOS.init(
        {
            duration:1100,
        }
    );
},[])


   
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");

    
   
  return (
    <div className="fd_section">
    <div className="heading_main1">
       <h1>
        Happy reviews by</h1>
       <h1>happy patients✨</h1>
 
        </div>
       
        <div className="main_pagination" >
   
    <Swiper style={{ width: '100%'}}
    className="custom_swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isMobile ? 15 : 30}
      slidesPerView={isMobile ? 1.25 : 2.15}
        speed={1500}
        navigation={!isMobile}
      >


                         
 
             <SwiperSlide ><div className="imageparent1"><motion.div  className="sliderimages" >
         <div className="brand_pack">
          <div className="b_logo">
            <div className="b_img">
                <img src="images/nasdaq-light.svg" alt=""/>
            </div>

          </div>
          <div className="b_para">
            <h4>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h4>
          </div>
          <div className="b_client"><p>Josh Machiz, Chief Digital Officer</p></div>
          <div className="b_results"><p>Results</p></div>
          <hr/>
          <div className="b_sub">
            <div className="b_sub1">
            <div className="sub_name"><h4>Emmy Winning</h4></div>
            <div className="sub_para">Facebook Watch</div>
            </div>
            <div className="b_sub2">
            <div className="sub_name"><h4>Millions</h4></div>
            <div className="sub_para">of impressions generated per client per IPO
</div>
            </div>
          </div>
         </div>

        </motion.div></div></SwiperSlide>
        
        
        <SwiperSlide><div className="imageparent1"><motion.div  >
        <div className="brand_pack2">
          <div className="b_logo">
            <div style={{marginBottom:9+'px',marginTop:4+'px'}} className="b_img">
                <img src="images/microsoft-lg-light.svg" alt=""/>
            </div>

          </div>
          <div className="b_para">
            <h4>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h4>
          </div>
          <div className="b_client"><p>Carol Taylor, Director of Content Experience</p></div>
          <div className="b_results"><p>Results</p></div>
          <hr/>
          <div className="b_sub">
            <div className="b_sub1_m">
            <div className="sub_name"><h4>50% Faster</h4></div>
            <div className="sub_para_m1">launch of projects</div>
            </div>
            <div className="b_sub2_m">
            <div className="sub_name"><h4>10,000</h4></div>
            <div className="sub_para_m">projects completed in year 2022</div>
            </div>
          </div>
         </div>
        </motion.div></div></SwiperSlide>

        <SwiperSlide ><div className="imageparent1"><motion.div  className="sliderimages" >
         <div className="brand_pack">
          <div className="b_logo">
            <div className="b_img">
                <img src="images/nasdaq-light.svg" alt=""/>
            </div>

          </div>
          <div className="b_para">
            <h4>“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”</h4>
          </div>
          <div className="b_client"><p>Josh Machiz, Chief Digital Officer</p></div>
          <div className="b_results"><p>Results</p></div>
          <hr/>
          <div className="b_sub">
            <div className="b_sub1">
            <div className="sub_name"><h4>Emmy Winning</h4></div>
            <div className="sub_para">Facebook Watch program</div>
            </div>
            <div className="b_sub2">
            <div className="sub_name"><h4>Millions</h4></div>
            <div className="sub_para">of impressions generated per client per IPO
</div>
            </div>
          </div>
         </div>

        </motion.div></div></SwiperSlide>

      </Swiper>

    </div>



      </div>
  )
}

export default Brands