import React from 'react';
import {Card} from 'react-bootstrap';

function Starship(props) {
    const {starship} = props;
    const { name, model, cost_in_credits} = starship;
   
    return ( <Card className='standart-ele'
     
    >
      <Card.Img className='electric-shadowed' variant='top' src='/starship.png' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {model}</Card.Text>
        <Card.Text>${cost_in_credits}</Card.Text>
      </Card.Body>
    </Card>) 
      
     
  ;
}

    
    
    

      export default Starship;