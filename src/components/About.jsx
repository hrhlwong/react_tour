import React from 'react';
import img from "../assets/above.webp";
import Title from './Title';

const About = () => {
  return (
    <section className="about" id="about">
      <Title title='about' subtitle='us'/>      
      <div className="about-content">
        <div className="about-img">
          <img src={img} alt="About" />
        </div>
        <div className="text">
          <h3>expolore the difference</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#home" className="btn-about">read more</a>
        </div>
      </div>
    </section>
  )
};

export default About;