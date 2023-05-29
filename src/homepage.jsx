import React, { useEffect } from 'react';
import './homepage.css'
import Navbar from './navbar';
const homepage = () => {

  useEffect(() => {
    const handleMouseMove = (event) => {
      const w = window.innerWidth;
      const pct = (360 * event.pageX) / w;
      const bg = `linear-gradient(${pct}deg,#4ac1ff,#ffc8dd)`;
      document.querySelector('.gradient').style.backgroundImage = bg;
    };

    document.querySelector('.gradient').addEventListener('mousemove', handleMouseMove);

    return () => {
      document.querySelector('.gradient').removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient">
      <div className="main">
        <div className="Navbar">
            <Navbar/>
        </div>
        <div className="main1">
          <p id="p-text">
            Kuber is a Designer/Developer focused on creating user-centric
            experiences and meaningful identities
          </p>
          <br />
          <br />
          <a href="/threed" id="lm">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default homepage