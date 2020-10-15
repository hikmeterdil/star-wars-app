import React from 'react';
import { Link } from 'react-router-dom';
import {Image} from 'semantic-ui-react';

const Header = () => {
  return (
    <>
    <Image src='/logoSW.png'></Image>
<div class="hr-nav-1">
    <nav class="nav-container">
        <p class="nav-item"> <Link to='/characters'>Characters</Link></p>
        <p class="nav-item"><Link to='/planets'>Planets</Link></p>
        <p class="nav-item"> <Link to='/vehicles'>Vehicles</Link></p>
        <p class="nav-item"> <Link to='/starships'>Starships</Link></p>
        <p class="nav-item"><Link to='/films'>Movies</Link>  </p>
  
    </nav>
</div>






    {/* <Heading size='huge'>Star Wars </Heading>

    <Menu borderless widths='1'>
    
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
    </Menu> */}
    </>
  );
};

export default Header;
