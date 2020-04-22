import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// App components
import MenuBody from './components/organisms/menu/menu-body';
import Menu from './components/organisms/menu';
import MenuGroup from './components/molecules/link-group';
import MenuHeader from './components/organisms/menu/menu-header';
import Title from './components/atoms/title';


const App = () => {
  const [ MenuOpen, setOpenMenu ] = useState(false);
  return (
    <>
      <Menu isOpen={MenuOpen} toggleMenu={() => setOpenMenu(!MenuOpen)}>
        <MenuHeader>
          <div onClick={() => setOpenMenu(false)}>X</div>
        </MenuHeader>
        <MenuBody>
          <MenuGroup />
        </MenuBody>
      </Menu>
      <Route exact path="/">
        <Title size='large'>home</Title>
      </Route>
      <Route path="/about">
        <Title size='large'>About</Title>
      </Route>
      <Route path="/Contact">
        <Title size='large'>Contact</Title>
      </Route>
      <Route path="/list-of-work">
        <Title size='large'>List of work</Title>
      </Route>
    </>
  );
}

export default App;
