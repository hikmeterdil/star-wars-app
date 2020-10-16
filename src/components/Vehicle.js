import React from 'react';
import {Card} from 'react-bootstrap';

function Vehicle(props) {
    const {vehicle} = props;
    const { name, model, cost_in_credits} = vehicle;
   
    return (<Card className='standart-ele'
  
    >
      <Card.Img className='electric-shadowed' variant='top' src='/vehicle.png' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {model}</Card.Text>
        <Card.Text>${cost_in_credits}</Card.Text>
      </Card.Body>
    </Card>
      ) 
      
      
    
    }

      export default Vehicle;