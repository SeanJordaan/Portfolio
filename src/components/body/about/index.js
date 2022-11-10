import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact/index';
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi my name is,
          <br /> <span className="info-name">Sean Jordaan</span>.
          <br /> And I'm a Frontend Web Developer
        </div>
        <div className="about-photo">
          <img
            src={require('../../../assets/coding.png')}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
