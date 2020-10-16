import React from 'react';
import './App.css';
import Header from './components/Header';
import Film from './components/Film';
import Films from './components/Films';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Planets from './components/Planets';
import SearchResults from './components/SearchResults';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import { Form, Container } from 'react-bootstrap';

function App() {
  const [search, setSearch] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(`https://swapi.dev/api/films/`);
      setMovies(result.data.results);
    };
    if (movies === null) {
      fetchMovies();
    }
  }, [movies]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const result = await axios(
        `https://swapi.dev/api/people/?search=${search}`
      );
      setSearchResults(result.data.results);
    };
    if (search !== null) {
      fetchSearchResults();
    }
  }, [search]);

  const handleQueryChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length >= 3) {
      setSearch(query);
    }
  };

  return (
    <>
      <div id='background'></div>
      <div id='midground'></div>
      <div id='foreground'></div>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path='/films'>
              <Films movies={movies} />
            </Route>
            <Route exact path='/film/:id'>
              <Film movies={movies} />
            </Route>
            <Route exact path='/planets'>
              <Planets />
            </Route>
            <Route exact path='/starships'>
              <Starships />
            </Route>
            <Route exact path='/vehicles'>
              <Vehicles />
            </Route>
            <Route exact path='/characters'>
              <Form className='d-flex justify-content-center'>
                <Form.Control
                  className='search-bar'
                  type='text'
                  size='lg'
                  value={query}
                  onChange={handleQueryChange}
                  placeholder='Search for Star Wars Characters'
                />
              </Form>
              <SearchResults results={searchResults} movies={movies} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
