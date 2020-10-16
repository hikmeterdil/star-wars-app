import React from 'react';
import { Link } from 'react-router-dom';

import { Image, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Image fluid src='/logoSW.png' />
      <Nav
        style={{ marginBottom: '50px', marginTop: '-50px' , height:'50px'}}
        className='justify-content-center'
      >
        <Nav.Item>
          <Link to='/characters'>Characters</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/planets'> Planets</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/vehicles'>Vehicles</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/starships'>Starships</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/films'>Movies</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;