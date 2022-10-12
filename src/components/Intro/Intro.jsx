import React from "react";
import "./Intro.css";
// import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
// import Github from '../../img/github.png'
import Vector1 from '../../img/Vector1.png'
// import Vector2 from '../../img/Vector2.png'
import boy from '../../img/photo1.png'
import Crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion'

const Intro = () => {

  const transition = {duration : 2, type:'spring'}

  return (
    <div className="intro">
        
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Vivek Shukla</span>
          <span></span>
        </div>
        {/* <button className="button i-button">Hire Me</button> */}

         <div className="i-icons">

            {/* <a href="https://www.google.com">
            <img src={Github} alt="github" />
            </a> */}

            <a href="https://www.linkedin.com/in/vivek-shukla-303926206/">
            <img src={Linkedin} alt="LinkedIn" />
            </a>

            {/* <a href="/">
            <img src="" alt="Instagram" />
            </a> */}
         </div>

      </div>

      <div className="i-right"> 
        <img src="" alt="" />
        <img src="" alt="" />
        <img src={boy} alt="" />
        <motion.img 
           initial = {{left:"-36%"}}
           whileInView = {{left:"-24%"}}
           transition = {{duration:2,type:'spring'}}
           src={glassesimoji}
           alt="" 
        />
        
        <motion.div
         initial = {{top:'-4%',left:'74%'}}
         whileInView = {{left:'68%'}}
         transition = {transition}

        style={{top:'-4%', left:'68%'}}
        className='floating-div'
        >   
          <FloatingDiv image={Crown} text1 = 'Programmer' text2 = ''/>
        </motion.div>

        <motion.div 
        initial = {{left:'9rem',top:'18rem'}}
        whileInView = {{left:'0rem'}}
        transition = {transition}

        style={{top:'18rem', left:'0rem'}}
        className='floating-div'
        >
          {/* <FloatingDiv image={thumbup} text1 = 'best design' text2 = 'award'/> */}
        </motion.div>

        <div className="blur" style={{background : "rgba(238 210 255)"}}></div>

        <div className="blur" style={{background : "#C1F5FF", top:'17rem', width:'21rem',height:'11rem', left:'-9rem'}}></div>
          
      </div>

    </div>
  );
};

export default Intro;
