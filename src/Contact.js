import React from "react";
import {FaFacebook,FaInstagramSquare,FaLinkedin,FaWhatsapp} from 'react-icons/fa'

function Contact(){

    return(
        <div className="P1" >
            <footer className="projects" id="projects" style={{ backgroundColor:"orange"}}>

        <h2> Contact Me</h2>
      <div className="projects-container1">
          
          <div className="project-container project-card1">
              
              <h3 className="project-title">Email </h3>
              <p className="project-details">
                9156parth@gmail.com
         <br/>

          
        </p>
        <a href="mailto:9156parth@gmail.com"  className="project-link">Mail me</a>
    </div>
        


        
          
          <div className="project-container project-card1">
              
              <h3 className="project-title">Phone </h3>
              <p className="project-details">
             8668812426
         <br/>

          
        </p>
        <a href="tel:+918668812426"  className="project-link">Call me</a>
    </div>
        </div>
          
          
          
          
         
              <div className=" project-container  project-card1">

              <h3 className="project-title">socials</h3>
           
           <div style={{display:"flex" ,justifyContent:"space-between"}} >
           
            <div >
            
           <a href="https://www.facebook.com/parthucr/" className="me-4 link-grayish">
        <FaFacebook/>
      </a>
   </div>
    <div>
      <a href="https://www.instagram.com/parth_chandratre/" className="me-4 link-grayish">
        <FaInstagramSquare></FaInstagramSquare>
      </a>

    </div>

<div>

      <a href="https://web.whatsapp.com/" className="me-4 link-grayish">
       <FaWhatsapp></FaWhatsapp>
      </a>
</div>

    <div>
      <a href="https://www.linkedin.com/in/parthsarthi-chandratre/" className="me-4 link-grayish">
       <FaLinkedin></FaLinkedin>
      </a>

    </div>
     
              </div>
           
        
    </div>
        
          
          
          
            </footer>


        </div>
    )
}
export default Contact;