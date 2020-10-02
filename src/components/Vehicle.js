import React from 'react';

function Vehicle(props) {
    const {vehicle} = props;
    const { name, model,manufacturer, cost_in_credits} = vehicle;
   
    return (
      <div className='ui items'>
        <div className='item' style={{ 
          padding: '2rem',
          boxShadow: '1px 1px 5px 0px rgba(199,197,199,1)'}}>
          <div className='image'>
            <img src='/vehicle.png' alt='vehicle' />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
            <div className='meta'>{model}</div>
            <div className='description'>{manufacturer}</div>
            <div className='extra'>{cost_in_credits}</div>
          </div>
          
        </div>
      </div>) }

      export default Vehicle;