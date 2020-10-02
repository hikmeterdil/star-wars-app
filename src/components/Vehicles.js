import React from 'react';
import Vehicle from './Vehicle';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';

function Vehicles() {
  const [url, setUrl] = useState('https://swapi.dev/api/vehicles/');
  const [pages, setPages] = useState([]);
  const [vehicles, setVehicles] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      const result = await axios(url);
      setPages(
        new Array(Math.ceil(result.data.count / 10))
          .fill(0)
          .map((n, i) => i + 1)
      );
      setVehicles(result.data.results);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };
    fetchVehicles();
  }, [url]);
  console.log(pages);
  const changePage = (page) => {
    setUrl(`https://swapi.dev/api/vehicles/?page=${page}`);
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
        {vehicles &&
          vehicles.map((vehicle) => (
            <Grid.Column key={vehicle.name}>
              <Grid.Row>
                <Vehicle vehicle={vehicle} />
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

export default Vehicles;
