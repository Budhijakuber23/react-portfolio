import React, { useState } from 'react';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="Navbar">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" checked={isChecked} onChange={handleToggle} />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="./skill">Skills</a>
                </li>
                {/* <li>
                  <a href="./work">Work</a>
                </li> */}
                <li>
                  <a href="./threed">view 3D</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1_k8XXKI2gQv1-XmFPUxCYSomZnaqeMh9/view?usp=drivesdk">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
