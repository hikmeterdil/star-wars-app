import React from 'react';
import {
  Icon,
  Button,
  Container,
  Header,
} from 'semantic-ui-react';

import { useParams, Link } from 'react-router-dom';



function Film(props) {
    const movies = props.movies
    const getMovie = ((movies, id) => {
      return movies.filter((movie) => movie.episode_id.toString() == id)[0]
    })
    
    const { id } = useParams()
   
    
  
    if (movies !== null) {
      const { title, director, release_date, opening_crawl } = getMovie(movies, id)
      ;
      return <>
      <Container text textAlign='left'>
        <Header as='h3'>{title}</Header>
        <h4>
          Director: <span className='date'>{director}</span>
        </h4>
        <h4>
          Release date: <span className='date'>{release_date}</span>
        </h4>
        <p>{opening_crawl}</p>
  
        <Link to='/'>
          {' '}
          <Button secondary>
            <Icon disabled name='arrow left' /> Back
          </Button>
        </Link>
      </Container>
    </>
    } else {
      return <div>loading</div>
    }
  
    
  }
  export default Film;