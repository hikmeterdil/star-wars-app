import React from 'react';

function Starship(props) {
    const {starship} = props;
    const { name, model, manufacturer, cost_in_credits} = starship;
   
    return (
      <div className='ui items'>
        <div className='item' style={{ 
          padding: '2rem',
          boxShadow: '1px 1px 5px 0px rgba(199,197,199,1)'}}>
          <div className='image'>
            <img src='/starship.png' alt='starship' />
          </div>
          <div className='content' style={{color: 'yellow'}}  >
            <div className='header' style={{color: 'yellow'}}>{name}</div>
            <div className='meta' style={{color: 'yellow'}}>{model} </div>
            <div className='description' style={{color: 'yellow'}}>{manufacturer}</div>
            <div className='extra' style={{color: 'yellow'}}>{cost_in_credits}</div>
          </div>
          
        </div>
      </div>) }

      export default Starship;