
import './App.css';

import About from './About';
import Project from './Project';
import Home from './Home';
import Contact from './Contact';
import React from 'react';
import Skills from './Skills';
import { Link, Route,Routes } from "react-router-dom";
import 'bootstrap'


function App() {

return(
  <div >
   <nav>
     <h1>Parthsarthi Chandratre</h1>
     <ul>
       <li className='link'>
        <Link to="/">Home</Link> 
         
       </li>
       <li className='link'><Link to="/about">About</Link></li>

       <li className='link'>
        <Link to="/Skills">Skills</Link> 
         
       </li>

       <li className='link'>
        <Link to="/Project">Project</Link> 

         
       </li>

      <li className='link'>
        <Link to="/Contact">Contact</Link>
      </li>


     </ul>
   </nav>

   <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="/About" element={<About></About>}></Route>
     <Route path="/Skills" element={<Skills></Skills>}></Route>
    <Route path="/Project" element={<Project></Project>}></Route>
    <Route path="/Contact" element={<Contact></Contact>} > </Route>
   </Routes>




      





  
  </div>
);
}


export default App;
