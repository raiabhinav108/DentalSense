"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwiperCore from 'swiper/core';
import ReactCompareImage from 'react-compare-image';
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useScroll,motion,useTransform } from "framer-motion";
import './testimonial.css'
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials= () => {
    const before =
    "	https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-6-before.jpg";
  const after =
    "https://sculptperio.com/wp-content/uploads/2022/11/gum-recession-case-6-after.jpg";

   
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");

    
   
  return (
  
<div className="parent-class">
       
        <div className="main_pagination1" >
 
        <Swiper 
    className="custom_swiper1"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isMobile ? 15 : 30}
      slidesPerView={1}
        speed={1500}
        navigation={!isMobile}
      >


                         
 
             <SwiperSlide ><div className="imageparent2"><motion.div  className="sliderimages" >
             <div className="entitle1">
             <div className="main_test1">
            <div className="tfont1"><RiDoubleQuotesL/></div> 
<div className="test_desc1"><p>Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places .</p></div>
<div className="intro_sec_t1">
          <div className="sub_img_t1">
            <img src="	https://demo.templatic.com/medical/wp-content/uploads/2022/03/user1.jpg" alt=""/>
          </div>
          <div className="sub_para_t1">
            <h3>Silvia Copeland</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        </div>

     
        </div>

        </motion.div></div></SwiperSlide>
        


      </Swiper>
   

    </div>
    <div className="parent-image">
      <ReactCompareImage style={{height:'300px'}}  leftImage={before} rightImage={after} />
</div>

</div>

    
  )
}

export default Testimonials