import React from "react";
import pic from './icons/wfh_1.svg'
function About(){
    return(
        <div className="about">
         <section class="hero" id="#about">
        <img
        src={pic}
        alt="jane-doe"
        loading="lazy"
        class="hero-img"
        />
        <div class="bio animate__animated animate__shakeX">
            <h2 class="bio-title">About Me</h2>
            <p class="bio-text">
               Hi I'm Full Stack Developer and Computer Engineer from India.
               I love working on new technologies and looking for new opportunities
               to learn and grow.I'm also a freelancer and open for new projects.
               I have very keen interest in Apps and websites development.
               
            </p>
        </div>
    </section>
        </div>
    )
}
export default About;