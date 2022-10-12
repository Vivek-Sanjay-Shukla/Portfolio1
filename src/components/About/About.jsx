import React from 'react'
import './About.css'
import Leetcode from '../../img/Leetcode.png'
// import codechef from '../../img/codechef.png'
import GFG from '../../img/GFG.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import {motion} from 'framer-motion'

const About = () => {

  const transition = {duration:1,type:'spring'}

  return (
    <div className='about'>

{/* left */}
       <div className="awesome" id = "About">
        <span>About</span>
        <span>Me</span>
        <span>
          I am student at don bosco institute of technology,kurla.
          <br/> Currently pursuing B.E. in Information technology
            I am passionate about problem solving.
          <br />
         Looking for sde internship role
        </span>
        <a href={Resume} download>
        <button className='button a-button'>Download CV</button>
        </a>
        <div className='blur a-blur' style={{background : '#ABF1FF94'}}></div>
       </div>

       <div className="blur a-blur1" style={{background:"#C1F5FF"}}></div>

{/* right */}

       <div className="cards">
           
            
            <motion.div
           initial={{ left: "25rem" }}
           whileInView={{ left: "14rem" }}
           transition={transition}
            style={{left:'14rem'}}>
              <Card
               emoji = {Leetcode}
               heading = {"Leetcode"}
               detail = {'350+ questions'}
               link = {'https://leetcode.com/coder_679/'}
              />
            </motion.div>

            <motion.div
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
            transition = {transition}
           style={{top:'12rem', left:'-4rem'}}>
              <Card
               emoji = {GFG}
               heading = {"GFG"}
               detail = {'130+ questions'}
               link = {'https://auth.geeksforgeeks.org/user/coder123456778/practice'}
              />
            </motion.div>

            {/* <motion.div
           initial={{ top: "19rem", left: "25rem" }}
           whileInView={{ left: "12rem" }}
            transition = {transition}
           style={{top:'19rem', left:'12rem'}}>
              <Card
               emoji = {codechef} 
               heading = {"Codechef"}
               detail = {'4 star rating'}
              />
            </motion.div> */}
      
       <div className="blur a-blur2" style={{background:"var(--purple)"}}></div>
       </div>
    </div>
  )
}
 
export default About