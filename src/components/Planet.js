import React from 'react';
import { Card } from 'react-bootstrap';

function Planet(props) {
  const { planet } = props;
  const { name, population } = planet;

  return (
    <Card className='standart-ele'>
      <Card.Img className='crimson-shadowed' variant='top' src='/planet.png' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Population: {population}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Planet;
