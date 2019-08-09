import styled from 'styled-components';

export const MainContent = styled.section`
  flex: 1 0 auto;
`;

export const Top = styled.section`
  background-image: url("https://www.pirenko.com/seven/wp-content/uploads/sites/7/2014/11/wood-finale.jpg");
  height: 100%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
`;


export const Logo = styled.div`
  padding: 10px;
  flex-wrap:wrap;
`;

export const NavWrapper = styled.div`
  flex-wrap:wrap; 
`;

export const NavContainer = styled.ul`
  position: sticky;
`;

export const NavItem = styled.li`
  display:inline;
  line-height:35px;
  color: white;
  padding: 10px;  
`;

export const Intro = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const Middle = styled.section`

`;

export const Bottom = styled.section`

`;


