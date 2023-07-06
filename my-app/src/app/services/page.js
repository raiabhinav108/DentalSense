

"use client";

import './services.css'

import NewNav from '../../components/Navbar/NewNav';
import Footer from '../../components/Footer/Footer';
import Transformation from '../../components/Transformation/Transformation';
import Sfinal from '../../components/servicesFinal/Sfinal';

export default function Services() {

    return(<div>
        <NewNav/>
        <div className="s_ourwork">
      
        <div className="s_main_desc">
            <div className="s_sub_head">WHAT WE OFFER</div>
            <div className="s_main_head"><h1>Our Dental Services </h1></div>
            <div className="s_para_head"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p></div>
            <div className="s_facilities">
          <div className="s_box1">
            <div className="s_box1_sub"><p><span className="s_tick">✔</span>Comprehensive Dentistry</p></div>
            <div className="s_box1_sub"><p><span className="s_tick">✔</span>Accepting New Patients</p></div>
            <div className="s_box1_sub"><p><span className="s_tick">✔</span>Direct Insurance Billing</p></div>
          </div>
          <div className="s_box2">
            <div className="s_box2_sub"><p><span className="s_tick">✔</span>Evening Appointments</p></div>
            <div className="s_box2_sub"><p><span className="s_tick">✔</span>DentalSense Guarantee</p></div>
            <div className="s_box1_sub"><p><span className="s_tick">✔</span>Advanced Technology</p></div>
          </div>
        
        </div>
        <div className="s_herobut2"><a href="/appointment">Get an Appointment </a></div>
      
  
        </div>
        <div className="s_main_image">
            <img src="https://thesmilist.com/wp-content/uploads/2021/03/servicebg.jpg" alt=""/>
        </div>


    </div>
    <div className="s_services">
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
     
    </div>

  <Transformation/>
  <Sfinal/>

        <Footer/>
</div>
    )
}