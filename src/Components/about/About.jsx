import React from 'react';
import "./about.css";
import aboutImg from "../../Assets/about.jpg"
import Info from './Info';
import CV from "../../Assets/Resume.pdf"

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
          <img src={aboutImg} alt="" className='about_img' />
          <div className="abut_data">
            <Info/>
            <p className="about_description">
              I'm a frontend & wordpress developer. I develop wordpress websites, woocommerce stores and frontend UI/Ux for 
              websites and web applications.
            </p>

            <a href={CV} className="button button--flex">Download CV <i class="uil uil-file-download-alt cv-icon"></i></a>
          </div>
        </div>
    </section>
  )
}

export default About
