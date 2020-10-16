import React from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';

import { useParams, Link } from 'react-router-dom';

function Film(props) {
  const movies = props.movies;
  const getMovie = (movies, id) => {
    return movies.filter((movie) => movie.episode_id.toString() === id)[0];
  };

  const { id } = useParams();

  if (movies !== null) {
    const { title, opening_crawl } = getMovie(
      movies,
      id
    );
    return (
      <>
        <Jumbotron
          style={{
            backgroundColor: 'rgba(35, 255, 255, 0.05)',
            color: 'white',
            padding: '10px',
          }}
        >
          <Image fluid rounded src='/scene.jpg' />
          <h1 style={{ marginTop: '15px' }}>{title}</h1>
          <p>{opening_crawl}</p>
          <p>
            <Link to='/Films'>
              <Button variant='primary'>Go Back</Button>
            </Link>
          </p>
        </Jumbotron>
      </>
    );
  } else {
    return <div>loading</div>;
  }
}
export default Film;
