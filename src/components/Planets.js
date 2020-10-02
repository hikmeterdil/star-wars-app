import React from 'react';
import Planet from './Planet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';

function Planets() {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/');
  const [pages, setPages] = useState([]);
  const [planets, setPlanets] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await axios(url);
      setPages(
        new Array(Math.ceil(result.data.count / 10))
          .fill(0)
          .map((n, i) => i + 1)
      );
      setPlanets(result.data.results);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };
    fetchPlanets();
  }, [url]);
  console.log(pages);
  const changePage = (page) => {
    setUrl(`https://swapi.dev/api/planets/?page=${page}`);
  };

  const forward = () => {
    if (next) {
      setUrl(next);
    }
  };

  const backward = () => {
    if (prev) {
      setUrl(prev);
    }
  };

  return (
    <>
      <Grid columns={2}>
        {planets &&
          planets.map((planet) => (
            <Grid.Column key={planet.name}>
              <Grid.Row>
                <Planet planet={planet} />
              </Grid.Row>
            </Grid.Column>
          ))}
      </Grid>
      <Grid columns={1} centered='true'>
        {prev && <Button onClick={backward}>Prev</Button>}
        {pages &&
          pages.map((p) => (
            <Button
              onClick={() => {
                changePage(p);
              }}
            >
              {p}
            </Button>
          ))}
        {next && <Button onClick={forward}>Next</Button>}
      </Grid>
    </>
  );
}

export default Planets;
