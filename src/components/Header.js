import React from 'react';
import { Header as Heading, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Heading size='huge'>Star Wars </Heading>

    <Menu widths='5'>
    
      <Menu.Item>
        <Link to='/characters'>Characters</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/planets'>Planets</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/starships'>Starships</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/vehicles'>Vehicles</Link>
      </Menu.Item>
    </Menu>
    </>
  );
};

export default Header;
