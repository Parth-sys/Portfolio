import React from "react";
import pic from './icons/icons8-javascript.svg'
import pic2 from './icons/icons8-css3.svg'
import pic4 from "./icons/icons8-html-5.svg"
import logo from "./logo.svg"
 function Skills(){
     return(
        <>
        <section class="skills" id="skills">
        <h2 class="skill-header">My Top Skills</h2>
        
        <div class="skills-wrapper">
      <div class="first-set animate__animated animate__pulse">
          <img
           src={pic}
          alt=""
          loading="lazy"
          class="icon icon-card"
          />
          <img
          src={pic2}
          alt=""
          loading="lazy"
          class="icon icon-card"
          />
          <img
          src={pic4}
          alt=""
          loading="lazy"
          class="icon icon-card"
        />
    </div>

      <div class="second-set animate__animated animate__pulse">
          <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          alt=""
          loading="lazy"
          class="icon icon-card"
          />
          <img
          src={logo}
          alt=""
          loading="lazy"
          class="icon icon-card"
          />
          
      </div>
    </div>
  </section>
  </>
     )
 }
 export default Skills;