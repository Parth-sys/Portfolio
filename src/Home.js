
import React from "react";
import pic from "./icons/icons8-github.gif"
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

function Home(){
    return(

   <>

      <main class="container" >
      <p>Hello 👋 I'm</p>
      <section class="animation">
        <div class="first"><div>Parthsarthi Chandratre</div></div>
        <div class="second"><div>Full Stack Developer</div></div>
       
      </section>


      <div class="socials">
      <a href="https://github.com/Parth-sys" target="_blan"
      ><img src={pic} alt="Github" class="socicon"
      /></a>
    </div>

 <div>
  </div> 

 




     


    </main>
 <About></About>

 <Skills></Skills>
 <Project/>
      </>

    )
}
export default Home;