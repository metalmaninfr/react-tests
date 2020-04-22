import React from 'react';
import styled from 'styled-components';

import MenuOverlay from './menu-overlay';
import MenuContent from './menu-content';

const StyledContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: flex;
`;

const StyledBurger = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 5rem;
  cursor: pointer;
`

const StyledBurgerLine = styled.div`
  margin: .5rem;
  height: .2rem;
  width: 100%;
  background: black;
`


const Container = ({ children, isOpen, toggleMenu }) => {
  if (!isOpen) return (
    <StyledBurger onClick={toggleMenu}>
      <StyledBurgerLine />
      <StyledBurgerLine />
      <StyledBurgerLine />
    </StyledBurger>
  )
  return (
    <StyledContainer>
      <MenuOverlay onClick={toggleMenu} />
      <MenuContent>
        {children}
      </MenuContent>
    </StyledContainer>
  )
};

export default Container;
