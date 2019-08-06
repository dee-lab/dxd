import React from 'react';
import './styles.css';

function Header() {
  return (
    <div className="Header">        
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
  );
}

export default Header;
