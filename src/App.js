import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// App components
import MenuBody from './components/organisms/menu/menu-body';
import Menu from './components/organisms/menu';
import MenuGroup from './components/molecules/link-group';
import MenuHeader from './components/organisms/menu/menu-header';

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
        <div>home</div>
      </Route>
      <Route path="/about">
        <div>About</div>
      </Route>
      <Route path="/Contact">
        <div>Contact</div>
      </Route>
      <Route path="/list-of-work">
        <div>List of work</div>
      </Route>
    </>
  );
}

export default App;
