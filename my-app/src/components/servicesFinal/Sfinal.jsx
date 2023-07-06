import './sfinal.css'
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


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
const Sfinal = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
    <div className="s_final">
        <div className="main_sec">
            <div className="head"><h1>Reliable, Modern Dentistry</h1></div>
            <div className="Accordion_gl">
        <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
        className="accordion-summary"
   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography style={{  fontSize: 19+'px',
    lineHeight: 22+'px',
    fontWeight: 400,
    color:'#2B2B2D',paddingBottom:7+'px'}}>Adipiscing elit, sed do eiusmod?</Typography>
        </AccordionSummary>
        <AccordionDetails
        className="accordion-details"
    >
    
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em',
         '@media only and screen (max-width: 767px)': {
        width: '200px'},
         }}>
         Hub IT allows  technology computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className="k_border"
   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{  fontSize: 19+'px',paddingBottom:7+'px',
    lineHeight: 22+'px',
    fontWeight: 400,
    color:'#2B2B2D'}}>Consectetur adipiscing elit?</Typography>
        </AccordionSummary>
        <AccordionDetails  className="accordion-details">
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
           Hub IT  technology computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className="k_border"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{  fontSize: 19+'px',
    lineHeight: 22+'px',
    fontWeight: 400,
    color:'#2B2B2D' ,paddingBottom:7+'px'}}>Adipiscing elit nunc porta fringilla?</Typography>
        </AccordionSummary>
        <AccordionDetails  className="accordion-details">
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Hub IT allows your  computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
        </div>
        </div>
        <div className="img_sec">
            <div className="box1k">
                <div className="subhead">Patients</div>
                <div className="num">100+</div>
                <div className="para">Adipiscing elit, do eiusm.</div>
            </div>
            <div className="box2k">
            <div className="subhead">Doctors</div>
                <div className="num">12</div>
                <div className="para">Adipiscing elit, do eiusm.</div>
            </div>
        </div>


    </div>
    <div className="comp_sec">
    <div className="comp1">
<div className="logo"><img src="	https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/03/new-client-copyright-1.png" alt=""/></div>
<div className="logo"><img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/02/client-copyright7.png" alt=""/></div>
<div className="logo"><img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/02/client-copyright-3.png" alt=""/></div>
    </div>
    <div className="comp2">
    <div className="logo"><img src="	https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/02/client-copyright-6.png" alt=""/></div>
    <div className="logo"><img src="https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/02/client-copyright-2.png" alt=""/></div>
    <div className="logo"><img src="	https://tooth-fairy.ancorathemes.com/wp-content/uploads/2023/03/new-client-copyright-4.png" alt=""/></div>
        </div>
   </div>

    </>
  )
}

export default Sfinal