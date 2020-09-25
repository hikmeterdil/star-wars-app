import React from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './components/Film'
import SearchResults from './components/SearchResults';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import {
 
  Container,
  Header,
} from 'semantic-ui-react';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(
        `https://swapi.dev/api/films/`
      );
      setMovies(result.data.results)
    }
    if (movies === null) {
      fetchMovies()
    }
  }, [movies])

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
      setQuery(query)
      if (query.length >= 3) {
        setSearch(query)
      }
  }

  return (
    <Router>
      <Container>
      <Switch>
        <Route path='/film/:id'>
          <Film movies={movies}/>
        </Route>

        <Route path='/'>
          <input
            type='text'
            value={query}
            onChange={handleQueryChange}
          />
          <SearchResults results={searchResults} movies={movies}/>
        </Route>
      </Switch>
      </Container>
    </Router>
  );
}



export default App;