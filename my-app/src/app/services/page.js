

"use client";
import { IoIosArrowDown } from "react-icons/io";
import './services.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import NewNav from '../../components/Navbar/NewNav';
import Footer from '../../components/Footer/Footer';
import Sfinal from '../../components/servicesFinal/Sfinal';
import DentalCare from '../../components/DentalCare/DentalCare';

export default function Services() {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(min-width: 768px)");

    return(<div className="main_s">
    
        <NewNav/>

     
        <div className="k_head"><h1>Our Services</h1></div>
      <div className="arrow_b"><span><IoIosArrowDown/></span></div>
     
        
      {isMobile &&
        <div className="s_main_desc1">
            <div className="s_sub_head1">WHAT WE OFFER</div>
            <div className="s_main_head1"><h1>All Types of Dental Services </h1></div>
            <div className="s_para_head1"><p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p></div>
        </div>
    }
    {isMobile &&
        <div className="s_ourwork1">
        <div className="product_all_one">
        <div className="product1a">
                <div className="imag1"><img src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Dental</h4><h4>Implants</h4></div>
            </div>
            <div className="product2a">
                <div className="imag1"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Dental</h4><h4>Products</h4></div>
            </div>
            <div className="product3a">
                <div className="imag1"><img src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Cavity </h4><h4>Prevention</h4></div>
            </div>
            </div>
            <div className="product_all_two">
            <div className="product3a">
                <div className="imag1"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Root Canal</h4><h4>Treatement</h4></div>
            </div>
            <div className="product3a">
                <div className="imag1"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Tooth</h4><h4>Extraction</h4></div>
            </div>
            <div className="product3a">
                <div className="imag1"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc1"><h4>Teeth</h4><h4>Whitening</h4></div>
            </div>
            </div>
        

    </div>
    }
     

      {isTablet &&
        <div className="s_ourwork">
     
        <div className="s_main_desc">
            <div className="s_sub_head">WHAT WE OFFER</div>
            <div className="s_main_head"><h1>All Types of Dental Services </h1></div>
            <div className="s_para_head"><p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p></div>
        </div>
      
    
        <div className="product1">
                <div className="imag"><img src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Dental</h4><h4>Implants</h4></div>
            </div>
            <div className="product2">
                <div className="imag"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Dental</h4><h4>Products</h4></div>
            </div>
 
        

    </div>
}
{isTablet &&
    <div className="sub_work">
    <div className="product3">
                <div className="imag"><img src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Cavity </h4><h4>Prevention</h4></div>
            </div>
            <div className="product3">
                <div className="imag"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Root Canal</h4><h4>Treatement</h4></div>
            </div>
            <div className="product3">
                <div className="imag"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Tooth</h4><h4>Extraction</h4></div>
            </div>
            <div className="product3">
                <div className="imag"><img  src="https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/></div>
                <div className="desc"><h4>Teeth</h4><h4>Whitening</h4></div>
            </div>
    </div>  
}

  <DentalCare/>
  <Sfinal/>

        <Footer/>
</div>
    )
}
















   
    {/* <div className="s_services">
       <div className="s_section">
        <div className="service1">
<div className="sev_img">
    <img src="	https://thesmilist.com/wp-content/uploads/2021/03/clenaing.png" alt=""/>
</div>
<div className="sev_desc"><h3>Dental Cleanings</h3></div>
<div className="sev_para"><p>Regular dental cleanings and exams are done twice a year to make sure your smile is in its best shape.</p></div>
        </div>
        <div className="service1">
        <div className="sev_img">
    <img src="https://thesmilist.com/wp-content/uploads/2021/03/emergency.png" alt=""/>
</div>
<div className="sev_desc"><h3>Emergency Dentistry</h3></div>
<div className="sev_para"><p>Unexpected events happen in life so we’re here to help you.

</p></div>
            </div>
            <div className="service1">
            <div className="sev_img">
    <img src="	https://thesmilist.com/wp-content/uploads/2021/03/dentalcrowns.png" alt=""/>
</div>
<div className="sev_desc"><h3>Dental Crowns</h3></div>
<div className="sev_para"><p>Dental crowns are used to protect weak teeth, restore broken teeth and prevent cracked teeth from breaking further.</p></div>
            </div>
       </div>
       <div className="s_section">
        <div className="service1">
<div className="sev_img">
    <img src="		https://thesmilist.com/wp-content/uploads/2021/03/teethwhitening.png" alt=""/>
</div>
<div className="sev_desc"><h3>Teeth Whitening</h3></div>
<div className="sev_para"><p>Over time teeth may discolor and lose their glow.  Professional teeth whitening will brighten and whiten them.</p></div>
        </div>
        <div className="service1">
        <div className="sev_img">
    <img src="	https://thesmilist.com/wp-content/uploads/2021/03/prosthodontics.png" alt=""/>
</div>
<div className="sev_desc"><h3>Prosthodontics</h3></div>
<div className="sev_para"><p>The diagnosis, treatment, rehabilitation, and maintenance of your mouth’s function and appearance.</p></div>
            </div>
            <div className="service1">
            <div className="sev_img">
    <img src="https://thesmilist.com/wp-content/uploads/2021/03/traditionalbraces.png" alt=""/>
</div>
<div className="sev_desc"><h3>Traditional Braces</h3></div>
<div className="sev_para"><p>Traditional braces have proven to be an effective option to help correct and align teeth.</p></div>
            </div>
       </div>
       <div className="s_section">
        <div className="service1">
<div className="sev_img">
    <img src="	https://thesmilist.com/wp-content/uploads/2021/03/rootcanals.png" alt=""/>
</div>
<div className="sev_desc"><h3>Root Canals</h3></div>
<div className="sev_para"><p>Root canal treatments repair and save severely infected or damaged teeth and relieve the associated tooth pain.</p></div>
        </div>
        <div className="service1">
        <div className="sev_img">
    <img src="		https://thesmilist.com/wp-content/uploads/2021/03/dentalimplants.png" alt=""/>
</div>
<div className="sev_desc"><h3>Dental Implants</h3></div>
<div className="sev_para"><p>Replace your missing teeth with a dental implant.  They will look, feel, and function like normal and healthy teeth.</p></div>
            </div>
            <div className="service1">
            <div className="sev_img">
    <img src="https://thesmilist.com/wp-content/uploads/2021/03/oralmaxillofacialsurgery.png" alt=""/>
</div>
<div className="sev_desc"><h3>Oral & Maxillofacial Surgery</h3></div>
<div className="sev_para"><p>Oral & maxillofacial surgery treats diseases, injuries, and defects involving the mouth, jaw, neck and face.</p></div>
            </div>
       </div>
     
    </div> */}