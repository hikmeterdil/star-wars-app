import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Nav} from 'react-bootstrap';

function getMovie(movies, id) {
    return movies.filter((movie) => movie.episode_id.toString() === id)[0]
}
function SearchResult(props) {
    const {result, movies} = props;
    const { name, birth_year, height, gender } = result;
    const filmIds = result.films.map((filmUrl) => {
      const startInd = filmUrl.indexOf('/films/') + 7
      const endInd = filmUrl.indexOf('/', startInd)
      return filmUrl.substring(startInd, endInd)
    })
    return ( <Card justify-content-center className='standart-ele'
     
    >
      <Card.Img className='crimson-shadowed avatar-img'variant='top' src='/profile-avatar.png' />
      <Card.Body tex-centered>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Birth Year: {birth_year}</Card.Text>
        <Card.Text>Height: {height}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
        {filmIds.map((id, i) => {return (
        <Nav.Link style={{margin:'5px'}} className='btn-trns'><Link to={'/film/' + id}>{getMovie(movies, id).title}</Link></Nav.Link>)}
        )}
      </Card.Body>
    </Card>
    ) 
      
     
    
    
    
    
    
    }

      export default SearchResult;