import React from "react";
import "./Skills.css";
import Html from '../../img/html-5.png'
import Css from '../../img/css-3.png'
import C from '../../img/c-.png'
// import Shopify from '../../img/Shopify.png'
import Nodejs from '../../img/nodejs.png'
import reactimg from '../../img/react.png'
import {motion} from 'framer-motion'
// import {Link} from 'react-scroll'

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="awesome">
        <span>Skills &</span>
        <span>Experience</span>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Sapiente doloremque id corporis, quidem ipsam, eligendi quaerat
          natus
          <br />
          veritatis magnam, rem quo? Velit numquam asperiores dolorem unde odit
          sunt aperiam suscipit!
        </span>
        <button className="button a-button">Hire me</button>
        <div className="blur a-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

       <div className="s-right">
        <motion.div 
        initial = {{rotate:45}}
        whileInView={{rotate:0}}
        viewport = {{margin:'-40px'}}
        transition = {{duration:2.5,type:'spring'}}
        className="s-mainCircle">
            <div className="s-secCircle">
                <img src={Html} alt="" />
            </div>
            <div className="s-secCircle">
                <img src={Css} alt="" />
            </div>
            <div className="s-secCircle">
                <img src={reactimg} alt="" />
            </div>

            <div className="s-secCircle">
                <img src={C} alt="" />
            </div>

            <div className="s-secCircle">
                <img src={Nodejs} alt="" />
            </div>
        </motion.div>
       </div>
     
    </div>
  );
};

export default Skills;
