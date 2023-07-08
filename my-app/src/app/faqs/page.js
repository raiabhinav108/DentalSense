"use client";
import { useState } from 'react';
import Footer from '../../components/Footer/Footer'
import NewNav from '../../components/Navbar/NewNav'
import { IoIosArrowDown } from "react-icons/io";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faqs.css'
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px  ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  },
  backgroundColor:
    theme.palette.mode === "dark" ? "#f8f8f8" : "#f8f8f8"
})
);
const Faqs = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="main_faq">
      <NewNav/>
      <div className="f_head"><h1>FAQ Page</h1></div>
      <div className="arrow_b"><span><IoIosArrowDown/></span></div>
      <div className="Accordion_gl">
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
        className="accordion-summary"
   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <h4 >What can i expect on my first visit?</h4>
        </AccordionSummary>
        <AccordionDetails
        className="accordion-details"
    >
    
   
        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
     
        </AccordionDetails>
      </Accordion>
        <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary 
        className="accordion-summary2"
   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
<h4>What dental services do you provide?</h4> 
        </AccordionSummary>
        <AccordionDetails
        className="accordion-details"
    >
    
   
        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
     
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className="accordion-summary2"
   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Do you offer cosmetic dentistry?</h4>
        </AccordionSummary>
        <AccordionDetails
        className="accordion-details"
    >
    
   
        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
     
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary className="accordion-summary2"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
<h4>How often should i visit the dentist?</h4> 
        </AccordionSummary>
        <AccordionDetails
        className="accordion-details"
    >
    
   
        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
     
        </AccordionDetails>
      </Accordion>
  
        </div>
        <div className="faq_image">
        
          <img src="	https://tooth-fairy.ancorathemes.com/wp-content/uploads/elementor/thumbs/home1-image2-copyright-q1iv7tbct9gu0lwerykwdquxcjhilpw6hznhs5kyg4.jpg" alt="" />
        </div>
        <div className="s_sub_head">WHAT WE DO</div>
        <div className="s_ourwork">
      
      <div className="s_main_desc">
          
          <div className="s_main_head"><h1>Keeping Your Teeth Healthy </h1></div>
          <div className="s_para_head"><p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>

      <div className="s_herobut2"><a href="/appointment">Get an Appointment </a></div>
    

      </div>
      <div className="s_sub_desc">
      <div className="box1">
      <div className="content">
        <div className="content1">100+</div>
        <div className="content2">
          <div className="sub_cont">
            <div className="head"><h5>Clients Daily</h5></div>
            <div className="para"><p>Natus error sit voluptatem aperiam doloremque laudantium, totam rem.</p></div>
          </div>
        </div>
        </div>
      </div>
      <div className="box1">
      <div className="content">
        <div className="content1">2587</div>
        <div className="content2">
          <div className="sub_cont">
            <div className="head"><h5>Perfect Ratings</h5></div>
            <div className="para"><p>Natus error sit voluptatem aperiam doloremque laudantium, totam rem.</p></div>
          </div>
        </div>
        </div>
      </div>
      </div>


  </div>
      <Footer/>
    </div>
  )
}

export default Faqs