import React from 'react';

function Planet(props) {
    const {planet} = props;
    const { name, climate, population, gravity, terrain } = planet;
   
    return (
      <div className='ui items'>
        <div className='item' style={{ 
          padding: '2rem',
          boxShadow: '1px 1px 5px 0px rgba(199,197,199,1)'}}>
          <div className='image'>
            <img src='/planet.png' alt='planet' />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
            <div className='meta'>{climate}</div>
            <div className='description'>{population}</div>
            <div className='extra'>{gravity}</div>
          </div>
          
        </div>
      </div>) }

      export default Planet;