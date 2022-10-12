import React from 'react'
import './Projects.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ChatApp from '../../img/ChatApp.png' 
import Portfolio from '../../img/Portfolio.png'
import Github from '../../img/github.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
  return (
    <div className="projects" id='Projects'>
        <span>Projects</span>   
        <span></span>

        {/* slider */}
        <Swiper
        spaceBetween={29}
        slidesPerView = {3}
        grabCursor = {true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        className = 'projects-slider'
        >
            <SwiperSlide>
              <a class = "link1" href="https://github.com/Vivek-Sanjay-Shukla/Chat-App">
              <img src={Github} alt="" />
              </a>
                <img src={ChatApp} alt="" />   
            </SwiperSlide>

            <SwiperSlide>
            <a class = "link1" href="https://github.com/Vivek-Sanjay-Shukla/Chat-App">
              <img src={Github} alt="" />
              </a>
                <img src={Portfolio} alt="" />
            </SwiperSlide>  

        </Swiper>
 
    </div>
  )
}

export default Projects