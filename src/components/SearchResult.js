import React from 'react';
import { Link, useParams } from 'react-router-dom';

function getMovie(movies, id) {
    return movies.filter((movie) => movie.episode_id.toString() == id)[0]
}
function SearchResult(props) {
    const {result, movies} = props;
    const { name, birth_year, height, gender } = result;
    const filmIds = result.films.map((filmUrl) => {
      const startInd = filmUrl.indexOf('/films/') + 7
      const endInd = filmUrl.indexOf('/', startInd)
      return filmUrl.substring(startInd, endInd)
    })
    return (
      <div className='ui items'>
        <div className='item'>
          <div className='image'>
            <img src='/profile-avatar.png' alt='avatar' />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
            <div className='meta'>{birth_year}</div>
            <div className='description'>{height}</div>
            <div className='extra'>{gender}</div>
          </div>
          <div role='list' className='ui list'>
          {filmIds.map((id, i) => {return (
             <div role='listitem' className='item' key = {i}>
            <Link to={'/film/' + id}>{getMovie(movies, id).title}</Link>
            </div>)}
          )}
          </div>
        </div>
      </div>) }

      export default SearchResult;