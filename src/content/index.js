import React from 'react';
import './styles.css';

function Content() {
  return (
    <div className="Content">        
        <div className="top">
          <div className="logo">
            <a
              className="Header-link"
              href="./app"
              rel="author"
            >      
                <img 
                    // src={logo} 
                    src="https://via.placeholder.com/50/fff/000.jpg"
                    className="Header-logo" 
                    alt="logo" 
                />
            </a> 
          </div>
          <div className="nav">
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>My CV</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="middle">
          middle here
        </div>
        <div className="bottom">
          bottom here
        </div>
    </div>
  );
}

export default Content;
