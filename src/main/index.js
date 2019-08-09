import React from 'react';

//styles
import { 
  MainContent,
  Top,
  TopBar,
  Logo,
  NavWrapper,
  NavContainer,
  NavItem,
  Intro,
  Middle,
  Bottom,
}  from './styles.js';

function Main () {
  return (
    <MainContent>        
        <Top>
          <TopBar>
            <Logo>
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
            </Logo>
            <NavWrapper>
              <NavContainer>
                <NavItem>About</NavItem>
                <NavItem>Portfolio</NavItem>
                <NavItem>My CV</NavItem>
                <NavItem>Contact</NavItem>
              </NavContainer>
            </NavWrapper>
          </TopBar>
          <Intro>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </Intro>
        </Top>

        <Middle>
          <p>middle here</p>
        </Middle>

        <Bottom>
         <p>bottom here</p>
        </Bottom>
    </MainContent>
  );
}

export default Main;
