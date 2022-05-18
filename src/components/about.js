import React from 'react';
import github from '../images/githubb.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitterr.svg';

const About = () => {
  const handleReturn = () => {
    window.history.back();
  };
  return (
    <div className="about-cont">
      <h1>About</h1>
      <p>
        This is a simple app that shows the stats of the covid 19 cases in South
        American countries up to date.
      </p>
      <p>
        The data is taken from
        {' '}
        <a href="https://covid19tracking.narrativa.com/index_en.html">
          covid19tracking.narrativa.com
        </a>
      </p>
      <div>
        <h2>Author</h2>
        <p>Juan Sebastian Sotomayor</p>
        <a href="https://github.com/Juanse7793">
          <img className="github" src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/juansebastiansotomayor/">
          <img className="linkedin" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/Juanse77930">
          <img className="twitter" src={twitter} alt="twitter" />
        </a>
      </div>
      <div>
        <button type="button" className="return-btn" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
export default About;
