import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Films(props) {
  const movies = props.movies;

  return (
    <div className='films-container'>
      <div className='horizontal-scroll-wrapper'>
        {movies &&
          movies.map((movie, i) => {
            const src = `/${movie.episode_id}.jpg`;
            return (
              <div 
                key={i}
                className='horizontal-scroll-item'
                md={3}
                style={{
                  padding: '0.3rem',

                  color: 'white',
                  margin: '100px',
                }}
              >
                <Link to={'/film/' + movie.episode_id}>
                  <Image rounded fluid className='film-image' src={src} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Films;
