import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Film from './components/Film';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships';
import Planets from './components/Planets';
import SearchResults from './components/SearchResults';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Input, Container, Button } from 'semantic-ui-react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(null);
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
    <Router>
      <Container>
        <Header />
        <Switch>
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
            <Input
              style={{ marginBottom: '2rem' }}
              type='text'
              placeholder='Search for Star Wars Characters'
              size='large'
              value={query}
              onChange={handleQueryChange}
            />
            <SearchResults results={searchResults} movies={movies} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
